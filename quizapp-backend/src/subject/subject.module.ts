import { Module } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectController } from './subject.controller';
import { PrismaModule } from '../prisma/prisma.module'; // <<< AJOUT

@Module({
  imports: [PrismaModule],
  controllers: [SubjectController],
  providers: [SubjectService],
})
export class SubjectModule {}
