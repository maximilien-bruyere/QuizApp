import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

/**
 * DTO (Data Transfer Object) pour la création d'une catégorie.
 *
 * Ce fichier définit la structure et la validation des données attendues lors de la création d'une catégorie via l'API.
 * Utilisé par le contrôleur Category pour valider et documenter le corps de la requête POST /categories.
 *
 * Champs :
 * - name : nom de la catégorie
 * - subject_id : identifiant du sujet auquel appartient la catégorie
 */
export class CreateCategoryDto {
  @ApiProperty({ example: 'Algèbre' })
  @IsString()
  name: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  subject_id: number;
}
