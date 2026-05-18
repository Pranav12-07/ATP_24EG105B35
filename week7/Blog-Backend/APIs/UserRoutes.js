//UserRoutes.js


import exp from 'express'
import { verifyToken } from '../middlewares/verifyToken.js'
import { ArticleModel } from '../models/ArticleModel.js'
export const userApp=exp.Router()

//read articles of all authors
userApp.get('/articles',verifyToken("USER","AUTHOR","ADMIN"),async(req,res) => {
    const articleList=await ArticleModel.find({isArticleActive:true}).populate('author','firstName lastName')
    res.status(200).json({message:"Articles:",payload:articleList})
})

//add comment to an article
userApp.put('/articles',verifyToken("USER"),async(req,res) => {
    const {articleId,comment}=req.body
    const articleDoc=await ArticleModel.findOne({_id:articleId,isArticleActive:true})
    if(!articleDoc)
        return res.status(404).json({message:"Article not found"})
    const userId=req.user?.id
    articleDoc.comments.push({user:userId,comment:comment})
    await articleDoc.save()
    await articleDoc.populate('author','firstName lastName').populate('comments.user','firstName lastName')
    res.status(200).json({message:"Comment added successfully",payload:articleDoc})
})

//get single article by id
userApp.get('/article/:id',verifyToken("USER","AUTHOR","ADMIN"),async(req,res) => {
    const {id}=req.params
    const article=await ArticleModel.findOne({_id:id,isArticleActive:true}).populate('author','firstName lastName').populate('comments.user','firstName lastName')
    if(!article)
        return res.status(404).json({message:"Article not found"})
    res.status(200).json({message:"Article",payload:article})
})
