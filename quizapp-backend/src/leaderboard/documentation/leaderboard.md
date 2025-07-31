# Dossier `leaderboard` – QuizzApp Backend

## Rôle du dossier

Le dossier `leaderboard` gère **toute la logique liée au classement et aux statistiques** dans l’application QuizzApp.  
Il centralise la récupération du classement général, par matière, des statistiques utilisateur et des meilleurs scores récents.

---

## Structure du dossier

```
leaderboard/
  leaderboard.controller.ts         // Contrôleur HTTP pour les endpoints liés au classement
  leaderboard.service.ts            // Service contenant la logique métier et l'accès à la base de données
  leaderboard.module.ts             // Module NestJS pour regrouper le contrôleur et le service
  documentation/
    leaderboard.md                  // Documentation du module leaderboard
  entities/
    leaderboard.entity.ts           // Classe représentant le schéma de leaderboard pour Swagger
api-message/
  entities/
    error.entity.ts                 // Classes représentant les schémas d'erreur pour Swagger (centralisées)
```

---

## Fonctionnalités principales

- **Classement général** (`GET /leaderboard/general`)
- **Classement par matière** (`GET /leaderboard/subject/:subjectId`)
- **Statistiques utilisateur** (`GET /leaderboard/user/:userId`)
- **Meilleurs scores récents** (`GET /leaderboard/recent`)

Chaque route est sécurisée par les guards (`JwtAuthGuard`, `RolesGuard`) pour garantir que seules les personnes autorisées peuvent accéder ou modifier les classements.

---

## Détail des fichiers

- **leaderboard.controller.ts**  
  Définit les endpoints HTTP, applique la documentation Swagger et gère la validation des entrées via les DTOs.  
  Utilise les entités pour typer les réponses et les erreurs dans la documentation.

- **leaderboard.service.ts**  
  Contient la logique métier : communication avec la base de données (via Prisma), gestion des erreurs (404, 400, 409, 500, etc.), et vérification des entrées.

- **leaderboard.module.ts**  
  Regroupe et configure tous les éléments du module pour NestJS.

- **entities/**
  - `leaderboard.entity.ts` : structure du leaderboard retourné à l’API (pour Swagger).

- **api-message/entities/error.entity.ts**
  - Classes standardisées des messages d’erreur pour Swagger (400, 401, 403, 404, 409, 422, 429, 500, etc.), centralisées pour tous les modules.

- **documentation/leaderboard.md**  
  Ce fichier de documentation.

---

## Résumé

Le dossier `leaderboard` encapsule **tout ce qui concerne la gestion du classement et des statistiques** dans l’application, en suivant les bonnes pratiques NestJS :

- Séparation des responsabilités (contrôleur, service, DTO, entités)
- Validation des entrées
- Documentation Swagger complète
- Gestion centralisée et claire des erreurs (dans `api-message/entities/`)
- Tests unitaires pour garantir la robustesse du module
