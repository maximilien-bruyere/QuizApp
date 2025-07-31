import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

/**
 * DTO pour la création d'une tentative de quiz.
 */
export class CreateQuizAttemptDto {
  @ApiProperty({ example: 1, description: "ID de l'utilisateur" })
  @IsInt()
  @IsNotEmpty()
  user_id: number;

  @ApiProperty({ example: 1, description: 'ID du quiz' })
  @IsInt()
  @IsNotEmpty()
  quiz_id: number;
}
