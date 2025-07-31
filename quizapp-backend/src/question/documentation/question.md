# Dossier `question` – QuizzApp Backend

## Rôle du dossier

Le dossier `question` gère **toute la logique liée aux questions de quiz** dans l’application QuizzApp.  
Il centralise la création, la récupération, la modification et la suppression des questions ainsi que l’upload d’images associées.

---

## Structure du dossier

```
question/
  question.controller.ts         // Contrôleur HTTP pour les endpoints liés aux questions
  question.service.ts            // Service contenant la logique métier et l'accès à la base de données
  question.module.ts             // Module NestJS pour regrouper le contrôleur et le service
  documentation/
    README.md                    // Documentation du module question
  dto/
    create-question.dto.ts       // DTO pour la création d'une question
    update-question.dto.ts       // DTO pour la mise à jour d'une question
  entities/
    question.entity.ts           // Classe représentant le schéma de question pour Swagger
    question-delete-response.entity.ts // Entité de suppression
api-message/
  entities/
    error.entity.ts              // Classes représentant les schémas d'erreur pour Swagger (centralisées)
```

---

## Fonctionnalités principales

- **Lister toutes les questions** (`GET /questions`)
- **Récupérer une question par son ID** (`GET /questions/:id`)
- **Créer une nouvelle question** (`POST /questions`)
- **Mettre à jour une question** (`PATCH /questions/:id`)
- **Supprimer une question** (`DELETE /questions/:id`)
- **Uploader une image** (`POST /questions/upload-image`)

Chaque route est sécurisée par les guards (`JwtAuthGuard`, `RolesGuard`) pour garantir que seules les personnes autorisées peuvent accéder ou modifier les questions.

---

## Détail des fichiers

- **question.controller.ts**  
  Définit les endpoints HTTP, applique la documentation Swagger et gère la validation des entrées via les DTOs.  
  Utilise les entités pour typer les réponses et les erreurs dans la documentation.

- **question.service.ts**  
  Contient la logique métier : communication avec la base de données (via Prisma), gestion des erreurs (404, 400, 409, 500, etc.), et vérification des entrées.

- **question.module.ts**  
  Regroupe et configure tous les éléments du module pour NestJS.

- **dto/**
  - `create-question.dto.ts` : structure et validation des données pour la création d’une question.
  - `update-question.dto.ts` : structure et validation des données pour la modification d’une question.

- **entities/**
  - `question.entity.ts` : structure de la question retournée à l’API (pour Swagger), ainsi que la structure de la réponse de suppression.
  - `question-delete-response.entity.ts` : structure de la réponse de suppression.

- **api-message/entities/error.entity.ts**
  - Classes standardisées des messages d’erreur pour Swagger (400, 401, 403, 404, 409, 422, 429, 500, etc.), centralisées pour tous les modules.

- **documentation/README.md**  
  Ce fichier de documentation.

---

## Résumé

Le dossier `question` encapsule **tout ce qui concerne la gestion des questions de quiz** dans l’application, en suivant les bonnes pratiques NestJS :

- Séparation des responsabilités (contrôleur, service, DTO, entités)
- Validation des entrées
- Documentation Swagger complète
- Gestion centralisée et claire des erreurs (dans `api-message/entities/`)
- Tests unitaires pour garantir la robustesse du module
