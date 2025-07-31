import { Module } from '@nestjs/common';
import { FlashcardService } from './flashcard.service';
import { FlashcardController } from './flashcard.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [FlashcardService, PrismaService],
  controllers: [FlashcardController],
})
export class FlashcardModule {}
