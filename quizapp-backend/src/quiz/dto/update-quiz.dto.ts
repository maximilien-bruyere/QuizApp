import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsEnum, IsInt, IsArray, ValidateNested } from 'class-validator';
import { QuizDifficulty } from '../quiz-difficulty.enum';
import { Type } from 'class-transformer';

/**
 * DTO pour la mise à jour d'une option de question.
 */
export class UpdateQuizOptionDto {
  @ApiProperty({ description: 'Texte de l’option', required: false })
  @IsOptional()
  @IsString()
  text?: string;

  @ApiProperty({ description: 'Option correcte ?', required: false })
  @IsOptional()
  is_correct?: boolean;
}

/**
 * DTO pour la mise à jour d’un matching pair.
 */
export class UpdateQuizMatchingPairDto {
  @ApiProperty({ description: 'Côté gauche', required: false })
  @IsOptional()
  @IsString()
  left?: string;

  @ApiProperty({ description: 'Côté droit', required: false })
  @IsOptional()
  @IsString()
  right?: string;
}

/**
 * DTO pour la mise à jour d'une question dans un quiz.
 */
export class UpdateQuizQuestionDto {
  @ApiProperty({ description: 'Contenu de la question', required: false })
  @IsOptional()
  @IsString()
  content?: string;

  @ApiProperty({ description: 'Type de question', enum: ['SINGLE', 'MULTIPLE', 'MATCHING'], required: false })
  @IsOptional()
  @IsString()
  type?: string;

  @ApiProperty({ description: 'Image associée', required: false })
  @IsOptional()
  @IsString()
  image_url?: string;

  @ApiProperty({ description: 'Explication', required: false })
  @IsOptional()
  @IsString()
  explanation?: string;

  @ApiProperty({ description: 'Options', required: false, type: [UpdateQuizOptionDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateQuizOptionDto)
  options?: UpdateQuizOptionDto[];

  @ApiProperty({ description: 'Matching pairs', required: false, type: [UpdateQuizMatchingPairDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateQuizMatchingPairDto)
  pairs?: UpdateQuizMatchingPairDto[];
}

/**
 * DTO pour la mise à jour d'un quiz.
 */
export class UpdateQuizDto {
  @ApiProperty({ description: 'Titre du quiz', required: false })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({ description: 'Description du quiz', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Difficulté', enum: QuizDifficulty, required: false, type: 'string' })
  @IsOptional()
  @IsEnum(QuizDifficulty)
  difficulty?: QuizDifficulty;

  @ApiProperty({ description: 'Limite de temps en minutes', required: false })
  @IsOptional()
  @IsInt()
  time_limit?: number;

  @ApiProperty({ description: 'ID du sujet', required: false })
  @IsOptional()
  @IsInt()
  subject_id?: number;

  @ApiProperty({ description: 'ID de la catégorie', required: false })
  @IsOptional()
  @IsInt()
  category_id?: number;

  @ApiProperty({ description: 'Questions du quiz', type: [UpdateQuizQuestionDto], required: false })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateQuizQuestionDto)
  questions?: UpdateQuizQuestionDto[];
}
