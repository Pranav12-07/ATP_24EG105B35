# WEEK 3 -- Express Backend with MongoDB

GitHub link: https://github.com/Pranav12-07/ATP_24EG105B35/tree/main/week3


- backend development with Node.js and Express
   - express server
   - route handling
   - middleware
   - error handling
- MongoDB connection using Mongoose
   - schemas
   - models
   - validation
   - CRUD operations
- authentication
   - login route
   - password hashing with bcryptjs
   - JWT token generation
   - protected routes using cookies

## Files:

### server.js
Main backend entry file
   - creates Express app
   - connects to MongoDB
   - mounts user and product routes
   - adds JSON parser and cookie parser
   - handles server-side errors

### APIs/UserRoutes.js
User route handlers
   - user registration
   - user login
   - read all users
   - read logged-in user by token email
   - update user by id
   - delete user by id
   - add product to cart

### APIs/ProductRoutes.js
Product route handlers
   - create product
   - read all products
   - read product by product id
   - update product by product id
   - delete product by product id

### models/UserModel.js
User and cart schema
   - username, password, email and age fields
   - cart items with product reference and count
   - validation, unique fields and timestamps

### models/ProductModel.js
Product schema
   - productId, productName, price and brand fields
   - price validation
   - timestamps

### middlewares/verifyToken.js
JWT verification middleware
   - reads token from cookies
   - verifies token
   - attaches decoded user data to request
   - blocks unauthorized requests

### AUTH/UserAuthentication.js
Authentication notes file
   - user login function placeholder

### ApiRequests.http
API testing requests
   - user CRUD requests
   - user login request
   - cart request
   - product CRUD requests

### VerifyTokenFixNotes.md
Fix notes for verifyToken import issue
   - completed checklist
   - summary of fixed endpoints

### package.json
Project configuration
   - module type
   - dependencies
   - scripts

### .env.example
Environment variables template
   - database connection URL

(Actual .env is ignored via `.gitignore` )

---

Steps:
1. Generate package.json
    npm init -y
2. Create http server -> express server
    npm install express 
3. create server.js file
4. Install mongoose and connect to MongoDB server
5. Build USER API
   - create user 
   - read all users
   - read user by id
   - update a user by id
   - delete user by id
6. create schema and modelel of the resource(user)
7. create user API and define routes

--> Handling unavailable resources
--> Validators during update
--> Hashing Password(bcryptjs)
--> Unique fields
--> Refined version of error handling middleware

--> Status code:
  -- 200 -> for any success operation(that operation is success)
  -- 201 -> creating resources(resource creation)
- Client side errors
  -- 400 -> bad request (eg: valiadation errors which are made by client/user)
  -- 401 -> unauthorised 
  -- 404 -> not found (if resource is not available in db)
- Server side errors
  -- 500 -> server error


### user authonitacatication(login)
 --submit credential and get token 

 
  req--public routes(by anyone)


  req--middleware--->protected routes(by authoniticated user only)
  

### crossorgin and sameorgin
 -- cross orgin request means when the clint and server application are running i different domains
 -- same orgin request meas the clint also running on the same domain of the server
 --cookies will send along  with the request automatically in same orgin request ,bugt cross orgin request , the token should be explictily includedto the request 

 
