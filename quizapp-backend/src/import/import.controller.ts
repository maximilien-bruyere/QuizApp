import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImportService } from './import.service';

@Controller('import')
export class ImportController {
  constructor(private readonly importService: ImportService) {}

  @Post('db')
  @UseInterceptors(FileInterceptor('file'))
  async importDb(@UploadedFile() file: Express.Multer.File) {
    return this.importService.importDb(file);
  }

  @Post('quiz')
  @UseInterceptors(FileInterceptor('file'))
  async importQuiz(@UploadedFile() file: Express.Multer.File) {
    return this.importService.importQuiz(file);
  }

  @Post('subject')
  @UseInterceptors(FileInterceptor('file'))
  async importSubject(@UploadedFile() file: Express.Multer.File) {
    return this.importService.importSubject(file);
  }

  @Post('category')
  @UseInterceptors(FileInterceptor('file'))
  async importCategory(@UploadedFile() file: Express.Multer.File) {
    return this.importService.importCategory(file);
  }

  @Post('flashcard')
  @UseInterceptors(FileInterceptor('file'))
  async importFlashcard(@UploadedFile() file: Express.Multer.File) {
    return this.importService.importFlashcard(file);
  }

  @Post('user')
  @UseInterceptors(FileInterceptor('file'))
  async importUser(@UploadedFile() file: Express.Multer.File) {
    return this.importService.importUser(file);
  }

  @Post('question-images-zip')
  @UseInterceptors(FileInterceptor('file'))
  async importQuestionImagesZip(@UploadedFile() file: Express.Multer.File) {
    return this.importService.importQuestionImagesZip(file);
  }
}
