# Dossier `api-message` – QuizzApp Backend

## Rôle du dossier

Le dossier `api-message` gère **la centralisation et la standardisation des messages d’erreur** pour toute l’API QuizzApp.  
Il fournit des entités réutilisables pour documenter et structurer les réponses d’erreur dans Swagger et dans le code.

---

## Structure du dossier

```
api-message/
  documentation/
    api-message.md            // Documentation du module api-message
  entities/
    error.entity.ts           // Toutes les classes d'entités d'erreur standardisées
```

---

## Fonctionnalités principales

- **Centralisation des entités d’erreur** pour tous les modules backend
- **Standardisation des réponses d’erreur** dans Swagger
- **Réutilisation des classes d’erreur** dans tous les contrôleurs

---

## Détail des fichiers

- **entities/error.entity.ts**  
  Contient :
  - `ErrorResponse` : classe de base pour toutes les erreurs.
  - `BadRequestResponse` (400)
  - `UnauthorizedResponse` (401)
  - `ForbiddenResponse` (403)
  - `NotFoundResponse` (404)
  - `ConflictResponse` (409)
  - `UnprocessableEntityResponse` (422)
  - `TooManyRequestsResponse` (429)
  - `InternalServerErrorResponse` (500)  
    Chaque classe est décorée pour Swagger et fournit un exemple de message d’erreur.

- **documentation/api-message.md**  
  Ce fichier de documentation.

---

## Résumé

Le dossier `api-message` encapsule **tout ce qui concerne la gestion et la documentation des erreurs** dans l’application, en suivant les bonnes pratiques NestJS :

- Centralisation des entités d’erreur pour tous les modules
- Standardisation des réponses d’erreur dans Swagger
- Réutilisation et maintenance facilitée
