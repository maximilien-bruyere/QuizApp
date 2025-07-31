import { Module } from '@nestjs/common';
import { QuestionImageController } from './question-image.controller';

@Module({
  controllers: [QuestionImageController],
})
export class UploadModule {}
