//create mini express application (separate route for products)
import exp from 'express'
import { ProductModel } from '../models/ProductModel.js'
export const productApp = exp.Router()
// Define product REST API routes

// Create new product
productApp.post("/products", async(req, res) => {
    // get new product obj from req
    const newProduct = req.body
    // create new product document
    const newProductDocument = new ProductModel(newProduct)
    // save -- returns newly created object
    const result = await newProductDocument.save()
    console.log("result:", result)
    // send res
    res.status(201).json({message: "Product created"})
})

// Read all products (protected route)
productApp.get("/products", async(req, res) => {
    // read all products from db
    let productsList = await ProductModel.find()
    // send res
    res.status(200).json({message: "products", payload: productsList})
})

// Read a product by id
productApp.get("/products/:productId", verifyToken, async(req, res) => {
    // get id from params
    const pid = req.params.productId
    // find product by id
    const productObj = await ProductModel.findOne({productId:pid})
    // if not found
    if(!productObj) {
        return res.status(404).json({message: "Product not found"})
    }
    // send res
    res.status(200).json({message: "product", payload: productObj})
})

// Update a product by id
productApp.put("/products/:productId", verifyToken, async(req, res) => {
    // get modified product from req
    const pid = req.params.productId
    // find product by id and update
    const updatedProduct = await ProductModel.findOneAndUpdate({productId:pid},{$set:req.body},{new:true,runValidators:true})
    // send res
    res.status(200).json({message: "product updated", payload: updatedProduct})
})

// Delete a product by id
productApp.delete('/products/:productId', verifyToken, async(req, res) => {
    // get id to be deleted
    const pid = req.params.productId
    // find and delete product by id
    let deletedProduct = await ProductModel.findOneDelete({productId:pid})
    // if not found
    if(!deletedProduct) {
        return res.status(404).json({message: "Product not found"})
    }
    // send res
    res.status(200).json({message: "Product deleted", payload: deletedProduct})
})

