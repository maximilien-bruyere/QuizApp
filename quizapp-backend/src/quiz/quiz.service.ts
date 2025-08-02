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

      // Supprimer toutes les options liées aux questions du quiz
      await this.prisma.option.deleteMany({
        where: { question: { quiz_id: id } },
      });
      // Supprimer toutes les paires liées aux questions du quiz
      await this.prisma.matchingPair.deleteMany({
        where: { question: { quiz_id: id } },
      });
      // Supprimer toutes les questions du quiz
      await this.prisma.question.deleteMany({
        where: { quiz_id: id },
      });

      // Mettre à jour les infos du quiz
      await this.prisma.quiz.update({
        where: { quiz_id: id },
        data: {
          title: data.title,
          description: data.description,
          difficulty: data.difficulty,
          time_limit: data.time_limit,
          is_exam_mode: data.is_exam_mode,
          subject_id: data.subject_id,
          category_id: data.category_id,
        },
      });

      // Recréer les questions/options/paires
      if (data.questions && Array.isArray(data.questions)) {
        for (const q of data.questions) {
          const question = await this.prisma.question.create({
            data: {
              quiz_id: id,
              content: q.content,
              type: q.type,
              image_url: q.image_url || null,
              explanation: q.explanation || null,
            },
          });

          if (q.options && (q.type === 'MULTIPLE' || q.type === 'SINGLE')) {
            for (const opt of q.options) {
              await this.prisma.option.create({
                data: {
                  question_id: question.question_id,
                  text: opt.text,
                  is_correct: opt.is_correct,
                },
              });
            }
          }

          if (q.pairs && q.type === 'MATCHING') {
            for (const pair of q.pairs) {
              await this.prisma.matchingPair.create({
                data: {
                  question_id: question.question_id,
                  left: pair.left,
                  right: pair.right,
                },
              });
            }
          }
        }
      }

      // Retourner le quiz mis à jour
      return await this.findOne(id);
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
