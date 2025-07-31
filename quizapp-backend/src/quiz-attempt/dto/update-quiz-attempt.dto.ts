import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, Min, Max } from 'class-validator';

/**
 * DTO pour la mise à jour du score d'une tentative de quiz.
 */
export class UpdateQuizAttemptDto {
  @ApiProperty({
    example: 92.5,
    description: 'Score en pourcentage (0-100)',
    required: false,
  })
  @IsNumber()
  @Min(0)
  @Max(100)
  @IsOptional()
  score?: number;
}
