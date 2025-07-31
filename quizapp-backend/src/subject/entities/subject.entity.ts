import { ApiProperty } from '@nestjs/swagger';

/**
 * Entity représentant une matière (subject) dans le contexte d'un questionnaire.
 *
 * Utilisée pour documenter la structure des matières dans les réponses de l'API.
 */
export class SubjectEntity {
  @ApiProperty({ example: 1 })
  subject_id: number;

  @ApiProperty({ example: 'Mathématiques' })
  name: string;

  @ApiProperty({ example: 1 })
  user_id: number;

  @ApiProperty({ example: '2025-07-01T02:23:59.371Z' })
  created_at: string;

  @ApiProperty({ example: '2025-07-01T02:23:59.371Z' })
  updated_at: string;
}

/**
 * Entité de réponse pour la suppression d'un sujet.
 */
export class SubjectDeleteResponse {
  @ApiProperty({ example: 'Sujet supprimé avec succès' })
  message: string;

  @ApiProperty({ example: 1 })
  deletedId: number;
}
