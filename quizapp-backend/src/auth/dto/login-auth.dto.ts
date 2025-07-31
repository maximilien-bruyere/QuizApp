import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

/**
 * DTO pour la connexion d'un utilisateur.
 *
 * Définit la structure et la validation des données attendues lors de la connexion via l'API.
 * Utilisé par le contrôleur Auth pour valider et documenter le corps de la requête POST /auth/login.
 *
 * Champs :
 * - email : adresse email de l'utilisateur
 * - password : mot de passe de l'utilisateur
 */
export class LoginAuthDto {
  @ApiProperty({ example: 'user@email.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'motdepasse' })
  @IsString()
  password: string;
}
