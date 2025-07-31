import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { Request, Response, NextFunction } from 'express';
import * as bodyParser from 'body-parser';
import * as express from 'express';

import { join } from 'path';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use((req: Request, res: Response, next: NextFunction) => {
    next();
  });

  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

  app.enableCors({
    origin: 'http://localhost:5173',
    credentials: true,
  });

  try {
    app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));
  } catch (err) {
    // Log l'erreur détaillée si __dirname n'est pas défini
    // eslint-disable-next-line no-console
    const error = err as Error;
    console.error('[BACKEND ERROR] /uploads static path:', error, error?.stack);
    throw err;
  }

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('QuizzApp API')
    .setDescription("Bienvenue sur la documentation de l'API QuizzApp Inc.")
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap().catch(console.error);
