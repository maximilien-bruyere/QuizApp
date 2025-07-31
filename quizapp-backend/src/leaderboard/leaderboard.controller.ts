import {
  Controller,
  Get,
  Param,
  Query,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { LeaderboardService } from './leaderboard.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Throttle } from '@nestjs/throttler';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiProperty,
} from '@nestjs/swagger';
import {
  BadRequestResponse,
  UnauthorizedResponse,
  NotFoundResponse,
  InternalServerErrorResponse,
} from '../api-message/entities/error.entity';

class UserStatsResponse {
  @ApiProperty({ example: 1 })
  user_id: number;

  @ApiProperty({ example: 'Jean Dupont' })
  name: string;

  @ApiProperty({ example: 'jean@email.com' })
  email: string;

  @ApiProperty({ example: 15 })
  totalAttempts: number;

  @ApiProperty({ example: 85.5 })
  averageScore: number;

  @ApiProperty({ example: 1283 })
  totalPoints: number;

  @ApiProperty({ example: 95.0 })
  bestScore: number;

  @ApiProperty({ example: '2025-07-03T21:50:39.371Z' })
  lastAttempt: string;
}

class RecentScoreResponse {
  @ApiProperty({ example: 1 })
  qa_id: number;

  @ApiProperty({ example: 8 })
  score: number;

  @ApiProperty({ example: 10 })
  total_questions: number;

  @ApiProperty({ example: 80.0 })
  percentage: number;

  @ApiProperty({ example: '2025-07-03T21:50:39.371Z' })
  completed_at: string;

  @ApiProperty({ example: 120 })
  time_spent: number;

  @ApiProperty({ type: Object })
  user: {
    user_id: number;
    name: string;
    email: string;
  };

  @ApiProperty({ type: Object })
  quiz: {
    title: string;
    subject: {
      name: string;
    };
  };
}

/**
 * Contrôleur Leaderboard – Gère les endpoints liés au classement et aux statistiques dans QuizzApp.
 *
 * Rôle :
 *   - Récupérer le classement général, par matière, les stats utilisateur et les meilleurs scores récents.
 *
 * Sécurité :
 *   - Toutes les routes sont protégées par JwtAuthGuard et RolesGuard (authentification JWT et gestion des rôles).
 *
 * Rate limiting :
 *   - Limite de 10 requêtes par minute par utilisateur (@Throttle).
 *
 * Documentation :
 *   - Toutes les routes sont documentées avec Swagger (@ApiOperation, @ApiResponse, @ApiParam, @ApiQuery).
 *   - Les réponses d’erreur utilisent les entités centralisées de error.entity.ts.
 */
@ApiTags('leaderboard')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Throttle({ default: { limit: 10, ttl: 60 } })
@Controller('leaderboard')
export class LeaderboardController {
  constructor(private readonly leaderboardService: LeaderboardService) {}

  // Récupérer le classement général
  @ApiOperation({ summary: 'Récupérer le classement général' })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Nombre maximum de résultats',
  })
  @ApiResponse({
    status: 200,
    description: 'Classement général récupéré avec succès',
    type: [UserStatsResponse],
  })
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
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Get('general')
  async getGeneralLeaderboard(
    @Query('limit', new ParseIntPipe({ optional: true })) limit = 10,
  ) {
    return this.leaderboardService.getGeneralLeaderboard(limit);
  }

  // Récupérer le classement par matière
  @ApiOperation({ summary: 'Récupérer le classement par matière' })
  @ApiParam({
    name: 'subjectId',
    type: Number,
    description: 'ID de la matière',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Nombre maximum de résultats',
  })
  @ApiResponse({
    status: 200,
    description: 'Classement par matière récupéré avec succès',
    type: [UserStatsResponse],
  })
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
    description: 'Matière non trouvée',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Get('subject/:subjectId')
  async getLeaderboardBySubject(
    @Param('subjectId', ParseIntPipe) subjectId: number,
    @Query('limit', new ParseIntPipe({ optional: true })) limit = 10,
  ) {
    return this.leaderboardService.getLeaderboardBySubject(subjectId, limit);
  }

  // Récupérer les statistiques d'un utilisateur
  @ApiOperation({ summary: "Récupérer les statistiques d'un utilisateur" })
  @ApiParam({
    name: 'userId',
    type: Number,
    description: "ID de l'utilisateur",
  })
  @ApiResponse({
    status: 200,
    description: 'Statistiques utilisateur récupérées avec succès',
    type: UserStatsResponse,
  })
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
    description: 'Utilisateur non trouvé',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Get('user/:userId')
  async getUserStats(@Param('userId', ParseIntPipe) userId: number) {
    return this.leaderboardService.getUserStats(userId);
  }

  // Récupérer les meilleurs scores récents
  @ApiOperation({ summary: 'Récupérer les meilleurs scores récents' })
  @ApiQuery({
    name: 'days',
    required: false,
    type: Number,
    description: 'Période en jours (défaut: 7)',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Nombre maximum de résultats',
  })
  @ApiResponse({
    status: 200,
    description: 'Meilleurs scores récents récupérés avec succès',
    type: [RecentScoreResponse],
  })
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
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Get('recent')
  async getRecentBestScores(
    @Query('days', new ParseIntPipe({ optional: true })) days = 7,
    @Query('limit', new ParseIntPipe({ optional: true })) limit = 10,
  ) {
    return this.leaderboardService.getRecentBestScores(days, limit);
  }
}
