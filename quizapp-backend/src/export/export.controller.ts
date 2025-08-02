import {
  Controller,
  Get,
  Query,
  Res,
  Post,
  UploadedFile,
  UseInterceptors,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ExportService } from './export.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('export')
export class ExportController {
  constructor(private readonly exportService: ExportService) {}

  @Get('question-images-zip')
  async exportQuestionImagesZip(@Res() res: Response): Promise<void> {
    await this.exportService.exportQuestionImagesZip(res);
  }

  @Get('db')
  exportDb(@Res() res: Response): void {
    const dbPath = 'quizapp-database/quizapp.db';
    res.download(dbPath, 'quizapp.db');
  }

  @Get('json')
  async exportJson(
    @Query('type') type: string,
    @Res() res: Response,
  ): Promise<void> {
    try {
      const data = await this.exportService.exportJson(type);
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Content-Disposition', `attachment; filename=${type}.json`);
      res.send(JSON.stringify(data, null, 2));
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : 'Erreur export';
      res
        .status(HttpStatus.BAD_REQUEST)
        .json({ success: false, error: message });
    }
  }

  // Importer une liste de flashcards en .json
  @Post('import/flashcards-json')
  @UseInterceptors(FileInterceptor('file'))
  async importFlashcardsJson(
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response,
  ): Promise<void> {
    try {
      const result = await this.exportService.importFlashcardsJson(file);
      res.json({ success: true, imported: result });
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : 'Erreur import';
      res
        .status(HttpStatus.BAD_REQUEST)
        .json({ success: false, error: message });
    }
  }
}
