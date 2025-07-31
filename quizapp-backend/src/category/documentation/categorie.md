# Dossier `category` – QuizzApp Backend

## Rôle du dossier

Le dossier `category` gère **toute la logique liée aux catégories** dans l’application QuizzApp.  
Il centralise la création, la récupération, la modification et la suppression des catégories utilisées pour organiser les quiz.

---

## Structure du dossier

```
category/
  category.controller.ts         // Contrôleur HTTP pour les endpoints liés aux catégories
  category.service.ts            // Service contenant la logique métier et l'accès à la base de données
  category.module.ts             // Module NestJS pour regrouper le contrôleur et le service
  documentation/
    categorie.md                 // Documentation du module category
  dto/
    create-category.dto.ts       // DTO pour la création d'une catégorie
    update-category.dto.ts       // DTO pour la mise à jour d'une catégorie
  entities/
    category.entity.ts           // Classe représentant le schéma de catégorie pour Swagger
api-message/
  entities/
    error.entity.ts              // Classes représentant les schémas d'erreur pour Swagger (centralisées)
```

---

## Fonctionnalités principales

- **Lister toutes les catégories** (`GET /categories`)
- **Récupérer une catégorie par son ID** (`GET /categories/:id`)
- **Créer une nouvelle catégorie** (`POST /categories`)
- **Mettre à jour une catégorie** (`PATCH /categories/:id`)
- **Supprimer une catégorie** (`DELETE /categories/:id`)

Chaque route est sécurisée par les guards (`JwtAuthGuard`, `RolesGuard`) pour garantir que seules les personnes autorisées peuvent accéder ou modifier les catégories.

---

## Détail des fichiers

- **category.controller.ts**  
  Définit les endpoints HTTP, applique la documentation Swagger et gère la validation des entrées via les DTOs.  
  Utilise les entités pour typer les réponses et les erreurs dans la documentation.

- **category.service.ts**  
  Contient la logique métier : communication avec la base de données (via Prisma), gestion des erreurs (404, 400, 409, 500, etc.), et vérification des entrées.

- **category.module.ts**  
  Regroupe et configure tous les éléments du module pour NestJS.

- **dto/**
  - `create-category.dto.ts` : structure et validation des données pour la création d’une catégorie.
  - `update-category.dto.ts` : structure et validation des données pour la modification d’une catégorie.

- **entities/**
  - `category.entity.ts` : structure de la catégorie retournée à l’API (pour Swagger), ainsi que la structure de la réponse de suppression.

- **api-message/entities/error.entity.ts**
  - Classes standardisées des messages d’erreur pour Swagger (400, 401, 403, 404, 409, 422, 429, 500, etc.), centralisées pour tous les modules.

- **documentation/categorie.md**  
  Ce fichier de documentation.

---

## Résumé

Le dossier `category` encapsule **tout ce qui concerne la gestion des catégories** dans l’application, en suivant les bonnes pratiques NestJS :

- Séparation des responsabilités (contrôleur, service, DTO, entités)
- Validation des entrées
- Documentation Swagger complète
- Gestion centralisée et claire des erreurs (dans `api-message/entities/`)
- Tests unitaires pour garantir la robustesse du module
