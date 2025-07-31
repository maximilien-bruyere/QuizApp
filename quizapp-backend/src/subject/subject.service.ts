import {
  Injectable,
  NotFoundException,
  ConflictException,
  InternalServerErrorException,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

/**
 * Service Subject – Gère la logique métier et l'accès aux données pour les matières (subjects).
 *
 * Ce service permet de :
 * - Créer, récupérer, mettre à jour et supprimer des matières
 * - Logger chaque action métier
 * - Gérer les erreurs Prisma et NestJS (404, 400, 409, 500)
 */
@Injectable()
export class SubjectService {
  private readonly logger = new Logger(SubjectService.name);
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Crée une nouvelle matière (subject).
   */
  async create(data: { name: string }) {
    this.logger.log(`Création d'un sujet : ${data.name}`);
    if (!data.name || typeof data.name !== 'string') {
      throw new BadRequestException('Le nom du sujet est requis');
    }
    try {
      return await this.prisma.subject.create({
        data,
        include: {
          categories: {},
        },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Un sujet avec ce nom existe déjà');
      }
      throw new InternalServerErrorException('Erreur interne du serveur');
    }
  }

  /**
   * Récupère toutes les matières (subjects).
   */
  async findAll() {
    this.logger.log('Récupération de tous les sujets');
    try {
      const result = await this.prisma.subject.findMany({
        orderBy: {
          name: 'asc',
        },
      });
      this.logger.log(
        'Résultat brut retourné par Prisma:',
        JSON.stringify(result, null, 2),
      );
      return result;
    } catch (error) {
      this.logger.error('Erreur lors de la récupération des sujets:', error);
      throw new InternalServerErrorException('Erreur interne du serveur');
    }
  }

  /**
   * Récupère une matière (subject) par son ID.
   */
  async findOne(id: number) {
    this.logger.log(`Recherche du sujet avec l'ID ${id}`);
    if (!id || typeof id !== 'number') {
      throw new BadRequestException('Un ID numérique est requis');
    }
    try {
      const subject = await this.prisma.subject.findUnique({
        where: { subject_id: id },
        include: {
          categories: {
            orderBy: {
              name: 'asc',
            },
          },
        },
      });
      if (!subject) {
        throw new NotFoundException('Sujet non trouvé');
      }
      return subject;
    } catch (error) {
      if (
        error instanceof NotFoundException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }
      throw new InternalServerErrorException('Erreur interne du serveur');
    }
  }

  /**
   * Met à jour une matière (subject) par son ID.
   */
  async update(id: number, data: { name?: string }) {
    this.logger.log(`Mise à jour du sujet ${id}`);
    if (!id || typeof id !== 'number') {
      throw new BadRequestException('Un ID numérique est requis');
    }
    try {
      const subject = await this.prisma.subject.update({
        where: { subject_id: id },
        data,
        include: {
          categories: {},
        },
      });
      return subject;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Sujet non trouvé');
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Un sujet avec ce nom existe déjà');
      }
      throw new InternalServerErrorException('Erreur interne du serveur');
    }
  }

  /**
   * Supprime une matière (subject) par son ID.
   */
  async delete(id: number) {
    this.logger.log(`Suppression du sujet ${id}`);
    if (!id || typeof id !== 'number') {
      throw new BadRequestException('Un ID numérique est requis');
    }
    try {
      await this.prisma.subject.delete({
        where: { subject_id: id },
      });
      return {
        message: 'Sujet supprimé avec succès',
        deletedId: id,
      };
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Sujet non trouvé');
      }
      if (error.code === 'P2003') {
        throw new ConflictException(
          'Impossible de supprimer ce sujet car il contient des données associées',
        );
      }
      throw new InternalServerErrorException('Erreur interne du serveur');
    }
  }
}
