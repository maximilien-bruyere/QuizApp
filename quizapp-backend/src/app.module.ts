import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module'; // << IMPORT PrismaModule
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { SubjectModule } from './subject/subject.module';
import { QuizModule } from './quiz/quiz.module';
import { QuestionModule } from './question/question.module';
import { OptionModule } from './option/option.module';
import { QuizAttemptModule } from './quiz-attempt/quiz-attempt.module';
import { AnswerModule } from './answer/answer.module';
import { CategoryModule } from './category/category.module';
import { FlashcardModule } from './flashcard/flashcard.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';
import { UploadModule } from './upload/upload.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { InformationModule } from './information/information.module';
import { ExportModule } from './export/export.module';
import { ImportModule } from './import/import.module';
import { DatabaseService } from './database/database.service';
import { DatabaseController } from './database/database.controller';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      throttlers: [{ ttl: 60, limit: 10 }],
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    PrismaModule,
    AuthModule,
    SubjectModule,
    QuizModule,
    QuestionModule,
    OptionModule,
    QuizAttemptModule,
    AnswerModule,
    CategoryModule,
    FlashcardModule,
    LeaderboardModule,
    UploadModule,
    InformationModule,
    ExportModule,
    ImportModule,
  ],
  controllers: [AppController, DatabaseController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
