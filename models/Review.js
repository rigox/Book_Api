const  mongoose =  require("mongoose")
const Schema = mongoose.Schema

const reviewSchema =  new Schema({
    Book:{
        type:Schema.Types.ObjectId,
        ref:'books'
    },
    text:{
        type:String,
        required:true
    },
    name:{
        type:String,
    },
    comments:[
        {
            name:{
                  type:String,
                  required:true
            },
            text:{
                  type:String,
                  required:true
            },
            date:{
                type:Date.now()
            }
        }
    ],
    date:{
          type:Date,
          default:Date.now
    }
});


const Review  =  mongoose.model("Review",reviewSchema)

module.exports = Review