import { ApiProperty } from '@nestjs/swagger';

/**
 * Entité représentant une réponse à une question dans un quiz.
 */
export class AnswerEntity {
  @ApiProperty({ example: 1 })
  answer_id: number;

  @ApiProperty({ example: 'Ma réponse', required: false })
  response_text?: string;

  @ApiProperty({ example: 1, required: false })
  option_id?: number;

  @ApiProperty({ example: 2 })
  question_id: number;

  @ApiProperty({ example: 3 })
  qa_id: number;
}

/**
 * Réponse de succès pour la suppression d'une réponse.
 */
export class AnswerDeleteResponse {
  @ApiProperty({ example: 'Réponse supprimée avec succès' })
  message: string;
}
