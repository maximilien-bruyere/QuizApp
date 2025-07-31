import { IsOptional, IsString, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * DTO (Data Transfer Object) pour la création d'une réponse utilisateur.
 *
 * Ce fichier définit la structure et la validation des données attendues lors de la création d'une réponse via l'API.
 * Utilisé par le contrôleur Answer pour valider et documenter le corps de la requête POST /answers.
 *
 * Champs :
 * - response_text (optionnel) : texte libre de la réponse
 * - option_id (optionnel) : identifiant d'une option sélectionnée (pour QCM)
 * - question_id (obligatoire) : identifiant de la question concernée
 * - qa_id (obligatoire) : identifiant de la tentative de quiz
 */
export class CreateAnswerDto {
  @ApiPropertyOptional({ example: 'Ma réponse' })
  @IsOptional()
  @IsString()
  response_text?: string;

  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsNumber()
  option_id?: number;

  @ApiProperty({ example: 2 })
  @IsNumber()
  question_id: number;

  @ApiProperty({ example: 3 })
  @IsNumber()
  qa_id: number;
}
