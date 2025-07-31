import { IsOptional, IsString, IsNumber } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

/**
 * DTO (Data Transfer Object) pour la mise à jour d'une réponse utilisateur.
 *
 * Ce fichier définit la structure et la validation des données attendues lors de la modification d'une réponse via l'API.
 * Utilisé par le contrôleur Answer pour valider et documenter le corps de la requête PATCH /answers/:id.
 *
 * Champs :
 * - response_text (optionnel) : nouveau texte de la réponse
 * - option_id (optionnel) : nouvel identifiant d'une option sélectionnée (pour QCM)
 */
export class UpdateAnswerDto {
  @ApiPropertyOptional({ example: 'Nouvelle réponse' })
  @IsOptional()
  @IsString()
  response_text?: string;

  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsNumber()
  option_id?: number;
}
