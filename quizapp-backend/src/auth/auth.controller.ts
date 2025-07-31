import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Request,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { PrismaService } from '../prisma/prisma.service';
import { UserEntity } from '../user/entities/user.entity';
import { AuthEntity } from './entities/auth.entity';
import {
  ConflictResponse,
  InternalServerErrorResponse,
  UnauthorizedResponse,
} from '../api-message/entities/error.entity';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

/**
 * Contrôleur Auth – Gère les endpoints d'authentification et d'autorisation.
 *
 * Permet l'inscription, la connexion, la récupération des infos utilisateur connecté,
 * et applique la documentation Swagger sur chaque route.
 */
@ApiTags('Authentification')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private prisma: PrismaService,
  ) {}

  // Enregistrement d'un nouvel utilisateur
  @ApiOperation({ summary: 'Enregistrer un nouvel utilisateur' })
  @ApiBody({ type: RegisterAuthDto })
  @ApiResponse({
    status: 201,
    description: "L'utilisateur a été créé avec succès",
    type: AuthEntity,
  })
  @ApiResponse({
    status: 409,
    description: 'Adresse email déjà utilisée',
    type: ConflictResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erreur interne du serveur',
    type: InternalServerErrorResponse,
  })
  @Post('register')
  register(@Body() body: RegisterAuthDto) {
    return this.authService.register(body);
  }

  // Connexion d'un utilisateur existant
  @ApiOperation({ summary: 'Se connecter avec un utilisateur' })
  @ApiBody({ type: LoginAuthDto })
  @ApiResponse({
    status: 200,
    description: 'Vous vous êtes connecté avec succès',
    type: AuthEntity,
  })
  @ApiResponse({
    status: 401,
    description: 'Email ou mot de passe invalide',
    type: UnauthorizedResponse,
  })
  @Post('login')
  login(@Body() body: LoginAuthDto) {
    return this.authService.login(body);
  }

  // Récupérer les informations de l'utilisateur connecté
  @ApiOperation({
    summary: "Récupérer les informations de l'utilisateur connecté",
  })
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: "Informations de l'utilisateur",
    type: UserEntity,
  })
  @ApiResponse({
    status: 401,
    description: 'Non authentifié',
    type: UnauthorizedResponse,
  })
  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getMe(@Request() req) {
    const userId = req.user.userId;
    const user = await this.prisma.user.findUnique({
      where: { user_id: userId },
      select: {
        user_id: true,
        email: true,
        name: true,
        created_at: true,
      },
    });
    return user;
  }
}
