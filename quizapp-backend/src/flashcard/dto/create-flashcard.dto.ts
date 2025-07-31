import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsOptional,
  IsEnum,
} from 'class-validator';
import { FlashcardDifficulty } from '@prisma/client';

/**
 * DTO (Data Transfer Object) pour la création d'une flashcard.
 *
 * Ce fichier définit la structure et la validation des données attendues lors de la création d'une flashcard via l'API.
 * Utilisé par le contrôleur Flashcard pour valider et documenter le corps de la requête POST /flashcards.
 *
 * Champs :
 * - front : question ou face avant de la carte
 * - back : réponse ou face arrière de la carte
 * - category_id : identifiant de la catégorie
 * - user_id : identifiant de l'utilisateur créateur
 * - difficulty : niveau de difficulté (optionnel)
 */
export class CreateFlashcardDto {
  @ApiProperty({ example: "Qu'est-ce qu'une variable ?" })
  @IsString()
  @IsNotEmpty()
  front: string;

  @ApiProperty({
    example:
      "Une variable est un conteneur qui stocke des données qui peuvent être modifiées pendant l'exécution du programme.",
  })
  @IsString()
  @IsNotEmpty()
  back: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  category_id: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  user_id: number;

  @ApiProperty({
    example: 'NOUVEAU',
    enum: FlashcardDifficulty,
    required: false,
  })
  @IsOptional()
  @IsEnum(FlashcardDifficulty)
  difficulty?: FlashcardDifficulty;
}
