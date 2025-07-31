import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiProperty,
} from '@nestjs/swagger';
import { FlashcardService } from './flashcard.service';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../auth/guards/roles.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { FlashcardDifficulty } from '@prisma/client';

import { FlashcardEntity } from './entities/flashcard.entity';
import {
  BadRequestResponse,
  UnauthorizedResponse,
  NotFoundResponse,
  InternalServerErrorResponse,
  ConflictResponse,
} from '../api-message/entities/error.entity';

import { UpdateFlashcardDto } from './dto/update-flashcard.dto';
import { CreateFlashcardDto } from './dto/create-flashcard.dto';
import { Throttle } from '@nestjs/throttler';
import { FlashcardDeleteResponse } from './entities/flashcard.entity';

/**
 * Contrôleur Flashcard – Gère les endpoints liés aux cartes d'apprentissage (flashcards) dans l'application QuizzApp.
 *
 * Ce contrôleur permet de :
 * - Créer une nouvelle flashcard
 * - Récupérer toutes les flashcards
 * - Récupérer une flashcard par son ID
 * - Récupérer les flashcards par catégorie ou utilisateur
 * - Mettre à jour une flashcard ou sa difficulté
 * - Supprimer une flashcard
 *
 * Chaque route est sécurisée par les guards JwtAuthGuard et RolesGuard.
 * La documentation Swagger est générée automatiquement grâce aux décorateurs.
 * Un rate limiting protège l'ensemble des routes contre les abus.
 */
@ApiTags("Flashcards - Cartes d'apprentissage")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Throttle({ default: { limit: 10, ttl: 60 } })
@Controller('flashcards')
export class FlashcardController {
  constructor(private readonly flashcardService: FlashcardService) {}

  // Récupérer toutes les flashcards avec leurs détails
  @ApiOperation({
    summary: 'Récupérer toutes les flashcards avec leurs détails',
  })
  @ApiResponse({
    status: 200,
    description: 'Liste des flashcards récupérée avec succès',
    type: [FlashcardEntity],
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Get()
  findAll() {
    return this.flashcardService.findAll();
  }

  // Récupérer une flashcard par son ID avec tous ses détails
  @ApiOperation({
    summary: 'Récupérer une flashcard par son ID avec tous ses détails',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'ID de la flashcard',
  })
  @ApiResponse({
    status: 200,
    description: 'Flashcard trouvée avec succès',
    type: FlashcardEntity,
  })
  @ApiResponse({
    status: 400,
    description: 'ID invalide (doit être un nombre)',
    type: BadRequestResponse,
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Flashcard non trouvée',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.flashcardService.findOne(id);
  }

  // Récupérer les flashcards d'une catégorie
  @ApiOperation({ summary: "Récupérer les flashcards d'une catégorie" })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'ID de la catégorie',
  })
  @ApiResponse({
    status: 200,
    description: 'Liste des flashcards de la catégorie récupérée avec succès',
    type: [FlashcardEntity],
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Catégorie non trouvée',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Get('category/:id')
  findByCategory(@Param('id', ParseIntPipe) id: number) {
    return this.flashcardService.findByCategory(id);
  }

  // Récupérer les flashcards d'un utilisateur
  @ApiOperation({ summary: "Récupérer les flashcards d'un utilisateur" })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: "ID de l'utilisateur",
  })
  @ApiResponse({
    status: 200,
    description: "Liste des flashcards de l'utilisateur récupérée avec succès",
    type: [FlashcardEntity],
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Utilisateur non trouvé',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Get('user/:id')
  findByUser(@Param('id', ParseIntPipe) id: number) {
    return this.flashcardService.findByUser(id);
  }

  // Créer une nouvelle flashcard
  @ApiOperation({ summary: 'Créer une nouvelle flashcard' })
  @ApiBody({
    type: CreateFlashcardDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Flashcard créée avec succès',
    type: FlashcardEntity,
  })
  @ApiResponse({
    status: 400,
    description: 'Données invalides',
    type: BadRequestResponse,
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Catégorie ou utilisateur non trouvé',
    type: NotFoundResponse,
  })
  @ApiResponse({ status: 409, description: 'Conflit', type: ConflictResponse })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Post()
  @Roles('ADMIN')
  create(@Body() body: CreateFlashcardDto) {
    return this.flashcardService.create(body);
  }

  // Mettre à jour une flashcard
  @ApiOperation({ summary: 'Mettre à jour une flashcard' })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'ID de la flashcard',
  })
  @ApiBody({
    type: UpdateFlashcardDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Flashcard mise à jour avec succès',
    type: FlashcardEntity,
  })
  @ApiResponse({
    status: 400,
    description: 'Données invalides ou ID invalide',
    type: BadRequestResponse,
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Flashcard non trouvée',
    type: NotFoundResponse,
  })
  @ApiResponse({ status: 409, description: 'Conflit', type: ConflictResponse })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Patch(':id')
  @Roles('ADMIN')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    body: UpdateFlashcardDto,
  ) {
    return this.flashcardService.update(id, body);
  }

  // Mettre à jour la difficulté d'une flashcard
  @ApiOperation({ summary: "Mettre à jour la difficulté d'une flashcard" })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'ID de la flashcard',
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        difficulty: {
          type: 'string',
          enum: ['NOUVEAU', 'DIFFICILE', 'MOYEN', 'FACILE', 'ACQUISE'],
          example: 'MOYEN',
        },
      },
      required: ['difficulty'],
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Difficulté de la flashcard mise à jour avec succès',
    type: FlashcardEntity,
  })
  @ApiResponse({
    status: 400,
    description: 'Données invalides ou ID invalide',
    type: BadRequestResponse,
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Flashcard non trouvée',
    type: NotFoundResponse,
  })
  @ApiResponse({ status: 409, description: 'Conflit', type: ConflictResponse })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Patch(':id/difficulty')
  @Roles('USER', 'ADMIN')
  updateDifficulty(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { difficulty: FlashcardDifficulty },
  ) {
    return this.flashcardService.updateDifficulty(id, body.difficulty);
  }

  // Supprimer une flashcard
  @ApiOperation({ summary: 'Supprimer une flashcard' })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'ID de la flashcard',
  })
  @ApiResponse({
    status: 200,
    description: 'Flashcard supprimée avec succès',
    type: FlashcardDeleteResponse,
  })
  @ApiResponse({
    status: 400,
    description: 'ID invalide (doit être un nombre)',
    type: BadRequestResponse,
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Flashcard non trouvée',
    type: NotFoundResponse,
  })
  @ApiResponse({ status: 409, description: 'Conflit', type: ConflictResponse })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Delete(':id')
  @Roles('ADMIN')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.flashcardService.delete(id);
  }
}
