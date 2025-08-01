# QuizApp

QuizApp est une application complète de gestion de quiz, conçue pour la création, l'administration et la participation à des quiz interactifs. Elle s'appuie sur une architecture moderne avec un backend NestJS/Prisma, un frontend React/Electron, et une gestion robuste des données. Je le dis ici et je le redirai en bas, cette application a été crée par moi et les intelligences artificielles donc c'est normal que vous voyez certaines parties du code avec commentaires et sans commentaire. Elles ont été utilisées en grosse partie pour m'expliquer les notions que je n'avais pas encore en développement (création d'un backend complet, utilisation de prisma, ...). Beaucoup de ces technologies étaient inconnus, au départ, pour moi. Ne soyez donc pas surpris par ça 😊

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
- ...
  
## Structure du projet

```
quizapp/
├── main.js
├── package.json
├── preload.js
├── README.md
├── tsconfig.json
├── quizapp-backend/            # Backend NestJS/Prisma
├── quizapp-frontend/           # Frontend React/Electron
├── quizapp-diagram/            # Diagrammes et documentation DB
├── quizapp-logo/               # Logos
```

## Technologies utilisées
- **Intelligences articifielles** : Copilot, Claude Sonnet 4, ChatGPT 
- **Frontend** : React, Vite, TypeScript, Electron
- **Backend** : NestJS, Prisma, TypeScript, Multer (upload)
- **Base de données** : SQLite (dev), Prisma ORM
- **Autres** : ESLint, Prettier, Jest, DBML

## Installation

Vous pouvez l'installer en appuyant [ici](https://github.com/maximilien-bruyere/QuizApp/releases/tag/latest)

## Auteurs

[Bruyère Maximilien](https://github.com/maximilien-bruyere) - étudiant en informatique

## Licence

Ce projet est sous licence [<ins>**GNU General Public License V3.0**</ins>](https://github.com/maximilien-bruyere/QuizApp?tab=GPL-3.0-1-ov-file)
