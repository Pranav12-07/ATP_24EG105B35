# Blog Frontend

- React with Vite
- auth store with Zustand
- role-based pages
- articles, comments and profile components
- protected routes

## Main Files:

### src/App.jsx
Main frontend routing setup.

### src/store/authStore.js
Authentication state store.

### src/components/Login.jsx
Login page.

### src/components/Register.jsx
Registration page.

### src/components/Articles.jsx
Article list page.

### src/components/WriteArticles.jsx
Create article page.

### src/components/EditArticle.jsx
Edit article page.

### src/components/ProtectedRoute.jsx
Protects pages by authentication and role.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
