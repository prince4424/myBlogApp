const mongoose = require("mongoose")
 const blogSchema = mongoose.Schema({
    title:{
        type:String,
    },
    content:{
        type:String
   
    },
    description:{
        type: String
    }
 })
 const Blogg =mongoose.model("blog", blogSchema)
 module.exports= Blogg;