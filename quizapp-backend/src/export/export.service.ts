/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import archiver from 'archiver';
import * as path from 'path';

@Injectable()
export class ExportService {
  constructor(private readonly prisma: PrismaService) {}

  async exportQuestionImagesZip(res: any): Promise<void> {
    const imagesDir = path.join(process.cwd(), 'resources', 'quizapp-backend','uploads', 'question-images');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const archive = archiver('zip', { zlib: { level: 9 } });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    res.setHeader('Content-Type', 'application/zip');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=question-images.zip',
    );
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    archive.pipe(res);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    archive.directory(imagesDir, false);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    await archive.finalize();
  }

  async exportJson(type: string) {
    switch (type) {
      case 'subject':
        return this.prisma.subject.findMany({
          select: { name: true },
        });
      case 'category':
        return this.prisma.category.findMany({
          select: { name: true, subject_id: true },
        });
      case 'flashcard':
        return this.prisma.flashcard.findMany({
          select: {
            front: true,
            back: true,
            difficulty: true,
            category_id: true,
            user_id: true,
          },
        });
      case 'quiz':
        return this.prisma.quiz.findMany({
          select: {
            title: true,
            description: true,
            difficulty: true,
            time_limit: true,
            is_exam_mode: true,
            created_at: true,
            updated_at: true,
            subject_id: true,
            category_id: true,
            questions: {
              select: {
                content: true,
                type: true,
                image_url: true,
                explanation: true,
                options: {
                  select: {
                    option_id: true,
                    text: true,
                    is_correct: true,
                  },
                },
                pairs: {
                  select: {
                    left: true,
                    right: true,
                  },
                },
              },
            },
          },
        });
      case 'user':
        return this.prisma.user.findMany({
          select: {
            name: true,
            email: true,
            password: true,
            role: true,
          },
        });
      default:
        return [];
    }
  }

  async importFlashcardsJson(file: Express.Multer.File) {
    const json = JSON.parse(file.buffer.toString());
    if (!Array.isArray(json))
      throw new Error('Le fichier doit contenir un tableau de flashcards');
    const created = await this.prisma.flashcard.createMany({ data: json });
    return created;
  }
}
