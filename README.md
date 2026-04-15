# Portfolio personnel en Next.js

## Présentation du projet

Ce projet est un portfolio personnel développé avec **Next.js**.  
Il a été conçu dans le cadre du **projet de conception de portfolio**.  

L’objectif du projet est de créer une application web moderne, responsive et sécurisée permettant de :

- présenter mon profil
- afficher mes compétences
- présenter mes projets
- permettre à un utilisateur de s’inscrire et de se connecter
- afficher et gérer des témoignages
- protéger les pages privées
- utiliser un backend avec **Next API**
- utiliser **Redux Toolkit** pour la gestion d’état
- utiliser **Axios** pour les communications entre le frontend et le backend

Ce portfolio peut servir comme preuve de compétences lors d’une recherche d’emploi ou pour la présentation de mes réalisations.

---

## Objectifs du projet

Ce projet respecte les exigences suivantes :

- page d’accueil avec photo, présentation et compétences
- entête avec navigation entre les pages
- pied de page avec les liens utiles comme GitHub et LinkedIn
- au minimum 2 projets et au maximum 3
- page de détail pour chaque projet
- récupération des projets depuis le backend via Next API
- page d’inscription 
- page de connexion ( login/ register avec JWT)
- gestion des témoignages
- page d’affichage des témoignages
- page d’ajout et de modification d’un témoignage ( CRUD)
- protection des pages privées
- utilisation de Redux Toolkit
- utilisation de Axios
- validation des formulaires avec messages d’erreur en rouge
- Interface responsive et professionnelle

---

## Technologies utilisées

### Frontend
- Next.js
- React
- Tailwind CSS
- Redux Toolkit
- React Redux
- Axios

### Backend
- Next.js API Routes
- Node.js
- Prisma

### Base de données
- SQLite
- Prisma ORM

### Authentification
- JSON Web Token (JWT)
- Cookies
- bcryptjs

### Outils de développement
- Visual Studio Code
- Git
- GitHub

---

## Fonctionnalités principales

### 1. Page d’accueil
La page d’accueil contient :
- une photo de profil
- une brève présentation
- la liste de mes compétences
- une navigation vers les autres sections du portfolio

### 2. Navigation
Un **header** permet d’accéder aux différentes pages :
- Accueil
- Projets
- Témoignages
- Ajouter un témoignage
- Login
- Inscription

Un **footer** contient :
- GitHub
- LinkedIn
- Email

### 3. Gestion des projets
L’application contient entre 2 et 3 projets.  
Chaque projet possède :
- un titre
- une description
- une liste de technologies utilisées
- éventuellement une image
- un lien GitHub
- un lien de démonstration

Les projets sont récupérés via le backend avec **Next API**.

### 4. Authentification
L’application permet :
- de créer un compte
- de se connecter
- de se déconnecter
- de vérifier si l’utilisateur est authentifié

Les mots de passe sont chiffrés avec **bcryptjs**.

### 5. Gestion des témoignages
Les visiteurs authentifiés peuvent :
- consulter la liste des témoignages
- ajouter un témoignage
- modifier un témoignage

### 6. Protection des routes
Toutes les pages sont protégées sauf :
- `/login`
- `/register`

Seul un utilisateur connecté peut accéder aux autres pages.

### 7. Validation des formulaires
Tous les formulaires comportent une validation avec affichage de messages d’erreur clairs en rouge pour l’utilisateur.

---
### 8. Quelques Captures
<img width="808" height="496" alt="image" src="https://github.com/user-attachments/assets/553178ae-4529-4666-b17d-7491dfb6c5b4" />
<img width="810" height="491" alt="image" src="https://github.com/user-attachments/assets/7d87a049-b2ce-4151-9561-2c2ea4d7e744" />
<img width="815" height="488" alt="image" src="https://github.com/user-attachments/assets/52bf2872-c0e1-4998-adb9-bc25cf8e12b6" />
<img width="806" height="491" alt="image" src="https://github.com/user-attachments/assets/90f8c5f8-80b2-40b0-b7f1-9dc460579dbb" />
<img width="819" height="496" alt="image" src="https://github.com/user-attachments/assets/e2b180ec-ee73-46c7-9b09-c3e512619135" />
<img width="809" height="502" alt="image" src="https://github.com/user-attachments/assets/21939a56-26a2-4131-a2b0-fa0af932184a" />


## Structure du projet

```bash
portfolio-next/
├── prisma/
│   └── schema.prisma
├── public/
│   └── images/
│       └── profile.jpg
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   ├── login/
│   │   │   │   │   └── route.js
│   │   │   │   ├── logout/
│   │   │   │   │   └── route.js
│   │   │   │   ├── me/
│   │   │   │   │   └── route.js
│   │   │   │   └── register/
│   │   │   │       └── route.js
│   │   │   ├── projects/
│   │   │   │   ├── [id]/
│   │   │   │   │   └── route.js
│   │   │   │   └── route.js
│   │   │   └── testimonials/
│   │   │       ├── [id]/
│   │   │       │   └── route.js
│   │   │       └── route.js
│   │   ├── login/
│   │   │   └── page.jsx
│   │   ├── register/
│   │   │   └── page.jsx
│   │   ├── projects/
│   │   │   ├── [id]/
│   │   │   │   └── page.jsx
│   │   │   └── page.jsx
│   │   ├── testimonials/
│   │   │   ├── edit/
│   │   │   │   └── [id]/
│   │   │   │       └── page.jsx
│   │   │   ├── new/
│   │   │   │   └── page.jsx
│   │   │   └── page.jsx
│   │   ├── layout.js
│   │   └── page.jsx
│   ├── components/
│   │   ├── Footer.jsx
│   │   └── Header.jsx
│   ├── lib/
│   │   ├── axios.js
│   │   └── prisma.js
│   └── redux/
│       ├── provider.jsx
│       ├── store.js
│       └── slices/
│           ├── authSlice.js
│           ├── projectSlice.js
│           └── testimonialSlice.js
├── .env
├── package.json
└── README.md


---
## ⚙️ Installation

# Cloner le projet
git clone https://github.com/smmakon/portfolio-saint-mathieu-makon.git

cd portfolio-saint-mathieu-makon

# Installer les dépendances
npm install

# Lancer le serveur
npm run dev

npx prisma generate
npx prisma migrate dev

## Auteur
Saint-mathieu Makon
Devellopeur Fullstack
GitHub : https://github.com/smmakon




