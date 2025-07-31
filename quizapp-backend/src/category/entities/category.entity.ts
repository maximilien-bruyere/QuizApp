import { ApiProperty } from '@nestjs/swagger';
import { SubjectEntity } from '../../subject/entities/subject.entity';

/**
 * Entity représentant une catégorie (category) dans le contexte d'un questionnaire.
 *
 * Utilisée pour documenter la structure des catégories dans les réponses de l'API.
 */
export class CategoryEntity {
  @ApiProperty({ example: 1 })
  category_id: number;

  @ApiProperty({ example: 'Algèbre' })
  name: string;

  @ApiProperty({ example: 1 })
  subject_id: number;

  @ApiProperty({ example: '2025-07-01T02:23:59.371Z' })
  created_at: string;

  @ApiProperty({ example: '2025-07-01T02:23:59.371Z' })
  updated_at: string;

  @ApiProperty({ type: () => SubjectEntity, required: false })
  subject?: SubjectEntity;
}

/**
 * Réponse de succès pour la suppression d'une catégorie.
 */
export class CategoryDeleteResponse {
  @ApiProperty({ example: 'Catégorie supprimée avec succès' })
  message: string;
}
