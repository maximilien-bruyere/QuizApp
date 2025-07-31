import {
  Injectable,
  NotFoundException,
  ConflictException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { FlashcardDifficulty } from '@prisma/client';

/**
 * Service Flashcard – Gère la logique métier et l'accès aux données pour les cartes d'apprentissage (flashcards).
 *
 * Ce service permet de :
 * - Créer, récupérer, mettre à jour et supprimer des flashcards
 * - Gérer la difficulté, la catégorie et l'utilisateur associé
 *
 * Il utilise Prisma pour interagir avec la base de données et gère les erreurs courantes (404, 400, 409, 500).
 * Toutes les actions sont loggées pour audit et debug.
 */

@Injectable()
export class FlashcardService {
  constructor(private prisma: PrismaService) {}

  private readonly logger = new Logger(FlashcardService.name);

  async create(data: {
    front: string;
    back: string;
    category_id: number;
    user_id: number;
    difficulty?: FlashcardDifficulty;
  }) {
    this.logger.log(
      `Création d'une flashcard pour la catégorie ${data.category_id} par l'utilisateur ${data.user_id}`,
    );
    try {
      return await this.prisma.flashcard.create({
        data,
        include: {
          category: { include: { subject: true } },
          user: { select: { user_id: true, name: true, email: true } },
        },
      });
    } catch (error) {
      this.logger.error(
        `Erreur lors de la création de la flashcard: ${error.message}`,
      );
      if (error instanceof PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2003':
            throw new NotFoundException(
              "La catégorie ou l'utilisateur spécifié n'existe pas",
            );
          default:
            throw new ConflictException(
              'Erreur lors de la création de la flashcard',
            );
        }
      }
      throw new InternalServerErrorException(
        'Erreur lors de la création de la flashcard',
      );
    }
  }

  async findAll() {
    this.logger.log('Récupération de toutes les flashcards');
    try {
      return await this.prisma.flashcard.findMany({
        include: {
          category: { include: { subject: true } },
          user: { select: { user_id: true, name: true, email: true } },
        },
        orderBy: { created_at: 'desc' },
      });
    } catch (error) {
      this.logger.error(
        `Erreur lors de la récupération des flashcards: ${error.message}`,
      );
      throw new InternalServerErrorException(
        'Erreur lors de la récupération des flashcards',
      );
    }
  }

  async findByCategory(category_id: number) {
    this.logger.log(
      `Récupération des flashcards pour la catégorie ${category_id}`,
    );
    try {
      const category = await this.prisma.category.findUnique({
        where: { category_id },
      });
      if (!category) {
        throw new NotFoundException('Aucune catégorie trouvée avec cet ID');
      }
      return await this.prisma.flashcard.findMany({
        where: { category_id },
        include: {
          category: { include: { subject: true } },
          user: { select: { user_id: true, name: true, email: true } },
        },
        orderBy: { created_at: 'desc' },
      });
    } catch (error) {
      this.logger.error(
        `Erreur lors de la récupération des flashcards par catégorie: ${error.message}`,
      );
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(
        'Erreur lors de la récupération des flashcards',
      );
    }
  }

  async findByUser(user_id: number) {
    this.logger.log(
      `Récupération des flashcards pour l'utilisateur ${user_id}`,
    );
    try {
      const user = await this.prisma.user.findUnique({ where: { user_id } });
      if (!user) {
        throw new NotFoundException('Aucun utilisateur trouvé avec cet ID');
      }
      return await this.prisma.flashcard.findMany({
        where: { user_id },
        include: {
          category: { include: { subject: true } },
          user: { select: { user_id: true, name: true, email: true } },
        },
        orderBy: { created_at: 'desc' },
      });
    } catch (error) {
      this.logger.error(
        `Erreur lors de la récupération des flashcards par utilisateur: ${error.message}`,
      );
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(
        'Erreur lors de la récupération des flashcards',
      );
    }
  }

  async findOne(id: number) {
    this.logger.log(`Recherche de la flashcard avec l'ID ${id}`);
    try {
      const flashcard = await this.prisma.flashcard.findUnique({
        where: { flashcard_id: id },
        include: {
          category: { include: { subject: true } },
          user: { select: { user_id: true, name: true, email: true } },
        },
      });
      if (!flashcard) {
        throw new NotFoundException('Aucune flashcard trouvée avec cet ID');
      }
      return flashcard;
    } catch (error) {
      this.logger.error(
        `Erreur lors de la récupération de la flashcard: ${error.message}`,
      );
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(
        'Erreur lors de la récupération de la flashcard',
      );
    }
  }

  async update(
    id: number,
    data: {
      front?: string;
      back?: string;
      category_id?: number;
      difficulty?: FlashcardDifficulty;
    },
  ) {
    this.logger.log(`Mise à jour de la flashcard ${id}`);
    try {
      const existingFlashcard = await this.prisma.flashcard.findUnique({
        where: { flashcard_id: id },
      });
      if (!existingFlashcard) {
        throw new NotFoundException('Aucune flashcard trouvée avec cet ID');
      }
      return await this.prisma.flashcard.update({
        where: { flashcard_id: id },
        data,
        include: {
          category: { include: { subject: true } },
          user: { select: { user_id: true, name: true, email: true } },
        },
      });
    } catch (error) {
      this.logger.error(
        `Erreur lors de la mise à jour de la flashcard: ${error.message}`,
      );
      if (error instanceof NotFoundException) {
        throw error;
      }
      if (error instanceof PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2003':
            throw new NotFoundException("La catégorie spécifiée n'existe pas");
          case 'P2025':
            throw new NotFoundException('Aucune flashcard trouvée avec cet ID');
          default:
            throw new ConflictException(
              'Erreur lors de la mise à jour de la flashcard',
            );
        }
      }
      throw new InternalServerErrorException(
        'Erreur lors de la mise à jour de la flashcard',
      );
    }
  }

  async updateDifficulty(id: number, difficulty: FlashcardDifficulty) {
    this.logger.log(`Mise à jour de la difficulté de la flashcard ${id}`);
    try {
      const existingFlashcard = await this.prisma.flashcard.findUnique({
        where: { flashcard_id: id },
      });
      if (!existingFlashcard) {
        throw new NotFoundException('Aucune flashcard trouvée avec cet ID');
      }
      return await this.prisma.flashcard.update({
        where: { flashcard_id: id },
        data: { difficulty },
        include: {
          category: { include: { subject: true } },
          user: { select: { user_id: true, name: true, email: true } },
        },
      });
    } catch (error) {
      this.logger.error(
        `Erreur lors de la mise à jour de la difficulté: ${error.message}`,
      );
      if (error instanceof NotFoundException) {
        throw error;
      }
      if (error instanceof PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2025':
            throw new NotFoundException('Aucune flashcard trouvée avec cet ID');
          default:
            throw new ConflictException(
              'Erreur lors de la mise à jour de la difficulté',
            );
        }
      }
      throw new InternalServerErrorException(
        'Erreur lors de la mise à jour de la difficulté',
      );
    }
  }

  async delete(id: number) {
    this.logger.log(`Suppression de la flashcard ${id}`);
    try {
      const existingFlashcard = await this.prisma.flashcard.findUnique({
        where: { flashcard_id: id },
      });
      if (!existingFlashcard) {
        throw new NotFoundException('Aucune flashcard trouvée avec cet ID');
      }
      await this.prisma.flashcard.delete({ where: { flashcard_id: id } });
      return { message: 'Flashcard supprimée avec succès' };
    } catch (error) {
      this.logger.error(
        `Erreur lors de la suppression de la flashcard: ${error.message}`,
      );
      if (error instanceof NotFoundException) {
        throw error;
      }
      if (error instanceof PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2025':
            throw new NotFoundException('Aucune flashcard trouvée avec cet ID');
          default:
            throw new ConflictException(
              'Erreur lors de la suppression de la flashcard',
            );
        }
      }
      throw new InternalServerErrorException(
        'Erreur lors de la suppression de la flashcard',
      );
    }
  }
}
