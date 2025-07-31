import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

/**
 * DTO pour la mise à jour d'un sujet.
 */
export class UpdateSubjectDto {
  @ApiProperty({
    example: 'Physique',
    description: 'Nouveau nom du sujet',
    required: false,
  })
  @IsString()
  @IsOptional()
  name?: string;
}
