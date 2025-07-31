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
import { QuizAttemptService } from './quiz-attempt.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
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
  QuizAttemptEntity,
  QuizAttemptDeleteResponse,
} from './entities/quiz-attempt.entity';
import { CreateQuizAttemptDto } from './dto/create-quiz-attempt.dto';
import { UpdateQuizAttemptDto } from './dto/update-quiz-attempt.dto';
import { CompleteQuizAttemptDto } from './dto/complete-quiz-attempt.dto';
import {
  BadRequestResponse,
  UnauthorizedResponse,
  NotFoundResponse,
  ConflictResponse,
  InternalServerErrorResponse,
} from '../api-message/entities/error.entity';

/**
 * Contrôleur QuizAttempt – Gère les endpoints liés aux tentatives de quiz dans QuizzApp.
 *
 * Rôle :
 *   - Créer, récupérer, mettre à jour, finaliser et supprimer des tentatives de quiz.
 *
 * Sécurité :
 *   - Toutes les routes sont protégées par JwtAuthGuard et RolesGuard (authentification JWT et gestion des rôles).
 *   - Les opérations de création, modification et suppression nécessitent le rôle USER ou ADMIN selon la politique métier.
 *
 * Rate limiting :
 *   - Limite de 10 requêtes par minute par utilisateur (@Throttle).
 *
 * Documentation :
 *   - Toutes les routes sont documentées avec Swagger (@ApiOperation, @ApiResponse, @ApiParam, @ApiBody).
 *   - Les réponses d’erreur utilisent les entités centralisées de error.entity.ts.
 */
@ApiTags('Tentatives de quiz')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Throttle({ default: { limit: 10, ttl: 60 } })
@Controller('quiz-attempt')
export class QuizAttemptController {
  constructor(private readonly quizAttemptService: QuizAttemptService) {}

  // Récupérer toutes les tentatives de quiz avec détails
  @ApiOperation({
    summary: 'Récupérer toutes les tentatives de quiz avec détails',
  })
  @ApiResponse({
    status: 200,
    description: 'Liste des tentatives récupérée avec succès',
    type: [QuizAttemptEntity],
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
    return this.quizAttemptService.findAll();
  }

  // Récupérer une tentative de quiz par son ID avec tous les détails
  @ApiOperation({
    summary: 'Récupérer une tentative de quiz par son ID avec tous les détails',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'ID de la tentative',
  })
  @ApiResponse({
    status: 200,
    description: 'Tentative trouvée avec succès',
    type: QuizAttemptEntity,
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Tentative non trouvée',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.quizAttemptService.findOne(id);
  }

  // Créer une nouvelle tentative de quiz
  @ApiOperation({ summary: 'Créer une nouvelle tentative de quiz' })
  @ApiBody({ type: CreateQuizAttemptDto })
  @ApiResponse({
    status: 201,
    description: 'Tentative créée avec succès',
    type: QuizAttemptEntity,
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
    description: 'Utilisateur ou quiz non trouvé',
    type: NotFoundResponse,
  })
  @ApiResponse({ status: 409, description: 'Conflit', type: ConflictResponse })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Post()
  create(@Body() data: CreateQuizAttemptDto) {
    return this.quizAttemptService.create(data);
  }

  // Mettre à jour le score d'une tentative de quiz
  @ApiOperation({ summary: "Mettre à jour le score d'une tentative de quiz" })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'ID de la tentative',
  })
  @ApiBody({ type: UpdateQuizAttemptDto })
  @ApiResponse({
    status: 200,
    description: 'Tentative mise à jour avec succès',
    type: QuizAttemptEntity,
  })
  @ApiResponse({
    status: 400,
    description: 'Score invalide',
    type: BadRequestResponse,
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Tentative non trouvée',
    type: NotFoundResponse,
  })
  @ApiResponse({ status: 409, description: 'Conflit', type: ConflictResponse })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateQuizAttemptDto,
  ) {
    return this.quizAttemptService.update(id, body);
  }

  // Finaliser un quiz avec le score final et les statistiques
  @ApiOperation({
    summary: 'Finaliser un quiz avec le score final et les statistiques',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'ID de la tentative de quiz',
  })
  @ApiBody({ type: CompleteQuizAttemptDto })
  @ApiResponse({
    status: 200,
    description: 'Quiz finalisé avec succès',
    type: QuizAttemptEntity,
  })
  @ApiResponse({
    status: 400,
    description: 'Données invalides ou quiz déjà terminé',
    type: BadRequestResponse,
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Tentative non trouvée',
    type: NotFoundResponse,
  })
  @ApiResponse({ status: 409, description: 'Conflit', type: ConflictResponse })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Patch(':id/complete')
  completeQuiz(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CompleteQuizAttemptDto,
  ) {
    return this.quizAttemptService.completeQuiz(id, body);
  }

  // Supprimer une tentative de quiz
  @ApiOperation({ summary: 'Supprimer une tentative de quiz' })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'ID de la tentative',
  })
  @ApiResponse({
    status: 200,
    description: 'Tentative supprimée avec succès',
    type: QuizAttemptDeleteResponse,
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Tentative non trouvée',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 409,
    description: "Conflit - Tentative liée à d'autres entités",
    type: ConflictResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.quizAttemptService.delete(id);
  }
}
