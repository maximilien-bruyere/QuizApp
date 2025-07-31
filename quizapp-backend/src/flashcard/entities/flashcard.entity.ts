import { ApiProperty } from '@nestjs/swagger';
import { FlashcardDifficulty } from '@prisma/client';
import { CategoryEntity } from '../../category/entities/category.entity';
import { UserEntity } from '../../user/entities/user.entity';

/**
 * Entité représentant une flashcard pour la documentation Swagger.
 * Utilisée pour typer et documenter les réponses de l'API.
 */
export class FlashcardEntity {
  @ApiProperty({ example: 1 })
  flashcard_id: number;

  @ApiProperty({ example: "Qu'est-ce qu'une variable ?" })
  front: string;

  @ApiProperty({
    example:
      "Une variable est un conteneur qui stocke des données qui peuvent être modifiées pendant l'exécution du programme.",
  })
  back: string;

  @ApiProperty({ example: 'NOUVEAU', enum: FlashcardDifficulty })
  difficulty: FlashcardDifficulty;

  @ApiProperty({ example: 1 })
  category_id: number;

  @ApiProperty({ example: 1 })
  user_id: number;

  @ApiProperty({ example: '2025-07-01T02:23:59.371Z' })
  created_at: string;

  @ApiProperty({ example: '2025-07-01T02:23:59.371Z' })
  updated_at: string;

  @ApiProperty({ type: CategoryEntity, required: false })
  category?: CategoryEntity;

  @ApiProperty({ type: UserEntity, required: false })
  user?: UserEntity;
}

/**
 * Réponse de succès pour la suppression d'une flashcard.
 */
export class FlashcardDeleteResponse {
  @ApiProperty({ example: 'Flashcard supprimée avec succès' })
  message: string;
}
