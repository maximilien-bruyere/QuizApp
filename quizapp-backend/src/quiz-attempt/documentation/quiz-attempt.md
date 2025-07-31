# Dossier `quiz-attempt` – QuizzApp Backend

## Rôle du dossier

Le dossier `quiz-attempt` gère toute la logique liée aux **tentatives de quiz** dans l’application QuizzApp.
Il centralise la création, la récupération, la mise à jour, la finalisation et la suppression des tentatives de quiz.

---

## Structure du dossier

```
quiz-attempt/
  quiz-attempt.controller.ts         // Contrôleur HTTP pour les endpoints liés aux tentatives
  quiz-attempt.service.ts            // Service contenant la logique métier et l'accès à la base de données
  quiz-attempt.module.ts             // Module NestJS pour regrouper le contrôleur et le service
  documentation/
    quiz-attempt.md                  // Documentation du module quiz-attempt
  dto/
    create-quiz-attempt.dto.ts       // DTO pour la création d'une tentative
    update-quiz-attempt.dto.ts       // DTO pour la mise à jour du score
    complete-quiz-attempt.dto.ts     // DTO pour la finalisation
  entities/
    quiz-attempt.entity.ts           // Entités pour Swagger (tentative, user, quiz, delete response)
api-message/
  entities/
    error.entity.ts                  // Classes représentant les schémas d'erreur pour Swagger (centralisées)
```

---

## Fonctionnalités principales

- **Lister toutes les tentatives** (`GET /quiz-attempt`)
- **Récupérer une tentative par son ID** (`GET /quiz-attempt/:id`)
- **Créer une nouvelle tentative** (`POST /quiz-attempt`)
- **Mettre à jour le score** (`PATCH /quiz-attempt/:id`)
- **Finaliser une tentative** (`PATCH /quiz-attempt/:id/complete`)
- **Supprimer une tentative** (`DELETE /quiz-attempt/:id`)

---

## Sécurité & bonnes pratiques

- Toutes les routes sont protégées par `JwtAuthGuard` et `RolesGuard`.
- Limite de 10 requêtes/minute/utilisateur (`@Throttle`).
- Les erreurs sont centralisées via `error.entity.ts` et documentées Swagger.
- Les entités de réponse sont centralisées dans `entities/` et utilisées dans les contrôleurs.
- Logger métier sur chaque action du service.
- Gestion rigoureuse des erreurs Prisma et NestJS.

---

## Gestion d’erreurs

- **400** : Données invalides, score hors bornes, etc.
- **401** : Non authentifié
- **404** : Tentative, utilisateur ou quiz non trouvé
- **409** : Conflit (tentative déjà existante, suppression impossible)
- **500** : Erreur interne du serveur

---

## Tests

- Tests unitaires pour le contrôleur et le service (existence, erreurs, guards, mapping).
- À compléter pour couvrir tous les cas métier et d’erreur.
