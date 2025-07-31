import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

/**
 * DTO pour la création d'un sujet.
 */
export class CreateSubjectDto {
  @ApiProperty({ example: 'Mathématiques', description: 'Nom du sujet' })
  @IsString()
  @IsNotEmpty()
  name: string;
}
