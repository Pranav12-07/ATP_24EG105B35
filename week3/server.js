//entry point of backend
//create express app
import exp from 'express'
import {connect} from 'mongoose'
import { userApp } from './APIs/UserAPI.js'
import { productApp} from './APIs/ProductAPI.js'
import cookieParser from 'cookie-parser'
const app=exp(), 
 config app=exp()
//start server
//set a port number
const port=4000

//add body parser
app.use(exp.json())

//add cookie parser 
app.use(cookieParser())

//forward req to UserApp if path satarts with /user-api
app.use("/user-api",userApp)

//forward req to ProductApp if path satarts with /Product-api
app.use("/product-api",productApp)

const pprt=process.env.PORT || 4000

//connect to DB server
async function connectDB() {
    try{
        await connect(process.env.DB_URL)
        console.log("DB connection successful")
        //assign port number to HTTP server
        app.listen(port, () => console.log(`server listening to port ${port}...`))
    }
    catch(err){
        console.log("err in DB connection:",err)
    }
    
}

connectDB()

//error handling middleware
app.use((err,req,res,next) =>{
    console.log(err.name)
    //validation error
    if(err.name==="ValidationError")
        return res.status(400).json({message:"error occured",error:err.name})
    //cast error
    if(err.name==="CastError")
        return res.status(400).json({message:"error occured",error:err.name})
    //send server side error
    res.status(500).json({message:"error occured",error:"Server side error"})
})


//error => {name,message,callstack}