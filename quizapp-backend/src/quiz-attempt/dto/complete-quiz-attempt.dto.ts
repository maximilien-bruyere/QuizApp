import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min, IsNotEmpty } from 'class-validator';

/**
 * DTO pour la finalisation d'une tentative de quiz.
 */
export class CompleteQuizAttemptDto {
  @ApiProperty({ example: 18, description: 'Nombre de bonnes réponses' })
  @IsInt()
  @Min(0)
  @IsNotEmpty()
  score: number;

  @ApiProperty({ example: 20, description: 'Nombre total de questions' })
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  total_questions: number;

  @ApiProperty({ example: 1800, description: 'Temps passé en secondes' })
  @IsInt()
  @Min(0)
  @IsNotEmpty()
  time_spent: number;
}
