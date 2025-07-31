import {
  Injectable,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
  ConflictException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

/**
 * Service Answer – Gère la logique métier et l'accès aux données pour les réponses utilisateur.
 *
 * Ce service permet de :
 * - Récupérer toutes les réponses ou une réponse par ID
 * - Créer une nouvelle réponse
 * - Mettre à jour une réponse existante
 * - Supprimer une réponse
 *
 * Il utilise Prisma pour interagir avec la base de données et gère les erreurs courantes (404, 400, 409, 500).
 */
@Injectable()
export class AnswerService {
  constructor(private prisma: PrismaService) {}

  private readonly logger = new Logger(AnswerService.name);

  async findAll() {
    try {
      this.logger.log('Récupération de toutes les réponses');
      return await this.prisma.answer.findMany({
        include: { question: true, option: true, quizAttempt: true },
      });
    } catch (err) {
      throw new InternalServerErrorException(
        'Erreur lors de la récupération des réponses',
      );
    }
  }

  async findOne(id: number) {
    this.logger.log(`Recherche de la réponse avec l'ID ${id}`);
    if (!id || typeof id !== 'number') {
      throw new BadRequestException('Un ID numérique est requis');
    }
    try {
      const answer = await this.prisma.answer.findUnique({
        where: { answer_id: id },
        include: { question: true, option: true, quizAttempt: true },
      });
      if (!answer) {
        throw new NotFoundException(`Réponse avec l'ID ${id} introuvable`);
      }
      return answer;
    } catch (err) {
      if (
        err instanceof NotFoundException ||
        err instanceof BadRequestException
      )
        throw err;
      throw new InternalServerErrorException(
        'Erreur lors de la récupération de la réponse',
      );
    }
  }

  async create(data: {
    response_text?: string;
    option_id?: number;
    question_id: number;
    qa_id: number;
  }) {
    this.logger.log(
      `Création d'une réponse pour la question ${data.question_id}`,
    );
    if (!data.question_id || !data.qa_id) {
      throw new BadRequestException('question_id et qa_id sont requis');
    }
    try {
      return await this.prisma.answer.create({ data });
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
          throw new ConflictException(
            'Conflit : une réponse similaire existe déjà',
          );
        }
        if (err.code === 'P2003') {
          throw new NotFoundException(
            'Clé étrangère invalide (question, option ou quizAttempt)',
          );
        }
      }
      throw new InternalServerErrorException(
        'Erreur lors de la création de la réponse',
      );
    }
  }

  async update(
    id: number,
    data: { response_text?: string; option_id?: number },
  ) {
    this.logger.log(`Mise à jour de la réponse ${id}`);
    if (!id || typeof id !== 'number') {
      throw new BadRequestException('Un ID numérique est requis');
    }
    try {
      return await this.prisma.answer.update({
        where: { answer_id: id },
        data,
      });
    } catch (err) {
      if (
        err instanceof PrismaClientKnownRequestError &&
        err.code === 'P2025'
      ) {
        throw new NotFoundException(`Réponse avec l'ID ${id} introuvable`);
      }
      throw new InternalServerErrorException(
        'Erreur lors de la mise à jour de la réponse',
      );
    }
  }

  async delete(id: number) {
    this.logger.log(`Suppression de la réponse ${id}`);
    if (!id || typeof id !== 'number') {
      throw new BadRequestException('Un ID numérique est requis');
    }
    try {
      await this.prisma.answer.delete({
        where: { answer_id: id },
      });
      return { message: 'Réponse supprimée avec succès' };
    } catch (err) {
      this.logger.error(
        `Erreur lors de la suppression de la réponse ${id}: ${err.message}`,
      );
      if (
        err instanceof PrismaClientKnownRequestError &&
        err.code === 'P2025'
      ) {
        throw new NotFoundException(`Réponse avec l'ID ${id} introuvable`);
      }
      throw new InternalServerErrorException(
        'Erreur lors de la suppression de la réponse',
      );
    }
  }
}
