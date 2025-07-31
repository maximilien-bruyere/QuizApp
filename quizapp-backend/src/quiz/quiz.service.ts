import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
  ConflictException,
} from '@nestjs/common';
import { QuizDifficulty } from './quiz-difficulty.enum';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class QuizService {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    title: string;
    subject_id: number;
    category_id: number;
    difficulty?: QuizDifficulty;
    time_limit?: number;
    description?: string;
    is_exam_mode?: boolean;
    questions?: Array<{
      content: string;
      type: string;
      image_url?: string;
      explanation?: string;
      options: Array<{
        text: string;
        is_correct: boolean;
      }>;
      pairs?: Array<{
        left: string;
        right: string;
      }>;
    }>;
  }) {
    try {
      return await this.prisma.quiz.create({
        data: {
          title: data.title,
          description: data.description || null,
          difficulty: data.difficulty || QuizDifficulty.MOYEN,
          time_limit: data.time_limit || null,
          is_exam_mode: data.is_exam_mode || false,
          subject: { connect: { subject_id: data.subject_id } },
          category: { connect: { category_id: data.category_id } },
          questions: data.questions
            ? {
                create: data.questions.map((question) => ({
                  content: question.content,
                  type: question.type,
                  image_url: question.image_url || null,
                  explanation: question.explanation || null,
                  options: {
                    create: (question.options ?? []).map((opt) => ({
                      text: opt.text,
                      is_correct: opt.is_correct,
                    })),
                  },
                  pairs: {
                    create: (question.pairs ?? []).map((pair) => ({
                      left: pair.left,
                      right: pair.right,
                    })),
                  },
                })),
              }
            : undefined,
        },
        include: {
          subject: true,
          category: true,
          questions: {
            include: { options: true, pairs: true },
          },
        },
      });
    } catch (error) {
      if (error.code === 'P2003') {
        throw new NotFoundException('Sujet ou catégorie non trouvé');
      }
      throw new InternalServerErrorException('Erreur interne du serveur');
    }
  }

  async findAll() {
    try {
      return await this.prisma.quiz.findMany({
        include: {
          subject: true,
          category: true,
        },
        orderBy: {
          quiz_id: 'desc',
        },
      });
    } catch (error) {
      throw new InternalServerErrorException('Erreur interne du serveur');
    }
  }

  async findOne(id: number) {
    try {
      const quiz = await this.prisma.quiz.findUnique({
        where: { quiz_id: id },
        include: {
          subject: true,
          category: true,
          questions: {
            include: {
              options: true,
              pairs: true,
            },
            orderBy: {
              question_id: 'asc',
            },
          },
        },
      });

      if (!quiz) {
        throw new NotFoundException('Quiz non trouvé');
      }

      return quiz;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Erreur interne du serveur');
    }
  }

  async update(
    id: number,
    data: {
      title?: string;
      subject_id?: number;
      category_id?: number;
      difficulty?: QuizDifficulty;
      time_limit?: number;
      description?: string;
      is_exam_mode?: boolean;
      questions?: any[];
    },
  ) {
    try {
      // Vérifier que le quiz existe
      await this.findOne(id);

      // 1. Récupère les questions existantes en base
      const existingQuestions = await this.prisma.question.findMany({
        where: { quiz_id: id },
        select: { question_id: true },
      });

      // 2. Liste des IDs envoyés par le frontend
      const incomingIds = (data.questions ?? [])
        .filter((q) => q.question_id)
        .map((q) => q.question_id);

      // 3. Questions à supprimer (présentes en base mais plus dans le payload)
      const toDelete = existingQuestions
        .filter((q) => !incomingIds.includes(q.question_id))
        .map((q) => q.question_id);

      // 4. Supprime les options, pairs puis les questions retirées
      if (toDelete.length > 0) {
        await this.prisma.option.deleteMany({
          where: { question_id: { in: toDelete } },
        });
        await this.prisma.matchingPair.deleteMany({
          where: { question_id: { in: toDelete } },
        });
        await this.prisma.question.deleteMany({
          where: { question_id: { in: toDelete } },
        });
      }

      // 5. Prépare la structure pour Prisma (upsert sur questions/options/pairs)
      const questionsInput = data.questions
        ? {
            upsert: data.questions.map((q) => ({
              where: { question_id: q.question_id ?? 0 },
              update: {
                content: q.content,
                type: q.type,
                image_url: q.image_url || null,
                explanation: q.explanation || null,
                options: {
                  upsert: q.options.map((opt) => ({
                    where: { option_id: opt.option_id ?? 0 },
                    update: {
                      text: opt.text,
                      is_correct: opt.is_correct,
                    },
                    create: {
                      text: opt.text,
                      is_correct: opt.is_correct,
                    },
                  })),
                },
                pairs: {
                  deleteMany: {}, // supprime toutes les anciennes paires
                  create: (q.pairs ?? []).map((pair) => ({
                    left: pair.left,
                    right: pair.right,
                  })),
                },
              },
              create: {
                content: q.content,
                type: q.type,
                image_url: q.image_url || null,
                explanation: q.explanation || null,
                options: {
                  create: q.options.map((opt) => ({
                    text: opt.text,
                    is_correct: opt.is_correct,
                  })),
                },
                pairs: {
                  create: (q.pairs ?? []).map((pair) => ({
                    left: pair.left,
                    right: pair.right,
                  })),
                },
              },
            })),
          }
        : undefined;

      // 6. Update du quiz
      return await this.prisma.quiz.update({
        where: { quiz_id: id },
        data: {
          title: data.title,
          description: data.description,
          difficulty: data.difficulty,
          time_limit: data.time_limit,
          is_exam_mode: data.is_exam_mode,
          subject_id: data.subject_id,
          category_id: data.category_id,
          ...(questionsInput && { questions: questionsInput }),
        },
        include: {
          subject: true,
          category: true,
          questions: {
            include: { options: true, pairs: true },
            orderBy: { question_id: 'asc' },
          },
        },
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Quiz non trouvé');
      }
      if (error.code === 'P2003') {
        throw new NotFoundException('Sujet ou catégorie non trouvé');
      }
      throw new InternalServerErrorException('Erreur interne du serveur');
    }
  }

  async delete(id: number) {
    try {
      // Vérifier que le quiz existe
      await this.findOne(id);

      // Supprimer les réponses liées aux tentatives de quiz
      await this.prisma.answer.deleteMany({
        where: {
          quizAttempt: {
            quiz_id: id,
          },
        },
      });

      // Supprimer les tentatives de quiz
      await this.prisma.quizAttempt.deleteMany({
        where: { quiz_id: id },
      });

      // Supprimer les options liées aux questions du quiz
      await this.prisma.option.deleteMany({
        where: {
          question: {
            quiz_id: id,
          },
        },
      });

      // Supprimer les pairs liées aux questions du quiz
      await this.prisma.matchingPair.deleteMany({
        where: {
          question: {
            quiz_id: id,
          },
        },
      });

      // Supprimer les questions du quiz
      await this.prisma.question.deleteMany({
        where: { quiz_id: id },
      });

      // Supprimer le quiz
      await this.prisma.quiz.delete({
        where: { quiz_id: id },
      });

      return {
        message: 'Quiz supprimé avec succès',
        deletedId: id,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      if (error.code === 'P2025') {
        throw new NotFoundException('Quiz non trouvé');
      }
      console.error('Erreur lors de la suppression du quiz:', error); // Log pour déboguer
      throw new InternalServerErrorException('Erreur interne du serveur');
    }
  }
}
