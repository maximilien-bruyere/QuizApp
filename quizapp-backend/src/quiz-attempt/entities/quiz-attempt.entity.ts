import { ApiProperty } from '@nestjs/swagger';

/**
 * Entité utilisateur simplifiée pour la tentative de quiz.
 */
export class UserQuizAttemptEntity {
  @ApiProperty({ example: 1 })
  user_id: number;
  @ApiProperty({ example: 'user@email.com' })
  email: string;
  @ApiProperty({ example: 'Jean Dupont' })
  name: string;
  @ApiProperty({ example: '2025-07-01T02:23:59.371Z' })
  created_at: string;
  @ApiProperty({ example: 'USER', enum: ['ADMIN', 'USER'] })
  role: string;
}

/**
 * Entité quiz simplifiée pour la tentative de quiz.
 */
export class QuizQuizAttemptEntity {
  @ApiProperty({ example: 1 })
  quiz_id: number;
  @ApiProperty({ example: 'Quiz de Mathématiques' })
  title: string;
  @ApiProperty({ example: 'Description du quiz' })
  description: string;
  @ApiProperty({ example: '2025-07-01T02:23:59.371Z' })
  created_at: string;
  @ApiProperty({ example: '2025-07-01T02:23:59.371Z' })
  updated_at: string;
}

/**
 * Entité de réponse pour la suppression d'une tentative de quiz.
 */
export class QuizAttemptDeleteResponse {
  @ApiProperty({ example: 'Tentative supprimée avec succès' })
  message: string;
}

/**
 * Entité représentant une tentative de quiz pour Swagger et la documentation API.
 */
export class QuizAttemptEntity {
  @ApiProperty({ example: 1 })
  quiz_attempt_id: number;

  @ApiProperty({ example: 1 })
  user_id: number;

  @ApiProperty({ example: 1 })
  quiz_id: number;

  @ApiProperty({ example: 85.5, required: false })
  score?: number;

  @ApiProperty({ example: '2025-07-01T02:23:59.371Z' })
  created_at: string;

  @ApiProperty({ example: '2025-07-01T02:23:59.371Z' })
  updated_at: string;

  @ApiProperty({ type: () => UserQuizAttemptEntity, required: false })
  user?: UserQuizAttemptEntity;

  @ApiProperty({ type: () => QuizQuizAttemptEntity, required: false })
  quiz?: QuizQuizAttemptEntity;
}
