import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

/**
 * DTO (Data Transfer Object) pour la mise à jour d'une catégorie.
 *
 * Ce fichier définit la structure et la validation des données attendues lors de la modification d'une catégorie via l'API.
 * Utilisé par le contrôleur Category pour valider et documenter le corps de la requête PATCH /categories/:id.
 *
 * Champs :
 * - name (optionnel) : nouveau nom de la catégorie
 * - subject_id (optionnel) : nouvel identifiant du sujet auquel appartient la catégorie
 */
export class UpdateCategoryDto {
  @ApiPropertyOptional({ example: 'Géométrie' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 2 })
  @IsOptional()
  @IsNumber()
  subject_id?: number;
}
