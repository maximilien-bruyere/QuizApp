import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class DatabaseService implements OnModuleDestroy {
  private prisma: PrismaClient;

  constructor() {
    // Log DATABASE_URL et chemin résolu au démarrage
    const errorLogPath = path.join(process.cwd(), 'backend-error.log');
    const dbUrl = process.env.DATABASE_URL;
    fs.appendFileSync(errorLogPath, `DATABASE_URL = ${dbUrl}\n`);
    if (dbUrl && dbUrl.startsWith('file:')) {
      const resolved = path.resolve(process.cwd(), dbUrl.replace('file:', '').replace(/"/g, ''));
      fs.appendFileSync(errorLogPath, `Resolved DB path = ${resolved}\n`);
    }
    this.prisma = new PrismaClient();
  }

  getClient(): PrismaClient {
    return this.prisma;
  }

  async onModuleDestroy() {
    await this.prisma.$disconnect();
  }

  async importDatabase(newDbPath: string): Promise<void> {
    // Chemin explicite pour la base de données (toujours le même emplacement)
    const currentDbPath = path.join(
      process.cwd(),
      'resources',
      'quizapp-backend',
      'quizapp-database',
      'quizapp.db'
    );

    // 1. Fermer la connexion Prisma
    await this.prisma.$disconnect();

    // Log des chemins utilisés dans un fichier backend-error.log
    const errorLogPath = path.join(process.cwd(), 'backend-error.log');
    const logMsg = `Import DB: from ${newDbPath} to ${currentDbPath}\n`;
    fs.appendFileSync(errorLogPath, logMsg);

    // 2. Remplacer le fichier DB
    fs.mkdirSync(path.dirname(currentDbPath), { recursive: true });
    fs.copyFileSync(newDbPath, currentDbPath);

    // 3. Recréer un nouveau client Prisma
    this.prisma = new PrismaClient();
  }
}
