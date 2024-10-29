# DEEDS
Deeds is a social conscience application that allows users query important context about strangers to understand their personality without jumping through hoops, we do the necessary background checks for you, so you can safely meet new people and build lasting relationshsips.

## How it works
It works by aggregating data from multiple sources including crowd sourcing, news, Wikipedia, LinkedIn, socials and any other available platforms, consolidating the data into deeds, generating provenance and allowing people to vote on how true or wrong the deed created is.

## Setup Instructions
1. Clone the repo
2. Run `npm install` to install the dependencies
3. Run `npm run dev` to start the development server

## Usage guidelines


## Architectural Overview
This project uses Firebase as a backend service, with Firestore as the database, Cloud Functions for the backend logic, Cloud Storage for storing the static files and Cloud Run for hosting the web app.

The infrastructure is deployed using Github Actions, which enables automatic deployments on merge to the main branch, firebase auth is used for authenticating users and also authorizing access to features in the web app, application logic is silo'd into different cloud functions which are triggered based on events in the app logic and when data is updated in firestore database and Cloud storage.



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
