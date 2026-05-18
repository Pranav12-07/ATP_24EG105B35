//create mini express application(seperate route)
import exp from 'express'
import { UserModel } from '../models/UserModel.js'
import { hash,compare } from 'bcryptjs'
import jwt from 'jsonwebtoken' //default varibale so  any varibale can be given
import { verifyToken } from '../middlewares/verifyToken.js'
const {sign}=jwt //we cannot destructure here as it is not a names expo


export const userApp=exp.Router()

//define user rest apis routes

//user login
userApp.post('/auth',async(req,res) => {
    //get user credential obj from client
    const {email,password}=req.body
    console.log(req.user)
    //verify email
    let user=await UserModel.findOne({email:email})
    //if email not existing
    if(user===null) //if(!user) also used
        return res.status(400).json({message:"Invalid email"})
    //compare password
    let result=await compare(password,user.password)
    //if password not matched
    if(result===false)
        return res.status(400).json({message:"Invalid Passowrd"})
    //if passwords matched
    //create token -- jsonwebtoken(jwt/jaat) -- signed function of jwt
    const signedToken=sign({email:user.email},"abcdef",{expiresIn:"1h"}) //"ms" -> millisec, w -> weeks ,sec -> seconds
    //store token as httpOnly cookie
    res.cookie("token",signedToken,{
        httpOnly:true, //important
        sameSite:"lax", //both are running on the same domain or not - frontend and backeebd - lax 
        secure:false
    })
    //send res
    res.status(200).json({message:"login success",payload:user})
})

//create new user
userApp.post("/users",async(req,res) => {
    //get new user obj from req
    const newUser=req.body
    //hash the password
    const hashedPassword=await hash(newUser.password,10)
    //replace plain password with hashed password
    newUser.password=hashedPassword
    //create new user document
    const newUserDocument=new UserModel(newUser)
    //save -- returns newly retured object
    const result=await newUserDocument.save()
    console.log("result:",result)
    //send res
    res.status(201).json({message:"User created"}) //status code 201
})

//read all users(protected route) -- first middleware will be executed
userApp.get("/users",verifyToken,async(req,res) => {
    // access the decoded token from verifyToken()
    //req.user=decodedToken
    //read all users from db
    let usersList=await UserModel.find()
    //send res
    res.status(200).json({message:"users",payload:usersList})
})

//read a user by email
userApp.get("/user",verifyToken,async(req,res) => {
   //read user email from req
   const emailOfUser=req.user?.email
   // console.log(emailOfUser)
    //find user by id
   // const userObj=await UserModel.findOne({_id:uid})
   // use only to find by id :
   const userObj=await UserModel.findOne({email:emailOfUser}).populate("cart.product")
   // if user not found
   if(!userObj)
    return res.status(404).json({message:"User not found"})
    //send res
    res.status(200).json({message:"user",payload:userObj})
})

//use findOne() method to read a document with non object id fields
//use findById() to read document with object id


//update a user by id
userApp.put("/users/:id",verifyToken,async(req,res) => {
    //get modified user from req
    const modifiedUser=req.body
    const uid=req.params.id
    //hash the upadted password
if(modifiedUser.password){
    const hashedPassword=await hash(modifiedUser.password,10)
    //replace with hashed password
    modifiedUser.password=hashedPassword
}
    //find user by id and update at the same time->
    const updatedUser=await UserModel.findByIdAndUpdate(uid,{$set:{...modifiedUser}},{returnDocument:"after",runValidators:true})
    //send res
    res.status(200).json({message:"user updated",payload:updatedUser})
})

//delete a user by id
userApp.delete('/users/:id',verifyToken,async(req,res) => {
    //get id to be deleted
    const uid=req.params.id
    //find and delete user by id
    let deletedUser=await UserModel.findByIdAndDelete(uid)
    //if not found
    if(!deletedUser)
        return res.status(404).json({message:"User not found"})
    //send res
    res.status(200).json({message:"User deleted",payload:deletedUser})
})


//add product to cart (idempotent: increment if exists, else push)
userApp.put("/cart/product-id/:pid",verifyToken,async(req,res) => {
    //get product id from url param (assume string id)
    const productId = req.params.pid;
    const emailOfUser = req.user?.email;
    
    //find user
    const user = await UserModel.findOne({email: emailOfUser});
    if (!user) {
        return res.status(404).json({message: "User not found"});
    }
    
    //check if product already in cart
    const existingItemIndex = user.cart.findIndex(item => item.product.toString() === productId);
    
    if (existingItemIndex > -1) {
        //increment count
        user.cart[existingItemIndex].count += 1;
    } else {
        //push new item
        user.cart.push({product: productId, count: 1});
    }
    
    //save updated user
    await user.save();
    
    //populate for response
    const populatedUser = await UserModel.findOne({email: emailOfUser}).populate('cart.product');
    
    res.status(200).json({message: "Cart updated", payload: populatedUser.cart});
})
