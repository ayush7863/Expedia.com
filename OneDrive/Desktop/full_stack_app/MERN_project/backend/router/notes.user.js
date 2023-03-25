const express = require("express");
// const {auth}=require("../middleware/auth")
const jwt=require('jsonwebtoken')

const { NoteModel } = require("../model/notes");

const notesRouter = express.Router();
// notesRouter.use(auth)


//for all the following things authentication is required.


notesRouter.get("/" ,async(req, res) => {
    const token=req.headers.authorization
    console.log(token)
    const decoded=jwt.verify(token,"shhhhh")
    try{
        if(decoded){
            const notes=await NoteModel.find({"userID":decoded.userID})
            res.status(200).send(notes)
        }
    } catch(err){
        res.status(400).send({"msg":err.message}) 
    }
});

notesRouter.post("/create", async (req, res) => {

    try{
        const payload = req.body;
        console.log(payload)
        const new_note = new NoteModel(payload);
        await new_note.save();
        res.status(200).send({"msg":"A new Note has been added"}) 

    }
    catch(err){
        res.status(400).send({"msg":err.message}) 
    }
});





notesRouter.patch("/update/:noteID",async(req, res) => {
    const {noteID}=req.params
    const data=req.body
    // console.log(noteID,payload)
    try{
        await NoteModel.findByIdAndUpdate({_id:noteID},data)
        res.send("update succesfully")
    }
    catch(error){
        res.send("error")
    }

});
notesRouter.delete("/delete/:noteID", async(req, res) => {
    const {noteID}=req.params
    console.log(noteID)
    try{
        await NoteModel.findByIdAndDelete({ _id:noteID })
        res.send("Delete succesfully")
    }
    catch(error){
        res.send("error",error)
    }
});

module.exports = { notesRouter }
