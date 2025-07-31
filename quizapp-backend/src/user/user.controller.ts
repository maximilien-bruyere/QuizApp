import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Patch,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Roles } from '../auth/decorators/roles.decorator';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';
import {
  BadRequestResponse,
  UnauthorizedResponse,
  NotFoundResponse,
  ConflictResponse,
  InternalServerErrorResponse,
} from '../api-message/entities/error.entity';
import { UserEntity, UserDeleteResponse } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ChangePasswordDto } from './dto/change-password.dto';

/**
 * Contrôleur User – Gère les endpoints liés aux utilisateurs dans l'application QuizzApp.
 *
 * Ce contrôleur permet de :
 * - Récupérer tous les utilisateurs
 * - Récupérer un utilisateur par son ID
 * - Créer un nouvel utilisateur
 * - Mettre à jour un utilisateur
 * - Supprimer un utilisateur
 * - Changer le mot de passe d'un utilisateur
 *
 * Chaque route est sécurisée par les guards JwtAuthGuard et RolesGuard, et le throttling limite les requêtes.
 * La documentation Swagger est générée automatiquement grâce aux décorateurs.
 */
@ApiTags('Utilisateurs - accès exclusif pour les administrateurs')
@Throttle({ default: { limit: 10, ttl: 60 } })
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Récupérer tous les utilisateurs
  @ApiOperation({ summary: 'Récupérer tous les utilisateurs' })
  @ApiResponse({
    status: 200,
    description: 'La liste des utilisateurs a été affichée avec succès',
    type: [UserEntity],
  })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Get()
  @Roles('ADMIN')
  findAll() {
    return this.userService.findAll();
  }

  // Récupérer un utilisateur par son ID
  @ApiOperation({ summary: 'Récupérer un utilisateur par son ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: "ID de l'utilisateur",
  })
  @ApiResponse({
    status: 200,
    description: "L'utilisateur a été affiché avec succès",
    type: UserEntity,
  })
  @ApiResponse({
    status: 404,
    description: 'Utilisateur introuvable',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Get(':id')
  @Roles('ADMIN')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  // Vérifier le rôle admin
  @ApiOperation({ summary: 'Vérifier le rôle admin' })
  @ApiResponse({
    status: 200,
    description: "Affichage d'un message de bienvenue",
    schema: { example: { message: '[ADMIN] Bienvenue sur QuizzApp ! 👑' } },
  })
  @Get('admin-only')
  @Roles('ADMIN')
  adminOnlyRoute() {
    return { message: '[ADMIN] Bienvenue sur QuizzApp ! 👑' };
  }

  // Créer un nouvel utilisateur
  @ApiOperation({ summary: 'Créer un nouvel utilisateur' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({
    status: 201,
    description: "L'utilisateur a été créé avec succès.",
    type: UserEntity,
  })
  @ApiResponse({
    status: 400,
    description: 'Requête invalide (champs manquants ou mauvais format)',
    type: BadRequestResponse,
  })
  @ApiResponse({
    status: 409,
    description: 'Adresse email déjà utilisée',
    type: ConflictResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Post()
  create(@Body() body: CreateUserDto) {
    return this.userService.create(body);
  }

  // Mettre à jour un utilisateur
  @ApiOperation({ summary: 'Mettre à jour un utilisateur' })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: "ID de l'utilisateur",
  })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({
    status: 200,
    description: "L'utilisateur a été mis à jour avec succès",
    type: UserEntity,
  })
  @ApiResponse({
    status: 404,
    description: 'Utilisateur introuvable',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Patch(':id')
  @Roles('ADMIN')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateUserDto) {
    return this.userService.update(id, body);
  }

  // Changer le mot de passe d'un utilisateur
  @ApiOperation({ summary: "Changer le mot de passe d'un utilisateur" })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: "ID de l'utilisateur",
  })
  @ApiBody({ type: ChangePasswordDto })
  @ApiResponse({
    status: 200,
    description: 'Le mot de passe a été modifié avec succès',
    schema: { example: { message: 'Mot de passe mis à jour avec succès' } },
  })
  @ApiResponse({
    status: 400,
    description:
      "Champs requis manquants ou nouveau mot de passe identique à l'ancien",
    type: BadRequestResponse,
  })
  @ApiResponse({
    status: 401,
    description: 'Mot de passe actuel incorrect',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Utilisateur introuvable',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Post(':id/change-password')
  @Roles('ADMIN')
  async changePassword(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: ChangePasswordDto,
  ) {
    return this.userService.changePassword(
      id,
      body.oldPassword,
      body.newPassword,
    );
  }

  // Supprimer un utilisateur
  @ApiOperation({ summary: 'Supprimer un utilisateur' })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: "ID de l'utilisateur",
  })
  @ApiResponse({
    status: 200,
    description: "L'utilisateur a été supprimé avec succès",
    type: UserDeleteResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Utilisateur introuvable',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Delete(':id')
  @Roles('ADMIN')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
