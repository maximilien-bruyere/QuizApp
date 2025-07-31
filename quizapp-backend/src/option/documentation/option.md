# Dossier `option` – QuizzApp Backend

## Rôle du dossier

Le dossier `option` gère **toute la logique liée aux options de réponse** dans l’application QuizzApp.  
Il centralise la création, la récupération, la modification et la suppression des options associées aux questions de quiz.

---

## Structure du dossier

```
option/
  option.controller.ts         // Contrôleur HTTP pour les endpoints liés aux options
  option.service.ts            // Service contenant la logique métier et l'accès à la base de données
  option.module.ts             // Module NestJS pour regrouper le contrôleur et le service
  documentation/
    option.md                  // Documentation du module option
  dto/
    create-option.dto.ts       // DTO pour la création d'une option
    update-option.dto.ts       // DTO pour la mise à jour d'une option
  entities/
    option.entity.ts           // Classe représentant le schéma d'option pour Swagger
api-message/
  entities/
    error.entity.ts            // Classes représentant les schémas d'erreur pour Swagger (centralisées)
```

---

## Fonctionnalités principales

- **Lister toutes les options** (`GET /options`)
- **Récupérer une option par son ID** (`GET /options/:id`)
- **Créer une nouvelle option** (`POST /options`)
- **Mettre à jour une option** (`PATCH /options/:id`)
- **Supprimer une option** (`DELETE /options/:id`)

Chaque route est sécurisée par les guards (`JwtAuthGuard`, `RolesGuard`) pour garantir que seules les personnes autorisées peuvent accéder ou modifier les options.

---

## Détail des fichiers

- **option.controller.ts**  
  Définit les endpoints HTTP, applique la documentation Swagger et gère la validation des entrées via les DTOs.  
  Utilise les entités pour typer les réponses et les erreurs dans la documentation.

- **option.service.ts**  
  Contient la logique métier : communication avec la base de données (via Prisma), gestion des erreurs (404, 400, 409, 500, etc.), et vérification des entrées.

- **option.module.ts**  
  Regroupe et configure tous les éléments du module pour NestJS.

- **dto/**
  - `create-option.dto.ts` : structure et validation des données pour la création d’une option.
  - `update-option.dto.ts` : structure et validation des données pour la modification d’une option.

- **entities/**
  - `option.entity.ts` : structure de l’option retournée à l’API (pour Swagger), ainsi que la structure de la réponse de suppression.

- **api-message/entities/error.entity.ts**
  - Classes standardisées des messages d’erreur pour Swagger (400, 401, 403, 404, 409, 422, 429, 500, etc.), centralisées pour tous les modules.

- **documentation/option.md**  
  Ce fichier de documentation.

---

## Résumé

Le dossier `option` encapsule **tout ce qui concerne la gestion des options de réponse** dans l’application, en suivant les bonnes pratiques NestJS :

- Séparation des responsabilités (contrôleur, service, DTO, entités)
- Validation des entrées
- Documentation Swagger complète
- Gestion centralisée et claire des erreurs (dans `api-message/entities/`)
- Tests unitaires pour garantir la robustesse du module
