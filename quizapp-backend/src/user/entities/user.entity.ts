import { ApiProperty } from '@nestjs/swagger';

/**
 * Entité représentant un utilisateur retourné par l'API.
 *
 * Utilisée pour documenter la structure des objets utilisateur dans les réponses de l'API User.
 */
export class UserEntity {
  @ApiProperty({ example: 1 })
  user_id: number;

  @ApiProperty({ example: 'user@email.com' })
  email: string;

  @ApiProperty({ example: 'Jean Dupont' })
  name: string;

  @ApiProperty({ example: '2025-07-01T02:23:59.371Z' })
  created_at: string;

  @ApiProperty({ example: 'USER', enum: ['ADMIN', 'USER'] })
  role: string;
}

/**
 * Réponse de succès pour la suppression d'un utilisateur.
 */
export class UserDeleteResponse {
  @ApiProperty({ example: 'Utilisateur supprimé avec succès' })
  message: string;
}
