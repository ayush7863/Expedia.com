const express=require('express')
const app=express()
app.use(express.json())
const {connect}=require("./config/db")
const {userRouter}=require('./router/router.user')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(express.json())

const {notesRouter}=require('./router/notes.user')
const {auth}=require("../backend/middleware/auth")
const cors=require("cors")
app.use(cors())
require('dotenv').config()


app.use(userRouter)
app.use(auth)
app.use("/notes",notesRouter)



app.listen(process.env.port,async()=>{
    try{
        await connect
        console.log("mongodb connect")
        console.log("server start");
    }
    catch(error){
        console.log(error)
    }
})