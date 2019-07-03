const  mongoose = require("mongoose")
const Schema =  mongoose.Schema

const  BookSchema =   new Schema({
    
     title:{
          type:String,
          required:true
     },
     Author:{
          type:String,
          required:true
     },

    releaseDate:{
         type:Date,
         required:true
    }
})


const Book  =  mongoose.model("books",BookSchema)

module.exports  = Book