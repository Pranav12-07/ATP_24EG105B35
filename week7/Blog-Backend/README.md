# Blog Backend

- Express backend
- MongoDB with Mongoose models
- user, author and admin routes
- JWT authentication middleware
- Cloudinary image upload
- API request files for testing

## Main Files:

### server.js
Creates the backend server, connects to DB, seeds admin and mounts routes.

### APIs/AuthRoutes.js
Register, login, logout and check-auth routes.

### APIs/UserRoutes.js
User-facing article and comment routes.

### APIs/AuthorRoutes.js
Author article CRUD routes.

### APIs/AdminRoutes.js
Admin user management routes.

### models/UserModel.js
User schema and model.

### models/ArticleModel.js
Article schema and model.

### UserApiRequests.http
User API request samples.

### AuthorApiRequests.http
Author API request samples.

### AdminApiRequests.http
Admin API request samples.

---

# 12-03-26
1. generate package.json
2. create .env file
3. create express app and assign port number
4. connect to db
5. Define schemas and create models
 - UserTypeSchema
   firstName
   lastName
   email
   password
   role
   profileImageUrl
   isUserActive

 - ArticleSchema
   author - reference
   title
   category
   content
   comments
   isArticleActive
6. Implement APIs
7. create common api for register,login,logout

# 13-02-26
- for admin login we use data seeing concept - (admin will be already provided with the login)
- DRIVE practice
- documentaion is required - 
 - description for 2 3 paras
 - schemas
 - roles
 - users
 - demo(screenshots of ui)
- concept of embedded documnets and refrence types - ref types are right approach for consistency
- soft delete
Q. why do we use hash instead of hashsync when we need a synchronous function bcz of hashing
Q. have a grip on database schemas

# 14-03-26
- cross site scripting (xss)
- csrf
Q. are they robus and how ur application can protect or not
Q. what are the mechanisam u used to protect ur application from those attacks
- design principles or rest api

FRONTEND
 Dynamic, Responsive User Interface(UI) -- web page -- need browser to open
 HTML MarkUp Language -> used to create skeleton of UI
 CSS -> styleSheet lang -> to add responsiveness(page layout should be adjustable acc to the device) and styles
 TailwindCSS -> technology
 JavaScript - React -> Library
 Need a web server to run the application
