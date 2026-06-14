# WEEK 5 -- React Components and Backend with DB

- React with Vite
   - components
   - props
   - product cards
   - user list layout
- Express backend with MongoDB
   - user routes
   - product routes
   - Mongoose models
   - API request testing

## Projects and Files:

### react-app-1/src/App.jsx
Product catalog React app
   - product data
   - Product component rendering
   - responsive product grid

### react-app-1/src/Components/Product.jsx
Product card component
   - receives product object with props
   - displays product details

### react-app-1/backendWithDB/server.js
Backend entry file
   - Express app
   - MongoDB connection
   - user and product route mounting
   - error handling middleware

### react-app-1/backendWithDB/APIs/UserRoutes.js
User API routes
   - create user
   - read users
   - update user
   - delete user
   - login with hashed password and JWT

### react-app-1/backendWithDB/APIs/ProductRoutes.js
Product API routes
   - create product
   - read products
   - update product
   - delete product

### react-app-1/backendWithDB/ApiRequests.http
Backend API request samples
   - user CRUD requests
   - product CRUD requests
   - login request

### react-project-2/Components/UsersList.jsx
Users list component
   - user data array
   - maps users to User cards

### react-project-2/Components/User.jsx
Single user card component
   - displays user name, email and image

### react-project-2/Components/Navbar.jsx
Navigation bar component

### react-project-2/Components/Footer.jsx
Footer component

### react-project-2/Components/Counter.jsx
Counter component
   - useState
   - increment and decrement buttons
