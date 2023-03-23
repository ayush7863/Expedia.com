const express=require('express')
const app=express()
app.use(express.json())
const {connect}=require("./config/db")
const {userRouter}=require('./router/router.user')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(userRouter)
app.use(express.json())





app.listen(4040,async()=>{
    try{
        await connect
        console.log("mongodb connect")
        console.log("server start");
    }
    catch(error){
        console.log(error)
    }
})