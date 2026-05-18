# WEEK 6 -- React State Management and Full Stack CRUD

- React advanced concepts
   - useEffect hook
   - fetch API
   - props
   - state lifting
   - Context API
   - context provider
   - useContext hook
   - prop drilling
- State management
   - sharing state across components
   - keeping state in sync
   - multiple context states
   - Zustand store
- Client and server connection
   - HTTP requests from React
   - fetch
   - axios
   - CORS
   - loading state
   - error handling
- Full stack CRUD
   - create employee
   - read employees
   - update employee
   - delete employee
   - React Router
   - react-hook-form
   - MongoDB and Mongoose

## Files:

### react-project4
React Context API project
   - shares counter state across components
   - uses context provider
   - uses useContext hook
   - avoids prop drilling

### react-project4/src/App.jsx
Main React component
   - renders EditCounter1
   - renders EditCounter2
   - renders EditCounter3
   - renders EditCounter4
   - displays counters in grid layout

### react-project4/src/contexts/ContextProvider.jsx
Context provider file
   - creates context object
   - stores counter state
   - defines increment function
   - defines decrement function
   - provides state and functions to child components

### react-project4/src/components/EditCounter1.jsx
Counter component using context
   - consumes counter context
   - displays count
   - increments count
   - decrements count

### react-project5
React useEffect and API practice project
   - fetches users from API
   - displays user cards
   - counts added users
   - passes function as props
   - uses state lifting

### react-project5/src/App.jsx
Main React component
   - stores count state
   - defines handleAddUser function
   - renders UserCount
   - renders Users

### react-project5/src/components/Users.jsx
Users component
   - uses useEffect hook
   - fetches users from jsonplaceholder API
   - stores users in state
   - displays users using map()
   - calls onAddUser when button is clicked

### react-project5/src/components/UserCount.jsx
User count component
   - receives count using props
   - displays total users added

### Backend-Demo
Full stack employee CRUD project
   - backend using Express and MongoDB
   - frontend using React and Vite
   - connects frontend and backend using HTTP requests
   - uses CORS middleware

### Backend-Demo/backend/server.js
Express backend server
   - imports express
   - connects to MongoDB using mongoose
   - uses dotenv for environment variables
   - uses cors middleware
   - forwards requests to employee API
   - handles validation, cast, and server errors

### Backend-Demo/backend/APIs/EmployeeAPI.js
Employee REST API
   - POST create employee
   - GET all employees
   - PUT update employee by id
   - DELETE employee by id
   - uses async and await
   - sends proper status codes

### Backend-Demo/backend/Models/EmployeeModel.js
Employee model
   - defines employee schema
   - validates name, email, mobile, designation, and companyName
   - uses timestamps
   - creates employee model

### Backend-Demo/backend/req.http
HTTP requests for testing employee API
   - create employee
   - read all employees
   - update employee
   - delete employee

### Backend-Demo/frontend
React frontend for employee CRUD
   - uses React Router
   - uses react-hook-form
   - uses fetch and axios
   - uses Tailwind CSS
   - uses Zustand practice store

### Backend-Demo/frontend/src/App.jsx
Main frontend component
   - creates browser router
   - defines routes
   - renders RootLayout
   - connects pages with RouterProvider

### Backend-Demo/frontend/src/components/RootLayout.jsx
Root layout component
   - renders Header
   - renders Outlet
   - provides common layout for pages

### Backend-Demo/frontend/src/components/Header.jsx
Navigation component
   - uses NavLink
   - links Home, CreateEmp, and List of Employees
   - highlights active route

### Backend-Demo/frontend/src/components/CreateEmp.jsx
Create employee form
   - uses react-hook-form
   - sends POST request using fetch
   - handles loading state
   - handles error state
   - navigates to employee list after creation

### Backend-Demo/frontend/src/components/ListOfEmps.jsx
Employee list page
   - fetches employees using axios
   - displays employee cards
   - handles view, edit, and delete actions
   - uses useEffect to load employees
   - handles loading and error state

### Backend-Demo/frontend/src/components/Employee.jsx
Employee details page
   - receives selected employee using router state
   - displays employee details

### Backend-Demo/frontend/src/components/EditEmployee.jsx
Edit employee form
   - receives employee data using router state
   - fills form using setValue
   - sends PUT request using axios
   - navigates back to employee list after update

### Backend-Demo/frontend/src/store/CounterStore.js
Zustand store practice
   - creates global store
   - stores counter values
   - defines increment, decrement, reset, and change functions
   - stores user object state

### package.json
Project configuration
   - backend dependencies: express, mongoose, cors, dotenv
   - frontend dependencies: react, react-router, axios, react-hook-form, zustand
   - Vite scripts for React projects
