import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

/**
 * DTO pour l'inscription d'un nouvel utilisateur.
 *
 * Définit la structure et la validation des données attendues lors de l'inscription via l'API.
 * Utilisé par le contrôleur Auth pour valider et documenter le corps de la requête POST /auth/register.
 *
 * Champs :
 * - email : adresse email de l'utilisateur
 * - password : mot de passe de l'utilisateur (doit faire au moins 6 caractères)
 * - name : nom complet de l'utilisateur
 */
export class RegisterAuthDto {
  @ApiProperty({ example: 'user@email.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'motdepasse' })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 'Jean Dupont' })
  @IsString()
  name: string;
}
