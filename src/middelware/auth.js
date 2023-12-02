const jwt=require('jsonwebtoken')
const PostModel=require('../models/PostModel')
const UserModel=require('../models/userModel')
const bcrypt=require("bcrypt")
const mongoose = require('mongoose')
const objectId = mongoose.Types.ObjectId


exports.authentication=async(req,res,next)=>{
    try{ 
        console.log("hi authen")
        let token=req.headers.authorization
        if(!token) return res.status(400).send({status:false,message:"Token is mandatory"})
        token=token.split(" ")
       jwt.verify(token[1],"this is my key",(error,decode)=>{
        if(error)return res.status(401).send({status:false,message:error.message})
        req.id=decode.userId
        next()
       })
       
    }catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}

exports.autherization=async(req,res,next)=>{
    try{
        console.log("hi authriz")
        let postid=req.params.postId
        if (!objectId.isValid(postid)) { return res.status(400).send({ status: false, msg: "please enter valide userid" }) }
        const post=await PostModel.findById(postid)
        const {authorname}=post

        const id=req.id
        const user=await UserModel.findById(id)
        // const salt=await bcrypt.genSalt(10)
        // const secauth=await bcrypt.hash(user.Name,salt)
        let isauthrize= await bcrypt.compare(user.Name,authorname);
        if(isauthrize)
          {
            next()
          }else { return res.status(403).send({ status: false, msg: "unautherized user" }) }




    }catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}