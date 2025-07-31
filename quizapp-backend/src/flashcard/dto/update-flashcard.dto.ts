import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsInt, IsEnum } from 'class-validator';
import { FlashcardDifficulty } from '@prisma/client';

/**
 * DTO (Data Transfer Object) pour la mise à jour d'une flashcard.
 *
 * Définit la structure et la validation des données attendues lors de la modification d'une flashcard via l'API.
 * Utilisé par le contrôleur Flashcard pour valider et documenter le corps de la requête PATCH /flashcards/:id.
 *
 * Champs (tous optionnels) :
 * - front : question ou face avant de la carte
 * - back : réponse ou face arrière de la carte
 * - category_id : identifiant de la catégorie
 * - difficulty : niveau de difficulté
 */

export class UpdateFlashcardDto {
  @ApiProperty({ example: 'Question mise à jour', required: false })
  @IsOptional()
  @IsString()
  front?: string;

  @ApiProperty({ example: 'Réponse mise à jour', required: false })
  @IsOptional()
  @IsString()
  back?: string;

  @ApiProperty({ example: 2, required: false })
  @IsOptional()
  @IsInt()
  category_id?: number;

  @ApiProperty({ example: 'MOYEN', enum: FlashcardDifficulty, required: false })
  @IsOptional()
  @IsEnum(FlashcardDifficulty)
  difficulty?: FlashcardDifficulty;
}
