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
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';
import { CategoryService } from './category.service';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../auth/guards/roles.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import {
  CategoryDeleteResponse,
  CategoryEntity,
} from './entities/category.entity';
import {
  BadRequestResponse,
  ConflictResponse,
  NotFoundResponse,
  UnauthorizedResponse,
} from '../api-message/entities/error.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

/**
 * Contrôleur Category – Gère les endpoints liés aux catégories dans l'application QuizzApp.
 *
 * Rôle :
 *   - Lister toutes les catégories
 *   - Récupérer une catégorie par son ID
 *   - Récupérer les catégories d'une matière
 *   - Créer, modifier, supprimer une catégorie (ADMIN uniquement)
 *
 * Sécurité :
 *   - Toutes les routes sont protégées par JwtAuthGuard et RolesGuard (authentification JWT et gestion des rôles)
 *   - Les opérations de création, modification et suppression nécessitent le rôle ADMIN (décorateur @Roles)
 *
 * Rate limiting :
 *   - Limite de 10 requêtes par minute par utilisateur (@Throttle)
 *
 * Documentation :
 *   - Toutes les routes sont documentées avec Swagger (@ApiOperation, @ApiResponse, @ApiParam, @ApiBody)
 *   - Les réponses d’erreur utilisent les entités centralisées de error.entity.ts
 */
@ApiTags('Catégories')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Throttle({ default: { limit: 10, ttl: 60 } })
@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  // Récupérer toutes les catégories
  @ApiOperation({ summary: 'Récupérer toutes les catégories' })
  @ApiResponse({
    status: 200,
    description: 'Liste des catégories récupérée avec succès',
    type: [CategoryEntity],
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  // Récupérer une catégorie par son ID
  @ApiOperation({ summary: 'Récupérer une catégorie par son ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'ID de la catégorie',
  })
  @ApiResponse({
    status: 200,
    description: 'Catégorie trouvée avec succès',
    type: CategoryEntity,
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Catégorie non trouvée',
    type: NotFoundResponse,
  })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.findOne(id);
  }

  // Récupérer les catégories d'une matière
  @ApiOperation({ summary: "Récupérer les catégories d'une matière" })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'ID de la matière',
  })
  @ApiResponse({
    status: 200,
    description: 'Liste des catégories de la matière récupérée avec succès',
    type: [CategoryEntity],
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Matière non trouvée',
    type: NotFoundResponse,
  })
  @Get('subject/:id')
  findBySubject(@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.findBySubject(id);
  }

  // Créer une nouvelle catégorie
  @ApiOperation({ summary: 'Créer une nouvelle catégorie' })
  @ApiBody({ type: CreateCategoryDto })
  @ApiResponse({
    status: 201,
    description: 'Catégorie créée avec succès',
    type: CategoryEntity,
  })
  @ApiResponse({
    status: 400,
    description: 'Données invalides',
    type: BadRequestResponse,
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Matière non trouvée',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 409,
    description: 'Conflit - Catégorie déjà existante',
    type: ConflictResponse,
  })
  @Post()
  @Roles('ADMIN')
  create(@Body() body: CreateCategoryDto) {
    return this.categoryService.create(body);
  }

  // Mettre à jour une catégorie
  @ApiOperation({ summary: 'Mettre à jour une catégorie' })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'ID de la catégorie',
  })
  @ApiBody({ type: UpdateCategoryDto })
  @ApiResponse({
    status: 200,
    description: 'Catégorie mise à jour avec succès',
    type: CategoryEntity,
  })
  @ApiResponse({
    status: 400,
    description: 'Données invalides',
    type: BadRequestResponse,
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Catégorie non trouvée',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 409,
    description: 'Conflit - Catégorie déjà existante',
    type: ConflictResponse,
  })
  @Patch(':id')
  @Roles('ADMIN')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateCategoryDto,
  ) {
    return this.categoryService.update(id, body);
  }

  // Supprimer une catégorie
  @ApiOperation({ summary: 'Supprimer une catégorie' })
  @ApiParam({
    name: 'id',
    type: Number,
    required: true,
    description: 'ID de la catégorie',
  })
  @ApiResponse({
    status: 200,
    description: 'Catégorie supprimée avec succès',
    type: CategoryDeleteResponse,
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Catégorie non trouvée',
    type: NotFoundResponse,
  })
  @ApiResponse({
    status: 409,
    description: "Conflit - Catégorie liée à d'autres entités",
    type: ConflictResponse,
  })
  @Delete(':id')
  @Roles('ADMIN')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.delete(id);
  }
}
