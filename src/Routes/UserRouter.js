const express=require('express')
const router=express.Router()

const { createuser, login }=require("../controller/UserController")

router.post("/signup",createuser)
router.post("/login",login)

module.exports=router;