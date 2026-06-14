import jwt from 'jsonwebtoken'
const {verify}=jwt


export function verifyToken(req,res,next){
    //token verification logic
    const token=req.cookies?.token
    //if req from unauthorized user -- token is undefined
    if(!token)
        return res.status(401).json({message:"Please login"})
    try{
    //if token is existing
    const decodedToken=verify(token,'abcdef')
    console.log(decodedToken)
    //attach decoded user to req
    req.user=decodedToken
    //call next
    next()
    }catch(err){
        console.log(err)
        res.status(401).json({message:"Session expired. Please re-login"})
    }
}