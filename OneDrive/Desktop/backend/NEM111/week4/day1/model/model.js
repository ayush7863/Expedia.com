const mongoose=require('mongoose')


const userSchema=mongoose.Schema({
    email:String,
    password:String,
    location:String,
    age:Number
},{versionkey:false})

const userModel=mongoose.model("user",userSchema)

module.exports={userModel}