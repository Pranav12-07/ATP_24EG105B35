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