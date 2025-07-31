import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsEnum,
  IsInt,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { QuizDifficulty } from '../quiz-difficulty.enum';
import { Type } from 'class-transformer';

/**
 * DTO pour la création d'une option de question.
 */
export class CreateQuizOptionDto {
  @ApiProperty({ description: 'Texte de l’option' })
  @IsString()
  text: string;

  @ApiProperty({ description: 'Option correcte ?', required: false })
  @IsOptional()
  is_correct?: boolean;
}

/**
 * DTO pour la création d’un matching pair.
 */
export class CreateQuizMatchingPairDto {
  @ApiProperty({ description: 'Côté gauche' })
  @IsString()
  left: string;

  @ApiProperty({ description: 'Côté droit' })
  @IsString()
  right: string;
}

/**
 * DTO pour la création d'une question dans un quiz.
 */
export class CreateQuizQuestionDto {
  @ApiProperty({ description: 'Contenu de la question' })
  @IsString()
  content: string;

  @ApiProperty({
    description: 'Type de question',
    enum: ['SINGLE', 'MULTIPLE', 'MATCHING'],
  })
  @IsString()
  type: string;

  @ApiProperty({ description: 'Image associée', required: false })
  @IsOptional()
  @IsString()
  image_url?: string;

  @ApiProperty({ description: 'Explication', required: false })
  @IsOptional()
  @IsString()
  explanation?: string;

  @ApiProperty({
    description: 'Options',
    required: false,
    type: [CreateQuizOptionDto],
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateQuizOptionDto)
  options?: CreateQuizOptionDto[];

  @ApiProperty({
    description: 'Matching pairs',
    required: false,
    type: [CreateQuizMatchingPairDto],
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateQuizMatchingPairDto)
  pairs?: CreateQuizMatchingPairDto[];
}

/**
 * DTO pour la création d'un quiz.
 */
export class CreateQuizDto {
  /** Titre du quiz */
  @ApiProperty({ description: 'Titre du quiz' })
  @IsString()
  title: string;

  /** Description optionnelle du quiz */
  @ApiProperty({ description: 'Description du quiz', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  /** Difficulté du quiz */
  @ApiProperty({
    description: 'Difficulté',
    enum: QuizDifficulty,
    required: false,
    type: 'string',
  })
  @IsOptional()
  @IsEnum(QuizDifficulty)
  difficulty?: QuizDifficulty;

  /** Limite de temps en minutes */
  @ApiProperty({ description: 'Limite de temps en minutes', required: false })
  @IsOptional()
  @IsInt()
  time_limit?: number;

  /** ID du sujet */
  @ApiProperty({ description: 'ID du sujet' })
  @IsInt()
  subject_id: number;

  /** ID de la catégorie */
  @ApiProperty({ description: 'ID de la catégorie' })
  @IsInt()
  category_id: number;

  /** Questions du quiz */
  @ApiProperty({
    description: 'Questions du quiz',
    type: [CreateQuizQuestionDto],
    required: false,
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateQuizQuestionDto)
  questions?: CreateQuizQuestionDto[];
}
