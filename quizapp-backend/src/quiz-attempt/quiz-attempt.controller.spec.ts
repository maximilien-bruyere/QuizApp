import { Test, TestingModule } from '@nestjs/testing';
import { QuizAttemptController } from './quiz-attempt.controller';

describe('QuizAttemptController', () => {
  let controller: QuizAttemptController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuizAttemptController],
    }).compile();

    controller = module.get<QuizAttemptController>(QuizAttemptController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
