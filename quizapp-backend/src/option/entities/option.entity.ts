import { ApiProperty } from '@nestjs/swagger';
import { QuestionEntity } from '../../question/entities/question.entity';

/**
 * Entité représentant une option de réponse pour Swagger.
 */
export class OptionEntity {
  @ApiProperty()
  option_id: number;

  @ApiProperty()
  text: string;

  @ApiProperty()
  is_correct: boolean;

  @ApiProperty()
  question_id: number;

  @ApiProperty()
  created_at: string;

  @ApiProperty()
  updated_at: string;

  @ApiProperty({ type: () => QuestionEntity, required: false })
  question?: QuestionEntity;
}

/**
 * Entité de réponse pour la suppression d'une option.
 */
export class OptionDeleteResponse {
  @ApiProperty({ example: 'Option supprimée avec succès' })
  message: string;

  @ApiProperty({ example: 1 })
  deletedId: number;
}
