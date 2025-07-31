import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../auth/guards/roles.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { SubjectService } from './subject.service';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';
import { SubjectEntity, SubjectDeleteResponse } from './entities/subject.entity';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import {
  BadRequestResponse,
  UnauthorizedResponse,
  NotFoundResponse,
  ConflictResponse,
  InternalServerErrorResponse,
} from '../api-message/entities/error.entity';

/**
 * Contrôleur Subject – Gère les endpoints liés aux matières dans QuizzApp.
 *
 * Rôle :
 *   - Créer, récupérer, mettre à jour et supprimer des matières (subjects).
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
@ApiTags('Sujets')
@ApiBearerAuth()
@Throttle({ default: { limit: 10, ttl: 60 } })
@Controller('subjects')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  // Récupérer tous les sujets
  @ApiOperation({ summary: 'Récupérer tous les sujets' })
  @ApiResponse({
    status: 200,
    description: 'La liste des sujets a été récupérée avec succès',
    type: [SubjectEntity],
  })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Get()
  findAll() {
    return this.subjectService.findAll();
  }

  // Récupérer un sujet par son ID
  @ApiOperation({ summary: 'Récupérer un sujet par son ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'ID du sujet',
  })
  @ApiResponse({
    status: 200,
    description: 'Le sujet a été récupéré avec succès',
    type: SubjectEntity,
  })
  @ApiResponse({
    status: 400,
    description: 'ID invalide (doit être un nombre)',
    type: BadRequestResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Sujet non trouvé',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.subjectService.findOne(id);
  }

  // Créer un nouveau sujet
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Créer un nouveau sujet' })
  @ApiBody({ type: CreateSubjectDto })
  @ApiResponse({
    status: 201,
    description: 'Le sujet a été créé avec succès.',
    type: SubjectEntity,
  })
  @ApiResponse({
    status: 400,
    description: 'Requête invalide (champs manquants ou mauvais format)',
    type: BadRequestResponse,
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 403,
    description: 'Accès refusé - droits administrateur requis',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 409,
    description: 'Un sujet avec ce nom existe déjà',
    type: ConflictResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Post()
  @Roles('ADMIN')
  create(@Body() body: CreateSubjectDto) {
    return this.subjectService.create(body);
  }

  // Mettre à jour un sujet
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Mettre à jour un sujet' })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'ID du sujet',
  })
  @ApiBody({ type: UpdateSubjectDto })
  @ApiResponse({
    status: 200,
    description: 'Le sujet a été mis à jour avec succès',
    type: SubjectEntity,
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
    status: 403,
    description: 'Accès refusé - droits administrateur requis',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Sujet non trouvé',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 409,
    description: 'Un sujet avec ce nom existe déjà',
    type: ConflictResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Patch(':id')
  @Roles('ADMIN')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateSubjectDto,
  ) {
    return this.subjectService.update(id, body);
  }

  // Supprimer un sujet
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Supprimer un sujet' })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'ID du sujet',
  })
  @ApiResponse({
    status: 200,
    description: 'Le sujet a été supprimé avec succès',
    type: SubjectDeleteResponse,
  })
  @ApiResponse({
    status: 400,
    description: 'ID invalide (doit être un nombre)',
    type: BadRequestResponse,
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 403,
    description: 'Accès refusé - droits administrateur requis',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Sujet non trouvé',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 409,
    description:
      'Impossible de supprimer ce sujet car il contient des données associées',
    type: ConflictResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Delete(':id')
  @Roles('ADMIN')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.subjectService.delete(id);
  }
}
