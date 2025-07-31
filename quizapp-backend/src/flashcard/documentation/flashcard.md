# Dossier `flashcard` – QuizzApp Backend

## Rôle du dossier

Le dossier `flashcard` gère **toute la logique liée aux cartes d'apprentissage (flashcards)** dans l’application QuizzApp.  
Il centralise la création, la récupération, la modification et la suppression des flashcards associées aux utilisateurs et aux catégories.

---

## Structure du dossier

```
flashcard/
  flashcard.controller.ts         // Contrôleur HTTP pour les endpoints liés aux flashcards
  flashcard.service.ts            // Service contenant la logique métier et l'accès à la base de données
  flashcard.module.ts             // Module NestJS pour regrouper le contrôleur et le service
  flashcard.controller.spec.ts    // Tests unitaires du contrôleur
  flashcard.service.spec.ts       // Tests unitaires du service
  documentation/
    flashcard.md                  // Documentation du module flashcard
  dto/
    create-flashcard.dto.ts       // DTO pour la création d'une flashcard
    update-flashcard.dto.ts       // DTO pour la mise à jour d'une flashcard
  entities/
    flashcard.entity.ts           // Classe représentant le schéma de flashcard pour Swagger
api-message/
  entities/
    error.entity.ts               // Classes représentant les schémas d'erreur pour Swagger (centralisées)
```

---

## Fonctionnalités principales

- **Lister toutes les flashcards** (`GET /flashcards`)
- **Récupérer une flashcard par son ID** (`GET /flashcards/:id`)
- **Créer une nouvelle flashcard** (`POST /flashcards`)
- **Mettre à jour une flashcard** (`PATCH /flashcards/:id`)
- **Supprimer une flashcard** (`DELETE /flashcards/:id`)
- **Récupérer les flashcards d'une catégorie** (`GET /flashcards/category/:id`)
- **Récupérer les flashcards d'un utilisateur** (`GET /flashcards/user/:id`)
- **Mettre à jour la difficulté d'une flashcard** (`PATCH /flashcards/:id/difficulty`)

Chaque route est sécurisée par les guards (`JwtAuthGuard`, `RolesGuard`) pour garantir que seules les personnes autorisées peuvent accéder ou modifier les flashcards.

---

## Détail des fichiers

- **flashcard.controller.ts**  
  Définit les endpoints HTTP, applique la documentation Swagger et gère la validation des entrées via les DTOs.  
  Utilise les entités pour typer les réponses et les erreurs dans la documentation.

- **flashcard.service.ts**  
  Contient la logique métier : communication avec la base de données (via Prisma), gestion des erreurs (404, 400, 409, 500, etc.), et vérification des entrées.

- **flashcard.module.ts**  
  Regroupe et configure tous les éléments du module pour NestJS.

- **dto/**
  - `create-flashcard.dto.ts` : structure et validation des données pour la création d’une flashcard.
  - `update-flashcard.dto.ts` : structure et validation des données pour la modification d’une flashcard.

- **entities/**
  - `flashcard.entity.ts` : structure de la flashcard retournée à l’API (pour Swagger), ainsi que la structure de la réponse de suppression.

- **api-message/entities/error.entity.ts**
  - Classes standardisées des messages d’erreur pour Swagger (400, 401, 403, 404, 409, 422, 429, 500, etc.), centralisées pour tous les modules.

- **flashcard.controller.spec.ts**  
  Tests unitaires pour le contrôleur Flashcard.

- **flashcard.service.spec.ts**  
  Tests unitaires pour le service Flashcard.

- **documentation/flashcard.md**  
  Ce fichier de documentation.

---

## Résumé

Le dossier `flashcard` encapsule **tout ce qui concerne la gestion des cartes d'apprentissage** dans l’application, en suivant les bonnes pratiques NestJS :

- Séparation des responsabilités (contrôleur, service, DTO, entités)
- Validation des entrées
- Documentation Swagger complète
- Gestion centralisée et claire des erreurs (dans `api-message/entities/`)
- Tests unitaires pour garantir la robustesse du module
