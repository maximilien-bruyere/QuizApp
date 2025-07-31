# Dossier `answer` – QuizzApp Backend

## Rôle du dossier

Le dossier `answer` gère **toute la logique liée aux réponses des utilisateurs** dans l’application QuizzApp.  
Il centralise la création, la récupération, la modification et la suppression des réponses associées aux questions des quiz.

---

## Structure du dossier

```
answer/
  answer.controller.ts         // Contrôleur HTTP pour les endpoints liés aux réponses
  answer.service.ts            // Service contenant la logique métier et l'accès à la base de données
  answer.module.ts             // Module NestJS pour regrouper le contrôleur et le service
  answer.controller.spec.ts    // Tests unitaires du contrôleur
  answer.service.spec.ts       // Tests unitaires du service
  documentation/
    answer.md                  // Documentation du module answer
  dto/
    create-answer.dto.ts       // DTO pour la création d'une réponse
    update-answer.dto.ts       // DTO pour la mise à jour d'une réponse
  entities/
    answer.entity.ts           // Classe représentant le schéma de réponse pour Swagger
api-message/
  entities/
    error.entity.ts            // Classes représentant les schémas d'erreur pour Swagger (centralisées)
```

---

## Fonctionnalités principales

- **Récupérer toutes les réponses** (`GET /answers`)
- **Récupérer une réponse par son ID** (`GET /answers/:id`)
- **Créer une nouvelle réponse** (`POST /answers`)
- **Mettre à jour une réponse** (`PATCH /answers/:id`)
- **Supprimer une réponse** (`DELETE /answers/:id`)

Chaque route est sécurisée par les guards (`JwtAuthGuard`, `RolesGuard`) pour garantir que seules les personnes autorisées peuvent accéder ou modifier les réponses.

---

## Détail des fichiers

- **answer.controller.ts**  
  Définit les endpoints HTTP, applique la documentation Swagger et gère la validation des entrées via les DTOs.  
  Utilise les entités pour typer les réponses et les erreurs dans la documentation.

- **answer.service.ts**  
  Contient la logique métier : communication avec la base de données (via Prisma), gestion des erreurs (404, 400, 409, 500, etc.), et vérification des entrées.

- **answer.module.ts**  
  Regroupe et configure tous les éléments du module pour NestJS.

- **dto/**
  - `create-answer.dto.ts` : structure et validation des données pour la création d’une réponse.
  - `update-answer.dto.ts` : structure et validation des données pour la modification d’une réponse.

- **entities/**
  - `answer.entity.ts` : structure de la réponse retournée à l’API (pour Swagger), ainsi que la structure de la réponse de suppression.

- **api-message/entities/error.entity.ts**
  - Classes standardisées des messages d’erreur pour Swagger (400, 401, 403, 404, 409, 422, 429, 500, etc.), centralisées pour tous les modules.

- **answer.controller.spec.ts**  
  Tests unitaires pour le contrôleur Answer.

- **answer.service.spec.ts**  
  Tests unitaires pour le service Answer.

- **documentation/answer.md**  
  Ce fichier de documentation.

---

## Résumé

Le dossier `answer` encapsule **tout ce qui concerne la gestion des réponses** dans l’application, en suivant les bonnes pratiques NestJS :

- Séparation des responsabilités (contrôleur, service, DTO, entités)
- Validation des entrées
- Documentation Swagger complète
- Gestion centralisée et claire des erreurs (dans `api-message/entities/`)
- Tests unitaires pour garantir la robustesse du module
