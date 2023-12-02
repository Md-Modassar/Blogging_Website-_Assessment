const mongoose =require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId

const PostSchema =new mongoose.Schema({
    title: {
        type: String,
        required: true
      },
      photo: {
        type:String,
        required:true
      
       },
      discription: {
        type: String,
        required: true
      },
      authorname: {
        type:String,
        required:true 
        
      },
      tags: [String],
      category: {
        type: String,
        required: true
      },
      commite: [String],
      
},{timestamps:true})

module.exports=mongoose.model('post',PostSchema)