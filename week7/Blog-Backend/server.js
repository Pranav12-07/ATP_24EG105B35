//server.js

import exp from 'express'
import { config } from 'dotenv'
import { connect } from 'mongoose'
import { hash } from 'bcryptjs'
import { userApp } from './APIs/UserRoutes.js'
import { authorApp } from './APIs/AuthorRoutes.js'
import { adminApp } from './APIs/AdminRoutes.js'
import { commonApp }  from './APIs/AuthRoutes.js'
import { UserModel } from './models/UserModel.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//create express app
const app = exp()

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:4000'],
  credentials: true
}))

//add cookie parser middleware
app.use(cookieParser())

//add body parser
app.use(exp.json())

//connect to database
const connectDB = async () => {
    try {
        await connect(process.env.DB_URL)
        console.log("Connected to DB")

        //seed admin user
        const adminUser = await UserModel.findOne({ role: 'ADMIN' })
        if (!adminUser) {
            const hashedPwd = await hash('admin123', 12)
            await UserModel.create({
                firstName: 'Admin',
                lastName: 'User',
                email: 'admin@gmail.com',
                password: hashedPwd,
                role: 'ADMIN',
                isUserActive: true
            })
            console.log("Admin user seeded")
        }
    } catch (err) {
        console.log("Error in connecting to DB", err)
    }
}

connectDB()

//add API routes
app.use('/user-api', userApp)
app.use('/author-api', authorApp)
app.use('/admin-api', adminApp)
app.use('/common-api', commonApp)
app.use('/auth', commonApp)

//serve static files from React build
app.use(exp.static(path.join(__dirname, './dist')))

//catch all middleware to serve index.html for client-side routing
app.use((req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html'), (err) => {
        if (err) {
            res.status(500).send('Error loading the application')
        }
    })
})

//error handling middleware
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).send({ message: err.message })
})

//assign port
const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server running on port ${port}`))

