# QuizApp

QuizApp est une application complète de gestion de quiz, conçue pour la création, l'administration et la participation à des quiz interactifs. Elle s'appuie sur une architecture moderne avec un backend NestJS/Prisma, un frontend React/Electron, et une gestion robuste des données.

> [!IMPORTANT]
> Cette application est <ins>uniquement compatible</ins> avec Windows pour l'instant.

## Fonctionnalités principales
- Création d'utilisateurs
- Création de sujets et de catégories
- Création de flashcards
- Création de quiz
- Importation/Exportation des données
- Changement de langues
- Classement pour les résultats des quiz
  
## Structure du projet

```
quizapp/
├── main.js
├── package.json
├── preload.js
├── README.md
├── tsconfig.json
├── quizapp-backend/            # Backend NestJS/Prisma
├── quizapp-diagram/            # Diagrammes et documentation DB
├── quizapp-frontend/           # Frontend React/Electron
├── quizapp-installations/      # Scripts d'installation
├── quizapp-logo/               # Logos
```

## Technologies utilisées
- **Intelligences articifielles** : Apprentissage des différentes notions ci-dessous
- **Frontend** : React, Vite, TypeScript, Electron
- **Backend** : NestJS, Prisma, TypeScript, Multer (upload)
- **Base de données** : SQLite (dev), Prisma ORM
- **Autres** : ESLint, Prettier, Jest, DBML

## Installation

Vous pouvez l'installer en appuyant [ici](https://github.com/maximilien-bruyere/QuizApp/releases/tag/latest)

## Auteurs

- [Bruyère Maximilien](https://github.com/maximilien-bruyere)

## Licence

Ce projet est sous licence [<ins>**GNU General Public License V3.0**</ins>](https://github.com/maximilien-bruyere/QuizApp?tab=GPL-3.0-1-ov-file)
