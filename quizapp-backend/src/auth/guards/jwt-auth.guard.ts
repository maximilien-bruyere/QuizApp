import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * Guard JWT – Protège les routes nécessitant une authentification par token JWT.
 *
 * Utilisé pour valider la présence et la validité du token JWT dans les requêtes entrantes.
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
