import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, IsEnum } from 'class-validator';

/**
 * DTO (Data Transfer Object) pour la mise à jour d'un utilisateur.
 *
 * Définit la structure et la validation des données attendues lors de la modification d'un utilisateur via l'API.
 * Utilisé par le contrôleur User pour valider et documenter le corps de la requête PATCH /users/:id.
 */
export class UpdateUserDto {
  @ApiPropertyOptional({ example: 'nouvel@email.com' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ example: 'nouveaumdp' })
  @IsOptional()
  @IsString()
  password?: string;

  @ApiPropertyOptional({ example: 'Nouveau Nom' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 'USER', enum: ['ADMIN', 'USER'] })
  @IsOptional()
  @IsEnum(['ADMIN', 'USER'])
  role?: 'USER' | 'ADMIN';
}
