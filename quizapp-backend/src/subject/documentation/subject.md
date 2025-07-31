# Dossier `subject` – QuizzApp Backend

## Rôle du dossier

Le dossier `subject` gère toute la logique liée aux **matières (subjects)** dans l’application QuizzApp.
Il centralise la création, la récupération, la mise à jour et la suppression des matières.

---

## Structure du dossier

```
subject/
  subject.controller.ts         // Contrôleur HTTP pour les endpoints liés aux matières
  subject.service.ts            // Service contenant la logique métier et l'accès à la base de données
  subject.module.ts             // Module NestJS pour regrouper le contrôleur et le service
  documentation/
    subject.md                  // Documentation du module subject
  dto/
    create-subject.dto.ts       // DTO pour la création d'une matière
    update-subject.dto.ts       // DTO pour la mise à jour d'une matière
  entities/
    subject.entity.ts           // Entité pour Swagger (matière)
    subject-delete-response.entity.ts // Entité de suppression
api-message/
  entities/
    error.entity.ts             // Classes représentant les schémas d'erreur pour Swagger (centralisées)
```

---

## Fonctionnalités principales

- **Lister toutes les matières** (`GET /subjects`)
- **Récupérer une matière par son ID** (`GET /subjects/:id`)
- **Créer une nouvelle matière** (`POST /subjects`)
- **Mettre à jour une matière** (`PATCH /subjects/:id`)
- **Supprimer une matière** (`DELETE /subjects/:id`)

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

- **400** : Données invalides, ID manquant, etc.
- **401** : Non authentifié
- **404** : Matière non trouvée
- **409** : Conflit (matière déjà existante, suppression impossible)
- **500** : Erreur interne du serveur

---

## Tests

- Tests unitaires pour le contrôleur et le service (existence, erreurs, guards, mapping).
- À compléter pour couvrir tous les cas métier et d’erreur.
