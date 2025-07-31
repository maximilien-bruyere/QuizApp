import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
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
} from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { AnswerDeleteResponse, AnswerEntity } from './entities/answer.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import {
  BadRequestResponse,
  InternalServerErrorResponse,
  NotFoundResponse,
  UnauthorizedResponse,
} from 'src/api-message/entities/error.entity';

/**
 * Contrôleur Answer – Gère les endpoints liés aux réponses utilisateur dans l'application QuizzApp.
 *
 * Ce contrôleur permet de :
 * - Récupérer toutes les réponses
 * - Récupérer une réponse par son ID
 * - Créer une nouvelle réponse
 * - Mettre à jour une réponse existante
 * - Supprimer une réponse
 *
 * Chaque route est sécurisée par les guards JwtAuthGuard et RolesGuard.
 * La documentation Swagger est générée automatiquement grâce aux décorateurs.
 */
@ApiTags('Réponses')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Throttle({ default: { limit: 10, ttl: 60 } })
@Controller('answers')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  // Récupérer toutes les réponses
  @ApiOperation({ summary: 'Récupérer toutes les réponses' })
  @ApiResponse({
    status: 200,
    description: 'Liste des réponses',
    type: [AnswerEntity],
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
    return this.answerService.findAll();
  }

  // Récupérer une réponse par son ID
  @ApiOperation({ summary: 'Récupérer une réponse par son ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'ID de la réponse',
  })
  @ApiResponse({
    status: 200,
    description: 'Réponse trouvée',
    type: AnswerEntity,
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Réponse non trouvée',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.answerService.findOne(id);
  }

  // Créer une nouvelle réponse
  @ApiOperation({ summary: 'Créer une nouvelle réponse' })
  @ApiBody({ type: CreateAnswerDto })
  @ApiResponse({
    status: 201,
    description: 'Réponse créée',
    type: AnswerEntity,
  })
  @ApiResponse({
    status: 400,
    description: 'Champs requis manquants',
    type: BadRequestResponse,
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
  @Post()
  create(@Body() body: CreateAnswerDto) {
    return this.answerService.create(body);
  }

  // Mettre à jour une réponse existante
  @ApiOperation({ summary: 'Mettre à jour une réponse' })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'ID de la réponse',
  })
  @ApiBody({ type: UpdateAnswerDto })
  @ApiResponse({
    status: 200,
    description: 'Réponse mise à jour',
    type: AnswerEntity,
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Réponse non trouvée',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateAnswerDto) {
    return this.answerService.update(id, body);
  }

  // Supprimer une réponse
  @ApiOperation({ summary: 'Supprimer une réponse' })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'ID de la réponse',
  })
  @ApiResponse({
    status: 200,
    description: 'Suppression de la réponse réussie',
    type: AnswerDeleteResponse,
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Réponse non trouvée',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.answerService.delete(id);
  }
}
