import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsEnum,
} from 'class-validator';

/**
 * DTO (Data Transfer Object) pour la création d'un utilisateur.
 *
 * Définit la structure et la validation des données attendues lors de la création d'un utilisateur via l'API.
 * Utilisé par le contrôleur User pour valider et documenter le corps de la requête POST /users.
 */
export class CreateUserDto {
  @ApiProperty({ example: 'user@email.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'motdepasse' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: 'Jean Dupont' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({ example: 'USER', enum: ['ADMIN', 'USER'] })
  @IsOptional()
  @IsEnum(['ADMIN', 'USER'])
  role?: 'USER' | 'ADMIN';
}
