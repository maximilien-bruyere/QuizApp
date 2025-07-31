import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
  ConflictException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

/**
 * Service Question – Logique métier pour la gestion des questions dans QuizzApp.
 *
 * Rôle :
 *   - Créer, lister, récupérer, mettre à jour et supprimer des questions.
 *
 * Gestion d’erreurs :
 *   - Toutes les erreurs sont gérées avec les exceptions NestJS appropriées (NotFoundException, BadRequestException, ConflictException, InternalServerErrorException).
 *   - Les erreurs Prisma sont capturées et transformées en exceptions adaptées.
 *   - L’existence des entités est systématiquement vérifiée avant update/delete.
 *
 * Logging :
 *   - Chaque action métier (création, récupération, mise à jour, suppression) est logguée via le logger NestJS.
 */
@Injectable()
export class QuestionService {
  private readonly logger = new Logger(QuestionService.name);

  constructor(private prisma: PrismaService) {}

  async create(data: {
    content: string;
    type: string;
    quiz_id: number;
    image_url?: string;
    explanation?: string;
    options?: { text: string; is_correct: boolean }[];
    pairs?: { left: string; right: string }[];
  }) {
    this.logger.log(`Création d'une question : ${JSON.stringify(data)}`);
    try {
      const result = await this.prisma.question.create({
        data: {
          content: data.content,
          type: data.type,
          quiz: { connect: { quiz_id: data.quiz_id } },
          image_url: data.image_url || null,
          explanation: data.explanation || null,
          options: {
            create: data.options ?? [],
          },
          pairs: {
            create: data.pairs ?? [],
          },
        },
        include: {
          quiz: true,
          options: true,
          pairs: true,
        },
      });
      this.logger.log(`Question créée avec succès (id=${result.question_id})`);
      return result;
    } catch (error) {
      this.logger.error(`Erreur lors de la création de la question : ${error}`);
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2003') {
          throw new NotFoundException('Quiz non trouvé');
        }
        if (error.code === 'P2002') {
          throw new ConflictException('Question déjà existante');
        }
      }
      throw new InternalServerErrorException('Erreur interne du serveur');
    }
  }

  async findAll() {
    this.logger.log('Récupération de toutes les questions');
    try {
      const result = await this.prisma.question.findMany({
        include: {
          quiz: true,
          options: true,
          pairs: true,
        },
        orderBy: {
          question_id: 'desc',
        },
      });
      this.logger.log(`Nombre de questions récupérées : ${result.length}`);
      return result;
    } catch (error) {
      this.logger.error(
        `Erreur lors de la récupération des questions : ${error}`,
      );
      throw new InternalServerErrorException('Erreur interne du serveur');
    }
  }

  async findOne(id: number) {
    this.logger.log(`Récupération de la question id=${id}`);
    try {
      const question = await this.prisma.question.findUnique({
        where: { question_id: id },
        include: {
          quiz: true,
          options: true,
          pairs: true,
        },
      });
      if (!question) {
        this.logger.warn(`Aucune question trouvée avec l'id=${id}`);
        throw new NotFoundException('Question non trouvée');
      }
      this.logger.log(`Question trouvée : id=${id}`);
      return question;
    } catch (error) {
      this.logger.error(
        `Erreur lors de la récupération de la question id=${id} : ${error}`,
      );
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Erreur interne du serveur');
    }
  }

  async update(
    id: number,
    data: {
      content?: string;
      type?: string;
      quiz_id?: number;
      image_url?: string;
      explanation?: string;
    },
  ) {
    this.logger.log(
      `Mise à jour de la question id=${id} avec data=${JSON.stringify(data)}`,
    );
    try {
      // Vérifier que la question existe
      await this.findOne(id);
      const question = await this.prisma.question.update({
        where: { question_id: id },
        data,
        include: {
          quiz: true,
          options: true,
          pairs: true,
        },
      });
      this.logger.log(`Question mise à jour avec succès (id=${id})`);
      return question;
    } catch (error) {
      this.logger.error(
        `Erreur lors de la mise à jour de la question id=${id} : ${error}`,
      );
      if (error instanceof NotFoundException) {
        throw error;
      }
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException('Question non trouvée');
        }
        if (error.code === 'P2003') {
          throw new NotFoundException('Quiz non trouvé');
        }
        if (error.code === 'P2002') {
          throw new ConflictException('Question déjà existante');
        }
      }
      throw new InternalServerErrorException('Erreur interne du serveur');
    }
  }

  async delete(id: number) {
    this.logger.log(`Suppression de la question id=${id}`);
    try {
      // Vérifier que la question existe
      await this.findOne(id);
      // Supprimer les options et pairs associées d'abord
      await this.prisma.option.deleteMany({
        where: { question_id: id },
      });
      await this.prisma.matchingPair.deleteMany({
        where: { question_id: id },
      });
      // Supprimer la question
      await this.prisma.question.delete({
        where: { question_id: id },
      });
      this.logger.log(`Question supprimée avec succès (id=${id})`);
      return {
        message: 'Question supprimée avec succès',
        deletedId: id,
      };
    } catch (error) {
      this.logger.error(
        `Erreur lors de la suppression de la question id=${id} : ${error}`,
      );
      if (error instanceof NotFoundException) {
        throw error;
      }
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException('Question non trouvée');
        }
      }
      throw new InternalServerErrorException('Erreur interne du serveur');
    }
  }
}
