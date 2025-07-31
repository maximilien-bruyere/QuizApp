# Dossier `quiz` – QuizzApp Backend

## Rôle du dossier

Le dossier `quiz` gère **toute la logique liée aux quiz** dans l’application QuizzApp.  
Il centralise la création, la récupération, la modification et la suppression des quiz, ainsi que la gestion des questions associées.

---

## Structure du dossier

```
quiz/
  quiz.controller.ts         // Contrôleur HTTP pour les endpoints liés aux quiz
  quiz.service.ts            // Service contenant la logique métier et l'accès à la base de données
  quiz.module.ts             // Module NestJS pour regrouper le contrôleur et le service
  quiz.controller.spec.ts    // Tests unitaires du contrôleur
  quiz.service.spec.ts       // Tests unitaires du service
  documentation/
    quiz.md                  // Documentation du module quiz
  dto/
    create-quiz.dto.ts       // DTO pour la création d'un quiz
    update-quiz.dto.ts       // DTO pour la mise à jour d'un quiz
  entities/
    quiz-delete-response.entity.ts // Entité de suppression
api-message/
  entities/
    error.entity.ts          // Classes représentant les schémas d'erreur pour Swagger (centralisées)
```

---

## Fonctionnalités principales

- **Lister tous les quiz** (`GET /quizzes`)
- **Récupérer un quiz par son ID** (`GET /quizzes/:id`)
- **Créer un nouveau quiz** (`POST /quizzes`)
- **Mettre à jour un quiz** (`PATCH /quizzes/:id`)
- **Supprimer un quiz** (`DELETE /quizzes/:id`)

Chaque route est sécurisée par les guards (`JwtAuthGuard`, `RolesGuard`) pour garantir que seules les personnes autorisées peuvent accéder ou modifier les quiz.

---

## Détail des fichiers

- **quiz.controller.ts**  
  Définit les endpoints HTTP, applique la documentation Swagger et gère la validation des entrées via les DTOs.  
  Utilise les entités pour typer les réponses et les erreurs dans la documentation.

- **quiz.service.ts**  
  Contient la logique métier : communication avec la base de données (via Prisma), gestion des erreurs (404, 400, 409, 500, etc.), et vérification des entrées.

- **quiz.module.ts**  
  Regroupe et configure tous les éléments du module pour NestJS.

- **dto/**
  - `create-quiz.dto.ts` : structure et validation des données pour la création d’un quiz.
  - `update-quiz.dto.ts` : structure et validation des données pour la modification d’un quiz.

- **entities/**
  - `quiz-delete-response.entity.ts` : structure de la réponse de suppression.

- **api-message/entities/error.entity.ts**
  - Classes standardisées des messages d’erreur pour Swagger (400, 401, 403, 404, 409, 422, 429, 500, etc.), centralisées pour tous les modules.

- **quiz.controller.spec.ts**  
  Tests unitaires pour le contrôleur Quiz.

- **quiz.service.spec.ts**  
  Tests unitaires pour le service Quiz.

- **documentation/quiz.md**  
  Ce fichier de documentation.

---

## Résumé

Le dossier `quiz` encapsule **tout ce qui concerne la gestion des quiz** dans l’application, en suivant les bonnes pratiques NestJS :

- Séparation des responsabilités (contrôleur, service, DTO, entités)
- Validation des entrées
- Documentation Swagger complète
- Gestion centralisée et claire des erreurs (dans `api-message/entities/`)
- Tests unitaires pour garantir la robustesse du module
