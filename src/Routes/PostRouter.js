const express =require('express')
const router=express.Router()
const {createpost, getallPost, getPostById, updatapost, deletePost} =require("../controller/PostContrpller")
const {authentication,autherization}=require("../middelware/auth")

router.post("/createpost",createpost);
router.get("/getallpost",getallPost)
router.get("/getpost/:postId",authentication,autherization,getPostById)
router.put("/updatepost/:postId",updatapost)
router.delete("/deletepost/:postId",deletePost)

module.exports=router;