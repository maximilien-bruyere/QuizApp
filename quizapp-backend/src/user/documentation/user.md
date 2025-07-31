# Dossier `user` – QuizzApp Backend

## Rôle du dossier

Le dossier `user` gère **toute la logique liée aux utilisateurs** dans l’application QuizzApp. Il centralise la création, la récupération, la modification, la suppression et la gestion des mots de passe des utilisateurs.

---

## Structure du dossier

```ts
user/
  user.controller.ts         // Contrôleur HTTP pour les endpoints liés aux utilisateurs
  user.service.ts            // Service contenant la logique métier et l'accès à la base de données
  user.module.ts             // Module NestJS pour regrouper le contrôleur et le service
  user.controller.spec.ts    // Tests unitaires du contrôleur
  user.service.spec.ts       // Tests unitaires du service
  documentation/
    user.md                  // Documentation du module user
  dto/
    create-user.dto.ts       // DTO pour la création d’un utilisateur
    update-user.dto.ts       // DTO pour la mise à jour d’un utilisateur
    change-password.dto.ts   // DTO pour le changement de mot de passe
  entities/
    user.entity.ts           // Classe représentant le schéma utilisateur pour Swagger
    user-delete-response.entity.ts // Réponse de succès pour la suppression
api-message/
  entities/
    error.entity.ts          // Classes représentant les schémas d'erreur pour Swagger (centralisées)
```

---

## Fonctionnalités principales

- **Récupérer tous les utilisateurs** (`GET /users`)
- **Récupérer un utilisateur par son ID** (`GET /users/:id`)
- **Créer un nouvel utilisateur** (`POST /users`)
- **Mettre à jour un utilisateur** (`PATCH /users/:id`)
- **Supprimer un utilisateur** (`DELETE /users/:id`)
- **Changer le mot de passe d’un utilisateur** (`POST /users/:id/change-password`)

Chaque route est sécurisée par les guards (`JwtAuthGuard`, `RolesGuard`) et le throttling pour garantir que seules les personnes autorisées peuvent accéder ou modifier les utilisateurs.

---

## Détail des fichiers

- **user.controller.ts**  
  Définit les endpoints HTTP, applique la documentation Swagger et gère la validation des entrées via les DTOs.  
  Utilise les entités pour typer les réponses et les erreurs dans la documentation.

- **user.service.ts**  
  Contient la logique métier : communication avec la base de données (via Prisma), gestion des erreurs (404, 400, 409, 500, etc.), vérification des entrées, logging métier.

- **user.module.ts**  
  Regroupe et configure tous les éléments du module pour NestJS.

- **dto/**
  - `create-user.dto.ts` : structure et validation des données pour la création d’un utilisateur.
  - `update-user.dto.ts` : structure et validation des données pour la modification d’un utilisateur.
  - `change-password.dto.ts` : structure et validation des données pour le changement de mot de passe.

- **entities/**
  - `user.entity.ts` : structure de l’utilisateur retourné à l’API (pour Swagger).
  - `user-delete-response.entity.ts` : structure de la réponse de suppression.

- **api-message/entities/error.entity.ts**
  - Classes standardisées des messages d’erreur pour Swagger (400, 401, 403, 404, 409, 422, 429, 500, etc.), centralisées pour tous les modules.

- **user.controller.spec.ts**  
  Tests unitaires pour le contrôleur User.

- **user.service.spec.ts**  
  Tests unitaires pour le service User.

- **documentation/user.md**  
  Ce fichier de documentation.

---

## Résumé

Le dossier `user` encapsule **tout ce qui concerne la gestion des utilisateurs** dans l’application, en suivant les bonnes pratiques NestJS :

- Séparation des responsabilités (contrôleur, service, DTO, entités)
- Validation des entrées
- Documentation Swagger complète
- Gestion centralisée et claire des erreurs (dans `api-message/entities/`)
- Logging métier
- Tests unitaires pour garantir la robustesse du module
