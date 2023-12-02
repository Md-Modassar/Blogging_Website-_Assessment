const PostModel=require('../models/PostModel')
const UserModel=require("../models/userModel")
const bcrypt=require("bcrypt")
const fs=require('fs')
const multer =require('multer')
const mongoose=require('mongoose')
//const path=require('path')

//=====================uplod Post photo========================//
var storage = multer.diskStorage({
   destination: function (req, file, callback) {
     callback(null, './uploads');
   },
   filename: function (req, file, callback) {
     callback(null, file.fieldname + '-' + Date.now());
   }
 });
 var upload = multer({ storage: storage }).single('Profile_picture');
 //=====================================================================//

 function isValide(value) {
   return (typeof value === "string" && value.trim().length > 0 && value.match(/^[A-Za-z ][A-Za-z _]{1,100}$/));
 }
exports.createpost=async(req,res)=>{
   try{ 
    const data=req.body
    const {title,discription,tags,category,commite,authorname}=data

 //================check required fields========================//


   
    data.photo=upload

    if(!data.photo){
      return res.status(400).send({status:false,message:"Please ensert photo"})
    }

    if(!title){
      return res.status(400).send({status:false,message:"Please enter title"})
    }
    if(!discription){
      return res.status(400).send({status:false,message:"Please enter discription"})
    }
    if(!authorname){
      return res.status(400).send({status:false,message:"Please enter authorname"})
    }
    if(!category){
      return res.status(400).send({status:false,message:"Please enter category"})
    }

    //---------------------check valid string---------------------//
     if(!isValide(title)){
         return res.status(400).send({status:false,message:"please enter valid title"})
     }
     if(!isValide(discription)){
      return res.status(400).send({status:false,message:"please enter valid discription"})
  }
  if(!isValide(authorname)){
   return res.status(400).send({status:false,message:"please enter valid authorname"})
}
  if(!isValide(category)){
    return res.status(400).send({status:false,message:"please enter valid category"})
   }

   const verifyauthor=await UserModel.findOne({Name:authorname})

   if(!verifyauthor)
     {
      return res.status(404).send({status:false,message:"this is no signup aouthor"})
     }

     const salt=await bcrypt.genSalt(10)
     const secauth=await bcrypt.hash(authorname,salt)
     data.authorname=secauth
   const product=await PostModel.create(data)

    return res.status(201).send({status:true,product})

   }catch(err){
    return res.status(500).send({message:err.message})
   }
}

exports.getallPost=async(req,res)=>{
   try{
     const allpost=await PostModel.find()
     return res.status(200).send({status:true,allpost})
   }catch(err){
      return res.status(500).send({status:false,message:err.message})
   }
}

exports.getPostById=async(req,res)=>{
   try{
      const postId=req.params.postId
      const post=await PostModel.findById(postId)
      return res.status(200).send({status:true,post})
   }catch(err){
      return res.status(500).send({status:false,message:err.message})
   }
}

exports.updatapost=async(req,res)=>{
   try{
      const data=req.body
       const postId=req.params.postId
       if(data.title){
         if(!isValide(data.title)){
            return res.status(400).send({status:false,message:"please enter valid title"})
        }
       }
      if(data.discription){
         if(!isValide(discription)){
            return res.status(400).send({status:false,message:"please enter valid discription"})
        }
      } 
       
      if(data.category){
         if(!isValide(category)){
            return res.status(400).send({status:false,message:"please enter valid category"})
           }
       }
       
       if(data.authorname){
         if(!isValide(data.authorname)){
            return res.status(400).send({status:false,message:"please enter valid authorname"})
            
         }
         const verifyauthor=await UserModel.findOne({Name:data.authorname})

       if(!verifyauthor)
       {
      return res.status(404).send({status:false,message:"this is no signup aouthor"})
     }
       }

       const post =await PostModel.findById(postId)

       if(data.commite){
         post.commite.push(data.commite)
         
       }
       if(data.tags){
         post.tags.push(data.tags)
         
       }
       if(data.title){
         post.title=data.title
       }
       if(data.discription)
         {
            post.discription=post.discription
         }
         if(data.category)
          {
            post.category=data.category
          }
          if(data.authorname)
          {
            const salt=await bcrypt.genSalt(10)
            const secauth=await bcrypt.hash(data.authorname,salt)
            post.authorname=secauth
          }
       const updatedata=await PostModel.findByIdAndUpdate(postId,post,{new:true})
       return res.status(200).send({status:true,updatedata})
   }catch(err){
      return res.status(500).send({status:false,message:err.message})
   }
}

exports.deletePost=async(req,res)=>{
   try{
        const postId=req.params.postId

        const deletedata=await PostModel.findByIdAndDelete(postId)
        if(!deletedata){
         return res.status(404).send({status:false,message:"post is not found"})
        }
        return res.status(200).send({status:true,message:"post delete successful"})
   }catch(err){
      return res.status(500).send({status:true,message:err.message})
   }
}