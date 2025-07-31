import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

/**
 * Service Category – Logique métier pour la gestion des catégories dans QuizzApp.
 *
 * Rôle :
 *   - Créer, lister, récupérer, mettre à jour et supprimer des catégories.
 *   - Inclut la gestion des entités liées (matière).
 *
 * Gestion d’erreurs :
 *   - Toutes les erreurs sont gérées avec les exceptions NestJS appropriées (NotFoundException, BadRequestException, ConflictException).
 *   - Les erreurs Prisma sont capturées et transformées en exceptions adaptées.
 *   - L’existence des entités est systématiquement vérifiée avant update/delete.
 *
 * Logging :
 *   - Chaque action métier (création, récupération, mise à jour, suppression) est logguée via le logger NestJS.
 */
@Injectable()
export class CategoryService {
  private readonly logger = new Logger(CategoryService.name);

  constructor(private prisma: PrismaService) {}

  async create(data: { name: string; subject_id: number }) {
    this.logger.log(`Création d'une catégorie : ${JSON.stringify(data)}`);
    try {
      const result = await this.prisma.category.create({
        data,
        include: { subject: true },
      });
      this.logger.log(`Catégorie créée avec succès (id=${result.category_id})`);
      return result;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2002':
            throw new ConflictException(
              'Une catégorie avec ce nom existe déjà pour cette matière',
            );
          case 'P2003':
            throw new NotFoundException("La matière spécifiée n'existe pas");
          default:
            throw new BadRequestException(
              'Erreur lors de la création de la catégorie',
            );
        }
      }
      this.logger.error(
        `Erreur lors de la création de la catégorie : ${error}`,
      );
      throw new BadRequestException(
        'Erreur lors de la création de la catégorie',
      );
    }
  }

  async findAll() {
    this.logger.log('Récupération de toutes les catégories');
    try {
      const result = await this.prisma.category.findMany({
        include: { subject: true },
        orderBy: { name: 'asc' },
      });
      this.logger.log(`Nombre de catégories récupérées : ${result.length}`);
      return result;
    } catch (error) {
      this.logger.error(
        `Erreur lors de la récupération des catégories : ${error}`,
      );
      throw new BadRequestException(
        'Erreur lors de la récupération des catégories',
      );
    }
  }

  async findBySubject(subject_id: number) {
    this.logger.log(
      `Récupération des catégories pour la matière id=${subject_id}`,
    );
    try {
      // First check if subject exists
      const subject = await this.prisma.subject.findUnique({
        where: { subject_id },
      });
      if (!subject) {
        this.logger.warn(`Aucune matière trouvée avec l'id=${subject_id}`);
        throw new NotFoundException('Aucune matière trouvée avec cet ID');
      }
      const result = await this.prisma.category.findMany({
        where: { subject_id },
        orderBy: { name: 'asc' },
      });
      this.logger.log(
        `Nombre de catégories récupérées pour la matière id=${subject_id} : ${result.length}`,
      );
      return result;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      this.logger.error(
        `Erreur lors de la récupération des catégories pour la matière id=${subject_id} : ${error}`,
      );
      throw new BadRequestException(
        'Erreur lors de la récupération des catégories',
      );
    }
  }

  async findOne(id: number) {
    this.logger.log(`Récupération de la catégorie id=${id}`);
    try {
      const category = await this.prisma.category.findUnique({
        where: { category_id: id },
        include: { subject: true },
      });
      if (!category) {
        this.logger.warn(`Aucune catégorie trouvée avec l'id=${id}`);
        throw new NotFoundException('Aucune catégorie trouvée avec cet ID');
      }
      this.logger.log(`Catégorie trouvée : id=${id}`);
      return category;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      this.logger.error(
        `Erreur lors de la récupération de la catégorie id=${id} : ${error}`,
      );
      throw new BadRequestException(
        'Erreur lors de la récupération de la catégorie',
      );
    }
  }

  async update(id: number, data: { name?: string; subject_id?: number }) {
    this.logger.log(
      `Mise à jour de la catégorie id=${id} avec data=${JSON.stringify(data)}`,
    );
    try {
      const existingCategory = await this.prisma.category.findUnique({
        where: { category_id: id },
      });
      if (!existingCategory) {
        this.logger.warn(`Aucune catégorie trouvée avec l'id=${id}`);
        throw new NotFoundException('Aucune catégorie trouvée avec cet ID');
      }
      const result = await this.prisma.category.update({
        where: { category_id: id },
        data,
        include: { subject: true },
      });
      this.logger.log(`Catégorie mise à jour avec succès (id=${id})`);
      return result;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      if (error instanceof PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2002':
            throw new ConflictException(
              'Une catégorie avec ce nom existe déjà pour cette matière',
            );
          case 'P2003':
            throw new NotFoundException("La matière spécifiée n'existe pas");
          case 'P2025':
            throw new NotFoundException('Aucune catégorie trouvée avec cet ID');
          default:
            throw new BadRequestException(
              'Erreur lors de la mise à jour de la catégorie',
            );
        }
      }
      this.logger.error(
        `Erreur lors de la mise à jour de la catégorie id=${id} : ${error}`,
      );
      throw new BadRequestException(
        'Erreur lors de la mise à jour de la catégorie',
      );
    }
  }

  async delete(id: number) {
    this.logger.log(`Suppression de la catégorie id=${id}`);
    try {
      const existingCategory = await this.prisma.category.findUnique({
        where: { category_id: id },
      });
      if (!existingCategory) {
        this.logger.warn(`Aucune catégorie trouvée avec l'id=${id}`);
        throw new NotFoundException('Aucune catégorie trouvée avec cet ID');
      }
      await this.prisma.category.delete({
        where: { category_id: id },
      });
      this.logger.log(`Catégorie supprimée avec succès (id=${id})`);
      return { message: 'Catégorie supprimée avec succès' };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      if (error instanceof PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2003':
            throw new ConflictException(
              "Impossible de supprimer cette catégorie car elle est liée à d'autres entités",
            );
          case 'P2025':
            throw new NotFoundException('Aucune catégorie trouvée avec cet ID');
          default:
            throw new BadRequestException(
              'Erreur lors de la suppression de la catégorie',
            );
        }
      }
      this.logger.error(
        `Erreur lors de la suppression de la catégorie id=${id} : ${error}`,
      );
      throw new BadRequestException(
        'Erreur lors de la suppression de la catégorie',
      );
    }
  }
}
