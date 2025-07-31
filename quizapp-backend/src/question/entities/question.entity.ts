import { ApiProperty } from '@nestjs/swagger';
import { OptionEntity } from '../../option/entities/option.entity';
import { QuizEntity } from '../../quiz/entities/quiz.entity';

/**
 * Entité représentant une question pour Swagger (version minimale pour option.entity.ts).
 */
export class QuestionEntity {
  @ApiProperty()
  question_id: number;

  @ApiProperty()
  content: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  quiz_id: number;

  @ApiProperty({ example: '/uploads/question-images/123.png', nullable: true })
  image_url: string | null;

  @ApiProperty({ example: 'Paris est la capitale de la France depuis des siècles.', nullable: true })
  explanation: string | null;

  @ApiProperty({ type: () => QuizEntity, required: false })
  quiz?: QuizEntity;

  @ApiProperty({ type: () => [OptionEntity], required: false })
  options?: OptionEntity[];

  @ApiProperty({ type: () => [MatchingPairEntity], required: false })
  pairs?: MatchingPairEntity[];
}

/**
 * Entité de réponse pour la suppression d'une question.
 */
export class QuestionDeleteResponse {
  @ApiProperty({ example: 'Question supprimée avec succès' })
  message: string;

  @ApiProperty({ example: 1 })
  deletedId: number;
}

/**
 * Entité représentant une paire de correspondance pour les questions de type "matching".
 */
export class MatchingPairEntity {
  @ApiProperty({ example: 1 })
  pair_id: number;

  @ApiProperty({ example: 'France' })
  left: string;

  @ApiProperty({ example: 'Paris' })
  right: string;

  @ApiProperty({ example: 1 })
  question_id: number;
}
