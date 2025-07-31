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
 * Service Option – Logique métier pour la gestion des options de réponse dans QuizzApp.
 *
 * Rôle :
 *   - Créer, lister, récupérer, mettre à jour et supprimer des options de réponse.
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
export class OptionService {
  private readonly logger = new Logger(OptionService.name);

  constructor(private prisma: PrismaService) {}

  async create(data: {
    text: string;
    is_correct: boolean;
    question_id: number;
  }) {
    this.logger.log(`Création d'une option : ${JSON.stringify(data)}`);
    try {
      const result = await this.prisma.option.create({
        data,
        include: { question: true },
      });
      this.logger.log(`Option créée avec succès (id=${result.option_id})`);
      return result;
    } catch (error) {
      this.logger.error(`Erreur lors de la création de l'option : ${error}`);
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2003') {
          throw new NotFoundException('Question non trouvée');
        }
        if (error.code === 'P2002') {
          throw new ConflictException('Option déjà existante');
        }
      }
      throw new InternalServerErrorException('Erreur interne du serveur');
    }
  }

  async findAll() {
    this.logger.log('Récupération de toutes les options');
    try {
      const result = await this.prisma.option.findMany({
        include: { question: true },
        orderBy: { option_id: 'desc' },
      });
      this.logger.log(`Nombre d'options récupérées : ${result.length}`);
      return result;
    } catch (error) {
      this.logger.error(
        `Erreur lors de la récupération des options : ${error}`,
      );
      throw new InternalServerErrorException('Erreur interne du serveur');
    }
  }

  async findOne(id: number) {
    this.logger.log(`Récupération de l'option id=${id}`);
    try {
      const option = await this.prisma.option.findUnique({
        where: { option_id: id },
        include: { question: true },
      });
      if (!option) {
        this.logger.warn(`Aucune option trouvée avec l'id=${id}`);
        throw new NotFoundException('Option non trouvée');
      }
      this.logger.log(`Option trouvée : id=${id}`);
      return option;
    } catch (error) {
      this.logger.error(
        `Erreur lors de la récupération de l'option id=${id} : ${error}`,
      );
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Erreur interne du serveur');
    }
  }

  async update(
    id: number,
    data: { text?: string; is_correct?: boolean; question_id?: number },
  ) {
    this.logger.log(
      `Mise à jour de l'option id=${id} avec data=${JSON.stringify(data)}`,
    );
    try {
      // Vérifier que l'option existe
      await this.findOne(id);
      const option = await this.prisma.option.update({
        where: { option_id: id },
        data,
        include: { question: true },
      });
      this.logger.log(`Option mise à jour avec succès (id=${id})`);
      return option;
    } catch (error) {
      this.logger.error(
        `Erreur lors de la mise à jour de l'option id=${id} : ${error}`,
      );
      if (error instanceof NotFoundException) {
        throw error;
      }
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException('Option non trouvée');
        }
        if (error.code === 'P2003') {
          throw new NotFoundException('Question non trouvée');
        }
        if (error.code === 'P2002') {
          throw new ConflictException('Option déjà existante');
        }
      }
      throw new InternalServerErrorException('Erreur interne du serveur');
    }
  }

  async delete(id: number) {
    this.logger.log(`Suppression de l'option id=${id}`);
    try {
      // Vérifier que l'option existe
      await this.findOne(id);
      await this.prisma.option.delete({
        where: { option_id: id },
      });
      this.logger.log(`Option supprimée avec succès (id=${id})`);
      return {
        message: 'Option supprimée avec succès',
        deletedId: id,
      };
    } catch (error) {
      this.logger.error(
        `Erreur lors de la suppression de l'option id=${id} : ${error}`,
      );
      if (error instanceof NotFoundException) {
        throw error;
      }
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException('Option non trouvée');
        }
      }
      throw new InternalServerErrorException('Erreur interne du serveur');
    }
  }
}
