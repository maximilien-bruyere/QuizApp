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
import { QuizService } from './quiz.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import {
  ApiTags,
  ApiBearerAuth,
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
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';

import { QuizEntity, QuizDeleteResponse } from './entities/quiz.entity';

/**
 * Contrôleur Quiz – Gère les endpoints liés aux quiz dans QuizzApp.
 *
 * Rôle :
 *   - Créer, récupérer, mettre à jour et supprimer des quiz.
 *   - Toutes les routes sont protégées par JwtAuthGuard et RolesGuard (authentification JWT et gestion des rôles).
 *   - Les opérations de création, modification et suppression nécessitent le rôle ADMIN.
 *   - Limite de 10 requêtes par minute par utilisateur (@Throttle).
 *   - Documentation Swagger complète, centralisation des erreurs, suppression des exemples JSON dans les décorateurs Swagger.
 */
@ApiTags('Quiz')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Throttle({ default: { limit: 10, ttl: 60 } })
@Controller('quizzes')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  // Récupérer tous les quiz
  @ApiOperation({ summary: 'Récupérer tous les quiz' })
  @ApiResponse({
    status: 200,
    description: 'Liste des quiz',
    type: [QuizEntity],
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
    return this.quizService.findAll();
  }

  // Récupérer un quiz par son ID avec toutes ses questions
  @ApiOperation({
    summary: 'Récupérer un quiz par son ID avec toutes ses questions',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'ID du quiz',
  })
  @ApiResponse({ status: 200, description: 'Quiz récupéré', type: QuizEntity })
  @ApiResponse({
    status: 400,
    description: 'ID invalide',
    type: BadRequestResponse,
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Quiz non trouvé',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.quizService.findOne(id);
  }

  // Créer un nouveau quiz avec ses questions
  @ApiOperation({ summary: 'Créer un nouveau quiz avec ses questions' })
  @ApiBody({ type: CreateQuizDto })
  @ApiResponse({ status: 201, description: 'Quiz créé', type: QuizEntity })
  @ApiResponse({
    status: 400,
    description: 'Requête invalide',
    type: BadRequestResponse,
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Sujet ou catégorie non trouvé',
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
  create(@Body() body: CreateQuizDto) {
    const mappedData = {
      ...body,
      questions: (body.questions ?? []).map((q) => ({
        ...q,
        options: (q.options ?? []).map((opt) => ({
          ...opt,
          is_correct: opt.is_correct ?? false,
        })),
        pairs: q.pairs ?? [],
      })),
    };
    return this.quizService.create(mappedData);
  }

  // Mettre à jour un quiz et ses questions
  @ApiOperation({ summary: 'Mettre à jour un quiz et ses questions' })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'ID du quiz',
  })
  @ApiBody({ type: UpdateQuizDto })
  @ApiResponse({
    status: 200,
    description: 'Quiz mis à jour',
    type: QuizEntity,
  })
  @ApiResponse({
    status: 400,
    description: 'Requête invalide ou ID invalide',
    type: BadRequestResponse,
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Quiz non trouvé',
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
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateQuizDto) {
    const mappedData = {
      ...body,
      questions: (body.questions ?? []).map((q) => ({
        ...q,
        options: (q.options ?? []).map((opt) => ({
          ...opt,
          is_correct: opt.is_correct ?? false,
        })),
        pairs: q.pairs ?? [],
      })),
    };
    return this.quizService.update(id, mappedData);
  }

  // Supprimer un quiz et toutes ses données associées
  @ApiOperation({
    summary: 'Supprimer un quiz et toutes ses données associées',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'ID du quiz',
  })
  @ApiResponse({
    status: 200,
    description: 'Quiz supprimé',
    type: QuizDeleteResponse,
  })
  @ApiResponse({
    status: 400,
    description: 'ID invalide',
    type: BadRequestResponse,
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Quiz non trouvé',
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
    return this.quizService.delete(id);
  }
}
