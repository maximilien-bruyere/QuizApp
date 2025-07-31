import { SetMetadata } from '@nestjs/common';

/**
 * Décorateur personnalisé pour appliquer des rôles sur les routes protégées.
 *
 * Utilisé avec le guard RolesGuard pour restreindre l'accès à certaines routes selon le rôle utilisateur.
 */
export const ROLES_KEY = 'roles';
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
