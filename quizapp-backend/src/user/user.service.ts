/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { User } from '@prisma/client';
import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
  InternalServerErrorException,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

/**
 * Service User – Gère la logique métier et l'accès aux données pour les utilisateurs.
 *
 * Ce service permet de :
 * - Récupérer tous les utilisateurs ou un utilisateur par ID
 * - Créer un nouvel utilisateur
 * - Mettre à jour un utilisateur
 * - Supprimer un utilisateur
 * - Changer le mot de passe d'un utilisateur
 *
 * Il utilise Prisma pour interagir avec la base de données et gère les erreurs courantes (404, 400, 409, 500).
 * Toutes les actions sont logguées pour audit et traçabilité.
 */
@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Omit<User, 'password'>[]> {
    this.logger.log('Récupération de tous les utilisateurs');
    try {
      const users = await this.prisma.user.findMany();
      return users.map(({ password, ...user }) => user);
    } catch (err) {
      this.logger.error('Erreur lors de la récupération des utilisateurs', err);
      throw new InternalServerErrorException(
        'Erreur lors de la récupération des utilisateurs',
      );
    }
  }

  async findOne(id: number): Promise<Omit<User, 'password'>> {
    this.logger.log(`Recherche de l'utilisateur avec l'ID ${id}`);
    if (!id || typeof id !== 'number') {
      throw new BadRequestException('Un ID numérique est requis');
    }
    try {
      const user = await this.prisma.user.findUnique({
        where: { user_id: id },
      });
      if (!user) {
        throw new NotFoundException('Utilisateur introuvable');
      }
      const { password, ...rest } = user;
      return rest;
    } catch (err) {
      if (
        err instanceof NotFoundException ||
        err instanceof BadRequestException
      )
        throw err;
      this.logger.error(
        `Erreur lors de la récupération de l'utilisateur ${id}`,
        err,
      );
      throw new InternalServerErrorException(
        "Erreur lors de la récupération de l'utilisateur",
      );
    }
  }

  async changePassword(
    userId: number,
    oldPassword: string,
    newPassword: string,
  ) {
    this.logger.log(`Changement de mot de passe pour l'utilisateur ${userId}`);
    if (!oldPassword || !newPassword) {
      throw new BadRequestException('Champs requis manquants');
    }
    try {
      const user = await this.prisma.user.findUnique({
        where: { user_id: userId },
      });
      if (!user) {
        throw new NotFoundException('Utilisateur introuvable');
      }
      const passwordMatch = await bcrypt.compare(oldPassword, user.password);
      if (!passwordMatch) {
        throw new UnauthorizedException('Mot de passe actuel incorrect');
      }
      if (oldPassword === newPassword) {
        throw new BadRequestException(
          "Le nouveau mot de passe doit être différent de l'ancien",
        );
      }
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await this.prisma.user.update({
        where: { user_id: userId },
        data: { password: hashedPassword },
      });
      return { message: 'Mot de passe mis à jour avec succès' };
    } catch (err) {
      this.logger.error(
        `Erreur lors du changement de mot de passe pour l'utilisateur ${userId}`,
        err,
      );
      throw new InternalServerErrorException(
        'Erreur lors du changement de mot de passe',
      );
    }
  }

  async create(data: {
    email: string;
    password: string;
    name: string;
    role?: 'USER' | 'ADMIN';
  }) {
    this.logger.log(`Création d'un utilisateur avec l'email ${data.email}`);
    try {
      // Vérifie si l'email existe déjà
      const existing = await this.prisma.user.findUnique({
        where: { email: data.email },
      });
      if (existing) {
        throw new ConflictException('Adresse email déjà utilisée');
      }
      const hashedPassword = await bcrypt.hash(data.password, 10);
      const user = await this.prisma.user.create({
        data: {
          email: data.email,
          password: hashedPassword,
          name: data.name,
          role: data.role || 'USER',
        },
      });
      const { password, ...rest } = user;
      return rest;
    } catch (err) {
      this.logger.error("Erreur lors de la création de l'utilisateur", err);
      if (
        err instanceof PrismaClientKnownRequestError &&
        err.code === 'P2002'
      ) {
        throw new ConflictException('Adresse email déjà utilisée');
      }
      throw new InternalServerErrorException(
        "Erreur lors de la création de l'utilisateur",
      );
    }
  }

  async update(
    id: number,
    data: Partial<{
      email: string;
      password: string;
      name: string;
      role: 'USER' | 'ADMIN';
    }>,
  ): Promise<Omit<User, 'password'>> {
    this.logger.log(`Mise à jour de l'utilisateur ${id}`);
    if (!id || typeof id !== 'number') {
      throw new BadRequestException('Un ID numérique est requis');
    }
    try {
      // Hash password if provided
      if (data.password) {
        data.password = await bcrypt.hash(data.password, 10);
      }
      const user = await this.prisma.user.update({
        where: { user_id: id },
        data,
      });
      const { password, ...rest } = user;
      return rest;
    } catch (err) {
      if (
        err instanceof PrismaClientKnownRequestError &&
        err.code === 'P2025'
      ) {
        throw new NotFoundException('Utilisateur introuvable');
      }
      this.logger.error(
        `Erreur lors de la mise à jour de l'utilisateur ${id}`,
        err,
      );
      throw new InternalServerErrorException(
        "Erreur lors de la mise à jour de l'utilisateur",
      );
    }
  }

  async delete(id: number): Promise<{ message: string }> {
    this.logger.log(`Suppression de l'utilisateur ${id}`);
    if (!id || typeof id !== 'number') {
      throw new BadRequestException('Un ID numérique est requis');
    }
    try {
      await this.prisma.user.delete({ where: { user_id: id } });
      return { message: 'Utilisateur supprimé avec succès' };
    } catch (err) {
      if (
        err instanceof PrismaClientKnownRequestError &&
        err.code === 'P2025'
      ) {
        throw new NotFoundException('Utilisateur introuvable');
      }
      this.logger.error(
        `Erreur lors de la suppression de l'utilisateur ${id}`,
        err,
      );
      throw new InternalServerErrorException(
        "Erreur lors de la suppression de l'utilisateur",
      );
    }
  }
}
