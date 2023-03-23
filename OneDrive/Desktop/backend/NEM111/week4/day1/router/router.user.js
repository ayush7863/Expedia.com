const express=require('express')
const userRouter=express.Router()
// const {userModel}=require("../model/model")
const {userModel}=require("../model/model")
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


// registration 
userRouter.get("/",(req,res)=>{
    res.send("helo")
   
})



userRouter.post("/registration",async(req,res)=>{
    // console.log(req.body)
    const {email,password,location,age}=req.body

    try{      
        bcrypt.hash(password, 5, async(err, hash)=> {
            const user =new userModel({email,password:hash,location,age})
            await user.save()
            res.send("Registration done")        
            
        });
    }
    catch(error){
        res.send(error)
    }
})



userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
        const user= await userModel.find({email})
        if(user.length>0){
            bcrypt.compare(password,user[0].password,(error,result)=>{
                if(result){
                    const expire_token=jwt.sign({exp: Math.floor(Date.now() / 1000) + (60 * 60),data: 'foobar'}, 'secret');
                    res.send({"msg":"Login done","expire_token":expire_token,"token":jwt.sign({
                        data: 'foobar'
                      }, 'secret', { expiresIn: '1h' })})
                }
                else{
                    res.send({"msg":"Error"})
                }
            })
        }
        // user.length>0? res.send({"login":"login done","token":jwt.sign({ foo: 'bar' }, 'shhhhh')}):res.send("Eror")
    
    }
    catch(error){
        res.send(error)
    }
    
})

userRouter.get("/data",async(req,res)=>{
    const token=req.headers.authorization
    // console.log(token)

    jwt.verify(token,"shhhhh", (err,decoded )=>
    {
        decoded? res.send("user details"):res.send("Eror")
    })
    
    
})

module.exports={userRouter}
