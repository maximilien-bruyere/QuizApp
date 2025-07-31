import { ApiProperty } from '@nestjs/swagger';
import { QuestionEntity } from '../../question/entities/question.entity';
import { SubjectEntity } from '../../subject/entities/subject.entity';
import { CategoryEntity } from '../../category/entities/category.entity';

/**
 * Entité représentant un quiz pour Swagger et les réponses API.
 */
export class QuizEntity {
  @ApiProperty({ example: 1 })
  quiz_id: number;

  @ApiProperty({ example: 'Quiz de Géométrie - Les triangles' })
  title: string;

  @ApiProperty({
    example: 'Un quiz sur les propriétés des triangles',
    required: false,
  })
  description?: string;

  @ApiProperty({ example: 'MOYEN', enum: ['FACILE', 'MOYEN', 'DIFFICILE'] })
  difficulty: string;

  @ApiProperty({
    example: 30,
    description: 'Limite de temps en minutes',
    required: false,
  })
  time_limit?: number;

  @ApiProperty({ example: 1 })
  subject_id: number;

  @ApiProperty({ example: 1 })
  category_id: number;

  @ApiProperty({ example: '2025-07-01T02:23:59.371Z' })
  created_at: string;

  @ApiProperty({ example: '2025-07-01T02:23:59.371Z' })
  updated_at: string;

  @ApiProperty({ type: () => [QuestionEntity], required: false })
  questions?: QuestionEntity[];

  @ApiProperty({ type: () => SubjectEntity, required: false })
  subject?: SubjectEntity;

  @ApiProperty({ type: () => CategoryEntity, required: false })
  category?: CategoryEntity;
}

/**
 * Réponse de succès pour la suppression d'un quiz.
 */
export class QuizDeleteResponse {
  @ApiProperty({ example: 'Quiz supprimé avec succès' })
  message: string;
}
