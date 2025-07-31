import { ApiProperty } from '@nestjs/swagger';

/**
 * Entity pour la réponse d'authentification (token JWT).
 *
 * Utilisée pour documenter la structure de la réponse lors de la connexion ou de l'inscription.
 */
export class AuthEntity {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
  access_token: string;
}
