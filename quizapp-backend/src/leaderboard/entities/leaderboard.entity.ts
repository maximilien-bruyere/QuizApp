import { ApiProperty } from '@nestjs/swagger';

/**
 * Entité représentant une entrée du classement (leaderboard) pour Swagger.
 */
export class LeaderboardEntryEntity {
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

/**
 * Entité de réponse pour la suppression d'une entrée du classement (si besoin).
 */
export class LeaderboardDeleteResponse {
  @ApiProperty({ example: 'Entrée supprimée avec succès' })
  message: string;
}
