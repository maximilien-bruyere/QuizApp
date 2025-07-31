
import { Controller, Post, UploadedFile, UseInterceptors, HttpException, HttpStatus } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DatabaseService } from './database.service';
import * as fs from 'fs';
import * as path from 'path';

@Controller('database')
export class DatabaseController {
  constructor(private readonly dbService: DatabaseService) {}

  @Post('import')
  @UseInterceptors(FileInterceptor('file'))
  async importDb(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new HttpException('Aucun fichier reçu', HttpStatus.BAD_REQUEST);
    }
    // Sauvegarder le fichier temporairement dans le bon dossier (compatible build)
    const uploadsDir = path.join(process.cwd(), 'resources', 'quizapp-backend', 'uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }
    const tempPath = path.join(uploadsDir, `imported-${Date.now()}.db`);
    fs.writeFileSync(tempPath, file.buffer);
    await this.dbService.importDatabase(tempPath);
    // Supprimer le fichier temporaire après import
    fs.unlinkSync(tempPath);
    return { success: true };
  }
}
