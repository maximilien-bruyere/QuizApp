import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsBoolean, IsInt, IsOptional } from 'class-validator';

/**
 * DTO pour la mise à jour d'une option de réponse.
 */
export class UpdateOptionDto {
  @ApiPropertyOptional({ description: "Texte de l'option" })
  @IsOptional()
  @IsString()
  text?: string;

  @ApiPropertyOptional({ description: "Indique si l'option est correcte" })
  @IsOptional()
  @IsBoolean()
  is_correct?: boolean;

  @ApiPropertyOptional({ description: 'ID de la question associée' })
  @IsOptional()
  @IsInt()
  question_id?: number;
}
