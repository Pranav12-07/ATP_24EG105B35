import { Schema,model,Types } from "mongoose";

//create cart schema -- {product,count}
const cartSchema=new Schema({
    product:{
        type:Types.ObjectId, //refers to the objectId of product document
        ref:"product" //name of the product model
    },
    count:{
        type:Number,
        default:1
    }
})

// Create user schema -- (username,password,email,age)
const userSchema=new Schema({
    //structure of user resource
    username:{
        type:String,
        required:[true,"UserName is required"], //validation - should not be empty
        minLength:[4,"Min Length of UserName is 4 chars"], //validator
        maxLength:[7,"User Name size exceeds 7 chars"], //validator
        unique:[true,"User already existing"]
    },
    password:{
        type:String,
        required:[true,"Password required"] //validator
    },
    email:{
        type:String,
        required:[true,"Email required"],
        unique:[true,"Email already existing"] // not a validation rule - not validator -- to avoid duplicates and to make search faster
    },
    age:{
        type:Number
    },
    cart:[cartSchema] //{product:"",count:2}
},{
    versionKey:false,
    timestamps:true
})
// string -- schema datatype
// String -- mongoose datatype

// generate UserModel
export const UserModel=model("user",userSchema)