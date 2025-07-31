import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { QuestionService } from './question.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiConsumes,
} from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';
import {
  BadRequestResponse,
  UnauthorizedResponse,
  NotFoundResponse,
  ConflictResponse,
  InternalServerErrorResponse,
} from '../api-message/entities/error.entity';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import {
  QuestionEntity,
  QuestionDeleteResponse,
} from './entities/question.entity';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Réponse pour l'upload d'image de question (Swagger).
 * Centralisée ici pour éviter la duplication, mais pas une entité métier.
 */
export class ImageUploadResponse {
  @ApiProperty({ example: '/uploads/question-images/1672834567123-456789.png' })
  imageUrl: string;
}

/**
 * Contrôleur Question – Gère les endpoints liés aux questions dans QuizzApp.
 *
 * Rôle :
 *   - Créer, récupérer, mettre à jour et supprimer des questions.
 *
 * Sécurité :
 *   - Toutes les routes sont protégées par JwtAuthGuard et RolesGuard (authentification JWT et gestion des rôles).
 *   - Les opérations de création, modification et suppression nécessitent le rôle ADMIN.
 *
 * Rate limiting :
 *   - Limite de 10 requêtes par minute par utilisateur (@Throttle).
 *
 * Documentation :
 *   - Toutes les routes sont documentées avec Swagger (@ApiOperation, @ApiResponse, @ApiParam, @ApiBody).
 *   - Les réponses d’erreur utilisent les entités centralisées de error.entity.ts.
 */
@ApiTags('Questions')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Throttle({ default: { limit: 10, ttl: 60 } })
@Controller('questions')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  // Récupérer toutes les questions avec leurs détails
  @ApiOperation({
    summary: 'Récupérer toutes les questions avec leurs détails',
  })
  @ApiResponse({
    status: 200,
    description: 'La liste des questions a été récupérée avec succès',
    type: [QuestionEntity],
  })
  @ApiResponse({
    status: 401,
    description: "Token d'authentification manquant ou invalide",
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 403,
    description: 'Accès refusé - droits administrateur requis',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Get()
  findAll() {
    return this.questionService.findAll();
  }

  // Récupérer une question par son ID avec tous ses détails
  @ApiOperation({
    summary: 'Récupérer une question par son ID avec tous ses détails',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'ID de la question',
  })
  @ApiResponse({
    status: 200,
    description: 'La question a été récupérée avec succès',
    type: QuestionEntity,
  })
  @ApiResponse({
    status: 400,
    description: 'ID invalide (doit être un nombre)',
    type: BadRequestResponse,
  })
  @ApiResponse({
    status: 401,
    description: "Token d'authentification manquant ou invalide",
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 403,
    description: 'Accès refusé - droits administrateur requis',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Question non trouvée',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.questionService.findOne(id);
  }

  // Créer une nouvelle question avec ses options/pairs
  @ApiOperation({
    summary: 'Créer une nouvelle question avec ses options/pairs',
  })
  @ApiBody({ type: CreateQuestionDto })
  @ApiResponse({
    status: 201,
    description: 'Question créée',
    type: QuestionEntity,
  })
  @ApiResponse({
    status: 400,
    description: 'Requête invalide',
    type: BadRequestResponse,
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Quiz non trouvé',
    type: NotFoundResponse,
  })
  @ApiResponse({ status: 409, description: 'Conflit', type: ConflictResponse })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Post()
  @Roles('ADMIN')
  create(@Body() body: CreateQuestionDto) {
    return this.questionService.create(body);
  }

  // Uploader une image pour une question
  @ApiOperation({ summary: 'Uploader une image pour une question' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        image: {
          type: 'string',
          format: 'binary',
          description: 'Image à uploader (JPG, PNG, GIF - max 5MB)',
        },
      },
      required: ['image'],
    },
  })
  @ApiResponse({
    status: 200,
    description: "L'image a été uploadée avec succès",
    type: ImageUploadResponse,
  })
  @ApiResponse({
    status: 400,
    description: 'Fichier invalide ou trop volumineux',
    type: BadRequestResponse,
  })
  @ApiResponse({
    status: 401,
    description: "Token d'authentification manquant ou invalide",
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 403,
    description: 'Accès refusé - droits administrateur requis',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Post('upload-image')
  @Roles('ADMIN')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads/question-images',
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, uniqueSuffix + extname(file.originalname));
        },
      }),
      fileFilter: (req, file, cb) => {
        if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
          cb(null, true);
        } else {
          cb(
            new Error('Seuls les fichiers JPG, PNG et GIF sont autorisés'),
            false,
          );
        }
      },
      limits: {
        fileSize: 5 * 1024 * 1024, // 5MB
      },
    }),
  )
  uploadQuestionImage(@UploadedFile() image: Express.Multer.File) {
    return {
      imageUrl: `/uploads/question-images/${image.filename}`,
    };
  }

  // Mettre à jour une question
  @ApiOperation({ summary: 'Mettre à jour une question' })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'ID de la question',
  })
  @ApiBody({ type: UpdateQuestionDto })
  @ApiResponse({
    status: 200,
    description: 'Question mise à jour',
    type: QuestionEntity,
  })
  @ApiResponse({
    status: 400,
    description: 'Requête invalide ou ID invalide',
    type: BadRequestResponse,
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Question non trouvée',
    type: NotFoundResponse,
  })
  @ApiResponse({ status: 409, description: 'Conflit', type: ConflictResponse })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Patch(':id')
  @Roles('ADMIN')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateQuestionDto,
  ) {
    return this.questionService.update(id, body);
  }

  // Supprimer une question et toutes ses données associées
  @ApiOperation({
    summary: 'Supprimer une question et toutes ses données associées',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'ID de la question',
  })
  @ApiResponse({
    status: 200,
    description: 'Question supprimée',
    type: QuestionDeleteResponse,
  })
  @ApiResponse({
    status: 400,
    description: 'ID invalide',
    type: BadRequestResponse,
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Question non trouvée',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Delete(':id')
  @Roles('ADMIN')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.questionService.delete(id);
  }
}
