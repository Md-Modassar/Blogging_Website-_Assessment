const UserModel=require('../models/userModel')
const jwt=require('jsonwebtoken')

exports.createuser=async(req,res)=>{
  try{
   const data=req.body

   const savedata=await UserModel.create(data)
   return res.status(201).send({status:true,savedata})
  }catch(err){
    return res.status(500).send({status:false,message:err.message})
  }

}

exports.login=async(req,res)=>{
    try{
       const data=req.body
       const emailexist=await UserModel.findOne({Email:data.Email})
       if(!emailexist)
        {
            return res.status(400).send({status:false,message:"please enter valid email"})
        }
       const passwordexist=await UserModel.findOne({Password:data.Password})

       if(!passwordexist)
        {
            return res.status(400).send({status:false,message:"please enter valid password "})
        }

        const token= jwt.sign({
            userId:emailexist._id
        },"this is my key")

        return res.status(201).send({status:true,token})

    }catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}