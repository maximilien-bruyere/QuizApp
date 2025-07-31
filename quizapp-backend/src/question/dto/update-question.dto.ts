import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsInt, IsOptional } from 'class-validator';

/**
 * DTO pour la mise à jour d'une question.
 */
export class UpdateQuestionDto {
  @ApiPropertyOptional({ description: 'Contenu de la question' })
  @IsOptional()
  @IsString()
  content?: string;

  @ApiPropertyOptional({
    description: 'Type de question',
    enum: ['SINGLE', 'MULTIPLE', 'MATCHING'],
  })
  @IsOptional()
  @IsString()
  type?: string;

  @ApiPropertyOptional({ description: 'ID du quiz associé' })
  @IsOptional()
  @IsInt()
  quiz_id?: number;

  @ApiPropertyOptional({ description: 'ID de la catégorie' })
  @IsOptional()
  @IsInt()
  category_id?: number;
}
