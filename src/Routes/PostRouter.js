const express =require('express')
const router=express.Router()
const {createpost, getallPost, getPostById, updatapost, deletePost} =require("../controller/PostContrpller")
const {authentication,autherization}=require("../middelware/auth")

router.post("/createpost",authentication,createpost);
router.get("/getallpost",authentication,getallPost)
router.get("/getpost/:postId",authentication,getPostById)
router.put("/updatepost/:postId",authentication,autherization,updatapost)
router.delete("/deletepost/:postId",authentication,autherization,deletePost)

module.exports=router;