const express =require('express');
const  mongoose =require('mongoose')
const bodyParser = require('body-parser');
const postroute =require('./src/Routes/PostRouter')
const userroute=require("./src/Routes/UserRouter")
const cors=require('cors')
const app=express()
const path =require('path')
const multer=require('multer')





app.use(cors())
app.use(multer().any())
app.use(express.json({limit:'50mb'}))
app.use(bodyParser.urlencoded({extended: true}));



mongoose.connect("mongodb+srv://modassar123:modassar1234@test.ahxnnau.mongodb.net/blog_web_assig", {
    useNewUrlParser: true
},mongoose.set('strictQuery', false))
    .then(() => console.log("mongodb is connected"))
    .catch(Error => console.log(Error))

   app.use('/post',postroute)
   app.use('/user',userroute)
   
    app.listen(3000,()=>{
        console.log("sever running on 3000")
    })