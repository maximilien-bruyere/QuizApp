import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InformationService {
  constructor(private readonly prisma: PrismaService) {}

  async getInfoCounts() {
    const [quizCount, subjectCount, userCount, categoryCount, flashcardCount] =
      await Promise.all([
        this.prisma.quiz.count(),
        this.prisma.subject.count(),
        this.prisma.user.count(),
        this.prisma.category.count(),
        this.prisma.flashcard.count(),
      ]);
    return {
      quizCount,
      subjectCount,
      userCount,
      categoryCount,
      flashcardCount,
    };
  }
}
