import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

/**
 * DTO pour le changement de mot de passe d'un utilisateur.
 * Utilisé pour valider et documenter le corps de la requête POST /users/:id/change-password.
 */
export class ChangePasswordDto {
  @ApiProperty({ example: 'ancienmdp' })
  @IsString()
  oldPassword: string;

  @ApiProperty({ example: 'nouveaumdp' })
  @IsString()
  newPassword: string;
}
