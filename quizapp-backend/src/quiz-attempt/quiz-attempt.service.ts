import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

/**
 * Service QuizAttempt – Gère la logique métier et l'accès aux données pour les tentatives de quiz.
 *
 * Ce service permet de :
 * - Créer, récupérer, mettre à jour, finaliser et supprimer des tentatives de quiz
 * - Gérer les erreurs Prisma et NestJS (404, 400, 409, 500)
 * - Logger chaque action métier
 */

@Injectable()
export class QuizAttemptService {
  private readonly logger = new Logger(QuizAttemptService.name);
  constructor(private prisma: PrismaService) {}

  /**
   * Crée une nouvelle tentative de quiz.
   */
  async create(data: { user_id: number; quiz_id: number }) {
    this.logger.log(
      `Création d'une tentative pour user_id=${data.user_id}, quiz_id=${data.quiz_id}`,
    );
    try {
      return await this.prisma.quizAttempt.create({
        data,
        include: { user: true, quiz: true },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2003':
            throw new NotFoundException(
              "L'utilisateur ou le quiz spécifié n'existe pas",
            );
          case 'P2002':
            throw new ConflictException('Conflit : tentative déjà existante');
          default:
            throw new InternalServerErrorException(
              'Erreur lors de la création de la tentative',
            );
        }
      }
      throw new InternalServerErrorException(
        'Erreur lors de la création de la tentative',
      );
    }
  }

  /**
   * Récupère toutes les tentatives de quiz.
   */
  async findAll() {
    this.logger.log('Récupération de toutes les tentatives de quiz');
    try {
      return await this.prisma.quizAttempt.findMany({
        include: { user: true, quiz: true },
        orderBy: { qa_id: 'desc' },
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'Erreur lors de la récupération des tentatives',
      );
    }
  }

  /**
   * Récupère une tentative de quiz par son ID.
   */
  async findOne(id: number) {
    this.logger.log(`Recherche de la tentative avec l'ID ${id}`);
    if (!id || typeof id !== 'number') {
      throw new BadRequestException('Un ID numérique est requis');
    }
    try {
      const attempt = await this.prisma.quizAttempt.findUnique({
        where: { qa_id: id },
        include: { user: true, quiz: true },
      });
      if (!attempt) {
        throw new NotFoundException('Aucune tentative trouvée avec cet ID');
      }
      return attempt;
    } catch (error) {
      if (
        error instanceof NotFoundException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }
      throw new InternalServerErrorException(
        'Erreur lors de la récupération de la tentative',
      );
    }
  }

  /**
   * Met à jour le score d'une tentative de quiz.
   */
  async update(id: number, data: { score?: number }) {
    this.logger.log(`Mise à jour de la tentative ${id}`);
    if (!id || typeof id !== 'number') {
      throw new BadRequestException('Un ID numérique est requis');
    }
    // Validate score if provided
    if (data.score !== undefined && (data.score < 0 || data.score > 100)) {
      throw new BadRequestException(
        'Le score doit être un nombre entre 0 et 100',
      );
    }
    try {
      const existingAttempt = await this.prisma.quizAttempt.findUnique({
        where: { qa_id: id },
      });
      if (!existingAttempt) {
        throw new NotFoundException('Aucune tentative trouvée avec cet ID');
      }
      return await this.prisma.quizAttempt.update({
        where: { qa_id: id },
        data,
        include: { user: true, quiz: true },
      });
    } catch (error) {
      if (
        error instanceof NotFoundException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }
      if (error instanceof PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2025':
            throw new NotFoundException('Aucune tentative trouvée avec cet ID');
          case 'P2002':
            throw new ConflictException(
              'Conflit lors de la mise à jour de la tentative',
            );
          default:
            throw new InternalServerErrorException(
              'Erreur lors de la mise à jour de la tentative',
            );
        }
      }
      throw new InternalServerErrorException(
        'Erreur lors de la mise à jour de la tentative',
      );
    }
  }

  /**
   * Finalise une tentative de quiz avec score, total de questions et temps passé.
   */
  async completeQuiz(
    id: number,
    data: { score: number; total_questions: number; time_spent: number },
  ) {
    this.logger.log(`Finalisation de la tentative ${id}`);
    if (!id || typeof id !== 'number') {
      throw new BadRequestException('Un ID numérique est requis');
    }
    // Validation des données
    if (data.score < 0 || data.total_questions < 0 || data.time_spent < 0) {
      throw new BadRequestException('Les valeurs doivent être positives');
    }
    if (data.score > data.total_questions) {
      throw new BadRequestException(
        'Le score ne peut pas être supérieur au nombre total de questions',
      );
    }
    try {
      const existingAttempt = await this.prisma.quizAttempt.findUnique({
        where: { qa_id: id },
      });
      if (!existingAttempt) {
        throw new NotFoundException('Aucune tentative trouvée avec cet ID');
      }
      if (existingAttempt.status === 'COMPLETED') {
        throw new ConflictException('Ce quiz a déjà été terminé');
      }
      return await this.prisma.quizAttempt.update({
        where: { qa_id: id },
        data: {
          completed_at: new Date(),
          score: data.score,
          total_questions: data.total_questions,
          time_spent: data.time_spent,
          status: 'COMPLETED',
        },
        include: { user: true, quiz: true },
      });
    } catch (error) {
      if (
        error instanceof NotFoundException ||
        error instanceof BadRequestException ||
        error instanceof ConflictException
      ) {
        throw error;
      }
      if (error instanceof PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2025':
            throw new NotFoundException('Aucune tentative trouvée avec cet ID');
          case 'P2002':
            throw new ConflictException(
              'Conflit lors de la finalisation du quiz',
            );
          default:
            throw new InternalServerErrorException(
              'Erreur lors de la finalisation du quiz',
            );
        }
      }
      throw new InternalServerErrorException(
        'Erreur lors de la finalisation du quiz',
      );
    }
  }

  /**
   * Supprime une tentative de quiz par son ID.
   */
  async delete(id: number) {
    this.logger.log(`Suppression de la tentative ${id}`);
    if (!id || typeof id !== 'number') {
      throw new BadRequestException('Un ID numérique est requis');
    }
    try {
      const existingAttempt = await this.prisma.quizAttempt.findUnique({
        where: { qa_id: id },
      });
      if (!existingAttempt) {
        throw new NotFoundException('Aucune tentative trouvée avec cet ID');
      }
      await this.prisma.quizAttempt.delete({
        where: { qa_id: id },
      });
      return { message: 'Tentative supprimée avec succès' };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      if (error instanceof PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2003':
            throw new ConflictException(
              "Impossible de supprimer cette tentative car elle est liée à d'autres entités",
            );
          case 'P2025':
            throw new NotFoundException('Aucune tentative trouvée avec cet ID');
          default:
            throw new InternalServerErrorException(
              'Erreur lors de la suppression de la tentative',
            );
        }
      }
      throw new InternalServerErrorException(
        'Erreur lors de la suppression de la tentative',
      );
    }
  }
}
