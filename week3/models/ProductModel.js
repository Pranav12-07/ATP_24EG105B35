import { Schema,model } from "mongoose";
// Create product schema 
const productSchema=new Schema({
   
    productId:{
        type:Number,
        required:[true,"Product Id required"]
    },
    productName:{
        type:String,
        required:[true,"Product Name required"]
    },
    price:{
        type:Number,
        required:[true,"Price required"],
        min:[10000,"Min price should atleast be 10000"],
        max:[ 50000,"Max price should not exceed 50000"]
    },
    brand:{
        type:String,
        required:[true,"Brand required"]

    }
},{
    versionKey:false,
    timestamps:true
})

// generate UserModel
export const ProductModel=model("product",productSchema)