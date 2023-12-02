const UserModel=require('../models/userModel')
const jwt=require('jsonwebtoken')

const isValidEmail = function (value) {
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
    if (emailRegex.test(value)) return true;
  };

  function isValide(value) {
    return (typeof value === "string" && value.trim().length > 0 && value.match(/^[A-Za-z ][A-Za-z _]{1,100}$/));
  }
exports.createuser=async(req,res)=>{
  try{
   const data=req.body
   const {Name,Email,Password}=data
    if(!Name)return  res.status(400).send({ status: false, msg: "Name is mendatory" })
    if(!Email)return  res.status(400).send({ status: false, msg: "Email is mendatory" })
    if(!Password)return  res.status(400).send({ status: false, msg: "Password is mendatory" })

    if(!isValide(Name)){
        return res.status(400).send({status:false,message:"Please enter valid Name"})
    }
    if(!isValidEmail(Email)){
        return res.status(400).send({status:false,message:"Please enter valid email"})
    }

   const emailexist=await UserModel.findOne({Email:data.Email})
   if(emailexist){
    return res.status(400).send({status:false,message:"Please enter another email"})
   }

   const savedata=await UserModel.create(data)
   return res.status(201).send({status:true,savedata})
  }catch(err){
    return res.status(500).send({status:false,message:err.message})
  }

}

exports.login=async(req,res)=>{
    try{
       const data=req.body
       if(!isValidEmail(data.Email)){
        return res.status(400).send({status:false,message:"Please enter valid email"})
       }
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