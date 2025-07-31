import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsInt } from 'class-validator';

/**
 * DTO pour la création d'une option de réponse.
 */
export class CreateOptionDto {
  @ApiProperty({ description: "Texte de l'option" })
  @IsString()
  text: string;

  @ApiProperty({ description: "Indique si l'option est correcte" })
  @IsBoolean()
  is_correct: boolean;

  @ApiProperty({ description: 'ID de la question associée' })
  @IsInt()
  question_id: number;
}
