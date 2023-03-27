

const mongoose=require("mongoose")

 const noteSchema=mongoose.Schema({
    body: String,
    userID: String
})

const NoteModel=mongoose.model("note",noteSchema)
module.exports={ NoteModel }
// Model.......