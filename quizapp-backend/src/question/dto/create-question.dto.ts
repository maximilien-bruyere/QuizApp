import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsOptional, IsIn } from 'class-validator';

/**
 * DTO pour la création d'une question.
 * Fournit la structure et la validation pour la création d'une nouvelle question dans le système.
 * Tous les champs obligatoires et optionnels sont documentés et validés.
 */
export class CreateQuestionDto {
  @ApiProperty({ description: 'Contenu de la question' })
  @IsString()
  content: string;

  @ApiProperty({
    description: 'Type de question',
    enum: ['SINGLE', 'MULTIPLE', 'MATCHING'],
  })
  @IsString()
  @IsIn(['SINGLE', 'MULTIPLE', 'MATCHING'])
  type: string;

  @ApiProperty({ description: 'ID du quiz associé' })
  @IsInt()
  quiz_id: number;

  @ApiProperty({ description: 'ID de la catégorie', required: false })
  @IsOptional()
  @IsInt()
  category_id?: number;

  @ApiProperty({ description: 'Image associée à la question', required: false })
  @IsOptional()
  @IsString()
  image?: string;

  @ApiProperty({ description: 'Explication de la question', required: false })
  @IsOptional()
  @IsString()
  explanation?: string;
}
