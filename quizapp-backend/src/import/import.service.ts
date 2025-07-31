import { Injectable, BadRequestException } from '@nestjs/common';
import {
  PrismaClient,
  Difficulty,
  Role,
  FlashcardDifficulty,
} from '@prisma/client';
import * as path from 'path';
import * as fs from 'fs';
import * as unzipper from 'unzipper';
import { spawnSync, SpawnSyncReturns } from 'child_process';

interface ImportOption {
  text: string;
  is_correct: boolean;
}
interface ImportPair {
  left: string;
  right: string;
}
interface ImportQuestion {
  content: string;
  type: string;
  image_url?: string;
  explanation?: string;
  options?: ImportOption[];
  pairs?: ImportPair[];
}
interface ImportQuiz {
  title: string;
  description?: string;
  difficulty?: string;
  time_limit?: number;
  is_exam_mode?: boolean;
  subject_id: number;
  category_id: number;
  questions?: ImportQuestion[];
}

interface ImportSubject {
  name: string;
  // autres champs si besoin
}

interface ImportCategory {
  name: string;
  subject_id: number;
}

interface ImportFlashcard {
  front: string;
  back: string;
  difficulty?: string;
  category_id: number;
  user_id: number;
}

interface ImportUser {
  email: string;
  password: string;
  name: string;
  role?: string;
}

function cleanQuizImportPayload(quiz: ImportQuiz) {
  return {
    title: quiz.title,
    description: quiz.description,
    difficulty: quiz.difficulty ? (quiz.difficulty as Difficulty) : undefined,
    time_limit: quiz.time_limit,
    is_exam_mode: quiz.is_exam_mode,
    subject_id: quiz.subject_id,
    category_id: quiz.category_id,
    questions: (quiz.questions ?? []).map((q) => ({
      content: q.content,
      type: q.type,
      image_url: q.image_url,
      explanation: q.explanation,
      options: (q.options ?? []).map((opt) => ({
        text: opt.text,
        is_correct: opt.is_correct,
      })),
      pairs: (q.pairs ?? []).map((pair) => ({
        left: pair.left,
        right: pair.right,
      })),
    })),
  };
}

function cleanSubjectImportPayload(subject: ImportSubject) {
  return {
    name: subject.name,
    // autres champs si besoin
  };
}

function cleanCategoryImportPayload(category: ImportCategory) {
  return {
    name: category.name,
    subject_id: category.subject_id,
  };
}

function cleanFlashcardImportPayload(flashcard: ImportFlashcard) {
  return {
    front: flashcard.front,
    back: flashcard.back,
    difficulty: flashcard.difficulty
      ? (flashcard.difficulty as FlashcardDifficulty)
      : undefined,
    category_id: flashcard.category_id,
    user_id: flashcard.user_id,
  };
}

function cleanUserImportPayload(user: ImportUser) {
  return {
    email: user.email,
    password: user.password,
    name: user.name,
    role: user.role ? (user.role as Role) : undefined,
  };
}

@Injectable()
export class ImportService {
  private readonly prisma = new PrismaClient();

  async importDb(file: Express.Multer.File) {
    if (!file) throw new BadRequestException('Aucun fichier reçu');
    const tempPath = path.join(
      process.cwd(),
      'quizapp-database',
      'imported-quizapp.db',
    );
    // Sauvegarde le fichier importé temporairement
    try {
      fs.writeFileSync(tempPath, file.buffer);
    } catch (e) {
      throw new BadRequestException(
        'Impossible d’enregistrer le fichier importé: ' + (e as Error).message,
      );
    }
    // Déconnecte Prisma pour libérer la base
    await this.prisma.$disconnect();
    // Exécute le script PowerShell pour remplacer la base et relancer le backend
    try {
      let ps1 = path.join(process.cwd(), 'update-db.ps1');
      if (!fs.existsSync(ps1)) {
        ps1 = path.join(process.cwd(), '..', 'update-db.ps1');
        if (!fs.existsSync(ps1)) {
          throw new Error(`Script PowerShell introuvable à ${ps1}`);
        }
      }
      const result: SpawnSyncReturns<string> = spawnSync(
        'powershell.exe',
        ['-ExecutionPolicy', 'Bypass', '-File', ps1, tempPath],
        { encoding: 'utf-8' },
      );
      if (result.error) throw result.error;
      if (result.status !== 0)
        throw new Error(
          result.stderr
            ? result.stderr.toString()
            : 'Erreur lors de l’exécution du script PowerShell',
        );
    } catch (e) {
      throw new BadRequestException(
        'Erreur lors du remplacement de la base: ' + (e as Error).message,
      );
    }
    return {
      message: 'Base de données importée, remplacée et backend relancé.',
      fileName: 'quizapp.db',
    };
  }

  async importQuiz(file: Express.Multer.File) {
    if (!file) throw new BadRequestException('Aucun fichier reçu');
    const data: unknown = JSON.parse(file.buffer.toString());
    const quizzes: ImportQuiz[] = Array.isArray(data)
      ? (data as ImportQuiz[])
      : [data as ImportQuiz];
    for (const quiz of quizzes) {
      const cleanQuiz = cleanQuizImportPayload(quiz);
      await this.prisma.quiz.create({
        data: {
          ...cleanQuiz,
          difficulty: cleanQuiz.difficulty ? cleanQuiz.difficulty : undefined,
          questions: {
            create: (cleanQuiz.questions ?? []).map((q) => ({
              content: q.content,
              type: q.type,
              image_url: q.image_url,
              explanation: q.explanation,
              options: {
                create: (q.options ?? []).map((opt) => ({
                  text: opt.text,
                  is_correct: opt.is_correct,
                })),
              },
              pairs: {
                create: (q.pairs ?? []).map((pair) => ({
                  left: pair.left,
                  right: pair.right,
                })),
              },
            })),
          },
        },
      });
    }
    return { message: 'Quiz importés', fileName: file.originalname };
  }

  async importSubject(file: Express.Multer.File) {
    if (!file) throw new BadRequestException('Aucun fichier reçu');
    const data: unknown = JSON.parse(file.buffer.toString());
    const subjects: ImportSubject[] = Array.isArray(data)
      ? (data as ImportSubject[])
      : [data as ImportSubject];
    const cleaned = subjects.map(cleanSubjectImportPayload);
    await this.prisma.subject.createMany({ data: cleaned });
    return { message: 'Sujets importés', fileName: file.originalname };
  }

  async importCategory(file: Express.Multer.File) {
    if (!file) throw new BadRequestException('Aucun fichier reçu');
    const data: unknown = JSON.parse(file.buffer.toString());
    const categories: ImportCategory[] = Array.isArray(data)
      ? (data as ImportCategory[])
      : [data as ImportCategory];
    const cleaned = categories.map(cleanCategoryImportPayload);
    try {
      await this.prisma.category.createMany({ data: cleaned });
      return { message: 'Catégories importées', fileName: file.originalname };
    } catch (e) {
      // Prisma error: renvoie le message détaillé
      throw new BadRequestException(
        (e as Error)?.message || 'Erreur import catégories',
      );
    }
  }

  async importFlashcard(file: Express.Multer.File) {
    if (!file) throw new BadRequestException('Aucun fichier reçu');
    const data: unknown = JSON.parse(file.buffer.toString());
    const flashcards: ImportFlashcard[] = Array.isArray(data)
      ? (data as ImportFlashcard[])
      : [data as ImportFlashcard];
    const cleaned = flashcards.map(cleanFlashcardImportPayload);
    await this.prisma.flashcard.createMany({ data: cleaned });
    return { message: 'Flashcards importées', fileName: file.originalname };
  }

  async importUser(file: Express.Multer.File) {
    if (!file) throw new BadRequestException('Aucun fichier reçu');
    const data: unknown = JSON.parse(file.buffer.toString());
    const users: ImportUser[] = Array.isArray(data)
      ? (data as ImportUser[])
      : [data as ImportUser];
    const cleaned = users.map(cleanUserImportPayload);
    await this.prisma.user.createMany({ data: cleaned });
    return { message: 'Utilisateurs importés', fileName: file.originalname };
  }

  async importQuestionImagesZip(file: Express.Multer.File) {
    if (!file) throw new BadRequestException('Aucun fichier reçu');
    const destDir = path.join(process.cwd(), 'uploads', 'question-images');
    await unzipper.Open.buffer(file.buffer).then((zip) =>
      zip.extract({ path: destDir, concurrency: 5 }),
    );
    return { message: 'Images importées', fileName: file.originalname };
  }
}
