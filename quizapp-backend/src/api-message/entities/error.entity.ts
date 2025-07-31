import { ApiProperty } from '@nestjs/swagger';

/**
 * Entité de base pour la structure standardisée des messages d'erreur de l'API.
 */
export class ErrorResponse {
  @ApiProperty({ example: 400 })
  statusCode: number;

  @ApiProperty({ example: "Message d'erreur" })
  message: string;

  @ApiProperty({ example: 'Bad Request', required: false })
  error?: string;
}

/**
 * Erreur 400 – Requête invalide.
 */
export class BadRequestResponse extends ErrorResponse {
  @ApiProperty({ example: 400 })
  statusCode: number = 400;

  @ApiProperty({ example: 'Les données fournies sont invalides' })
  message: string = 'Les données fournies sont invalides';
}

/**
 * Erreur 401 – Non authentifié.
 */
export class UnauthorizedResponse extends ErrorResponse {
  @ApiProperty({ example: 401 })
  statusCode: number = 401;

  @ApiProperty({ example: 'Authentification requise' })
  message: string = 'Authentification requise';
}

/**
 * Erreur 403 – Accès refusé.
 */
export class ForbiddenResponse extends ErrorResponse {
  @ApiProperty({ example: 403 })
  statusCode: number = 403;

  @ApiProperty({ example: 'Accès refusé' })
  message: string = 'Accès refusé';
}

/**
 * Erreur 404 – Ressource non trouvée.
 */
export class NotFoundResponse extends ErrorResponse {
  @ApiProperty({ example: 404 })
  statusCode: number = 404;

  @ApiProperty({ example: 'Ressource non trouvée' })
  message: string = 'Ressource non trouvée';
}

/**
 * Erreur 409 – Conflit.
 */
export class ConflictResponse extends ErrorResponse {
  @ApiProperty({ example: 409 })
  statusCode: number = 409;

  @ApiProperty({ example: 'Conflit de ressource' })
  message: string = 'Conflit de ressource';
}

/**
 * Erreur 422 – Entité non traitable.
 */
export class UnprocessableEntityResponse extends ErrorResponse {
  @ApiProperty({ example: 422 })
  statusCode: number = 422;

  @ApiProperty({ example: 'Entité non traitable' })
  message: string = 'Entité non traitable';
}

/**
 * Erreur 429 – Trop de requêtes.
 */
export class TooManyRequestsResponse extends ErrorResponse {
  @ApiProperty({ example: 429 })
  statusCode: number = 429;

  @ApiProperty({ example: 'Trop de requêtes, veuillez réessayer plus tard' })
  message: string = 'Trop de requêtes, veuillez réessayer plus tard';
}

/**
 * Erreur 500 – Erreur interne du serveur.
 */
export class InternalServerErrorResponse extends ErrorResponse {
  @ApiProperty({ example: 500 })
  statusCode: number = 500;

  @ApiProperty({ example: 'Erreur interne du serveur' })
  message: string = 'Erreur interne du serveur';
}
