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
} from '@nestjs/common';
import { OptionService } from './option.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Throttle } from '@nestjs/throttler';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import {
  BadRequestResponse,
  UnauthorizedResponse,
  NotFoundResponse,
  ConflictResponse,
  InternalServerErrorResponse,
} from '../api-message/entities/error.entity';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { OptionEntity, OptionDeleteResponse } from './entities/option.entity';

/**
 * Contrôleur Option – Gère les endpoints liés aux options de réponse dans QuizzApp.
 *
 * Rôle :
 *   - Créer, récupérer, mettre à jour et supprimer des options de réponse.
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

@ApiTags('Options')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Throttle({ default: { limit: 10, ttl: 60 } })
@Controller('options')
export class OptionController {
  constructor(private readonly optionService: OptionService) {}

  // Récupérer toutes les options de réponse
  @ApiOperation({ summary: 'Récupérer toutes les options de réponse' })
  @ApiResponse({
    status: 200,
    description: 'Liste des options',
    type: [OptionEntity],
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Get()
  findAll() {
    return this.optionService.findAll();
  }

  // Récupérer une option de réponse par son ID
  @ApiOperation({ summary: 'Récupérer une option par son ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: "ID de l'option",
  })
  @ApiResponse({
    status: 200,
    description: 'Option récupérée',
    type: OptionEntity,
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
    description: 'Option non trouvée',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.optionService.findOne(id);
  }

  // Créer une nouvelle option de réponse
  @ApiOperation({ summary: 'Créer une nouvelle option de réponse' })
  @ApiBody({ type: CreateOptionDto })
  @ApiResponse({ status: 201, description: 'Option créée', type: OptionEntity })
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
    description: 'Question non trouvée',
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
  create(@Body() body: CreateOptionDto) {
    return this.optionService.create(body);
  }

  // Mettre à jour une option de réponse
  @ApiOperation({ summary: 'Mettre à jour une option de réponse' })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: "ID de l'option",
  })
  @ApiBody({ type: UpdateOptionDto })
  @ApiResponse({
    status: 200,
    description: 'Option mise à jour',
    type: OptionEntity,
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
    description: 'Option ou question non trouvée',
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
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateOptionDto) {
    return this.optionService.update(id, body);
  }

  // Supprimer une option de réponse
  @ApiOperation({ summary: 'Supprimer une option de réponse' })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: "ID de l'option",
  })
  @ApiResponse({
    status: 200,
    description: 'Option supprimée',
    type: OptionDeleteResponse,
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
    description: 'Option non trouvée',
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
    return this.optionService.delete(id);
  }
}
