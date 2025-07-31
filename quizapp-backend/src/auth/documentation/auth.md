# Dossier `auth` – QuizzApp Backend

## Rôle du dossier

Le dossier `auth` gère **toute la logique d'authentification et d'autorisation** dans l’application QuizzApp.  
Il centralise la gestion des utilisateurs, la connexion, l’inscription, la génération et la validation des tokens JWT, ainsi que la protection des routes sensibles.

---

## Structure du dossier

```
auth/
  auth.controller.ts            // Contrôleur HTTP pour les endpoints liés à l'authentification
  auth.service.ts               // Service contenant la logique métier et l'accès à la base de données
  auth.module.ts                // Module NestJS pour regrouper le contrôleur et le service
  dto/
    login-auth.dto.ts           // DTO pour la connexion
    register-auth.dto.ts        // DTO pour l'inscription
  entities/
    auth-response.entity.ts     // Classe représentant le schéma de réponse d'authentification (token)
    user.entity.ts              // Classe utilisateur pour Swagger
  guards/
    jwt-auth.guard.ts           // Guard pour protéger les routes avec JWT
    roles.guard.ts              // Guard pour la gestion des rôles
  strategies/
    jwt.strategy.ts             // Stratégie JWT pour Passport
  decorators/
    roles.decorator.ts          // Décorateur pour les rôles
  documentation/
    auth.md                     // Documentation du module auth
api-message/
  entities/
    error.entity.ts             // Classes représentant les schémas d'erreur pour Swagger (centralisées)
```

---

## Fonctionnalités principales

- **Inscription d’un nouvel utilisateur** (`POST /auth/register`)
- **Connexion d’un utilisateur** (`POST /auth/login`)
- **Génération et validation de tokens JWT**
- **Récupération des informations de l’utilisateur connecté** (`GET /auth/me`)
- **Protection des routes via JWT** (`JwtAuthGuard`)
- **Gestion des rôles et autorisations** (`RolesGuard`, `@Roles()`)

Chaque route sensible est sécurisée par les guards (`JwtAuthGuard`, `RolesGuard`) pour garantir que seules les personnes autorisées peuvent accéder ou modifier les ressources.

---

## Détail des fichiers

- **auth.controller.ts**  
  Définit les endpoints HTTP, applique la documentation Swagger et gère la validation des entrées via les DTOs.  
  Utilise les entités pour typer les réponses et les erreurs dans la documentation.

- **auth.service.ts**  
  Contient la logique métier : création d’utilisateur, vérification du mot de passe, génération du token JWT, etc.

- **auth.module.ts**  
  Regroupe et configure tous les éléments du module pour NestJS.

- **dto/**
  - `login-auth.dto.ts` : structure et validation des données pour la connexion.
  - `register-auth.dto.ts` : structure et validation des données pour l’inscription.

- **entities/**
  - `auth-response.entity.ts` : structure de la réponse contenant le token JWT.
  - `user.entity.ts` : structure de l’utilisateur retourné par l’API.

- **guards/**
  - `jwt-auth.guard.ts` : protège les routes nécessitant une authentification.
  - `roles.guard.ts` : protège les routes selon le rôle de l’utilisateur.

- **strategies/**
  - `jwt.strategy.ts` : stratégie Passport pour la validation des tokens JWT.

- **decorators/**
  - `roles.decorator.ts` : décorateur personnalisé pour appliquer des rôles sur les routes.

- **api-message/entities/error.entity.ts**
  - Classes standardisées des messages d’erreur pour Swagger (400, 401, 403, 404, 409, 422, 429, 500, etc.), centralisées pour tous les modules.

- **documentation/auth.md**  
  Ce fichier de documentation.

---

## Résumé

Le dossier `auth` encapsule **tout ce qui concerne la gestion de l’authentification et de la sécurité** dans l’application, en suivant les bonnes pratiques NestJS :

- Séparation des responsabilités (contrôleur, service, DTO, entités)
- Validation des entrées
- Documentation Swagger complète
- Gestion centralisée et claire des erreurs (dans `api-message/entities/`)
- Tests unitaires pour garantir la robustesse du module
