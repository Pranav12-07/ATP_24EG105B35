# WEEK 7 -- Full Stack Blog Application

- full-stack blog app
   - React frontend
   - Express backend
   - MongoDB database
   - JWT authentication
   - role-based access
   - Cloudinary image upload

## Main Folders and Files:

### Blog-Backend/server.js
Backend entry file with Express app, MongoDB connection, admin seeding and route mounting.

### Blog-Backend/APIs/AuthRoutes.js
Common authentication routes for register, login, logout and auth checking.

### Blog-Backend/APIs/UserRoutes.js
User article and comment routes.

### Blog-Backend/APIs/AuthorRoutes.js
Author article management routes.

### Blog-Backend/APIs/AdminRoutes.js
Admin user management routes.

### Blog-Backend/config/FileUploadConfig.js
Multer file upload configuration.

### Blog-Backend/config/CloudinaryConfig.js
Cloudinary configuration.

### Blog-Backend/config/CloudinaryUploadService.js
Cloudinary upload helper.

### Blog-Frontend/src/components
Frontend pages and components for auth, profiles, articles and protected routes.

---

# Blog Application

A full-stack blog application built with React, Express.js, and MongoDB.

## Features

- User authentication (register/login/logout)
- Role-based access control (User, Author, Admin)
- Article creation and management
- Comment system
- Image upload with Cloudinary
- Responsive UI with Tailwind CSS

## Tech Stack

- **Frontend:** React 19, Vite, React Router, Axios, Zustand, Tailwind CSS
- **Backend:** Express.js, MongoDB, Mongoose, JWT, bcryptjs
- **Deployment:** Docker, Docker Compose

## Setup Instructions

### Prerequisites
- Node.js 18+
- Docker and Docker Compose
- MongoDB (local or cloud)

### Local Development

1. Clone the repository
2. Install backend dependencies:
   ```bash
   cd Blog-Backend
   npm install
   ```
3. Install frontend dependencies:
   ```bash
   cd Blog-Frontend
   npm install
   ```
4. Set up environment variables in `Blog-Backend/.env`
5. Start MongoDB locally or update DB_URL for cloud MongoDB
6. Start the backend:
   ```bash
   cd Blog-Backend
   npm start
   ```
7. Start the frontend:
   ```bash
   cd Blog-Frontend
   npm run dev
   ```

### Production Deployment

1. Build the frontend:
   ```bash
   cd Blog-Frontend
   npm run build
   ```

2. Update environment variables in docker-compose.yml

3. Run with Docker Compose:
   ```bash
   cd Blog-Backend
   docker-compose up --build
   ```

The application will be available at http://localhost:4000

## API Endpoints

### Authentication
- POST /common-api/register - User registration
- POST /common-api/login - User login
- POST /common-api/logout - User logout
- GET /common-api/check-auth - Check authentication status

### Articles
- GET /user-api/articles - Get all articles (users)
- GET /author-api/articles - Get author's articles
- POST /author-api/articles - Create new article
- PUT /author-api/articles/:id - Update article
- DELETE /author-api/articles/:id - Delete article

### Comments
- GET /user-api/articles/:id/comments - Get article comments
- POST /user-api/articles/:id/comments - Add comment

### Admin
- GET /admin-api/users - Get all users
- PUT /admin-api/users/:id - Update user role
- DELETE /admin-api/users/:id - Delete user

## Default Admin Credentials
- Username: admin
- Password: admin123
- Email: admin@gmail.com
