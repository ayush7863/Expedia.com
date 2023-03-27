import axios from "axios";
import React, { useState } from "react";




// interface datatype{
//   body:String
// }

function Addnotes() {

  const [text,settext]=useState("")

  const handleinput=(event)=>{
    settext(event.target.value)
  }

  const add_notes_api=async(payload)=>{
    try{
      let res=axios.post(`http://localhost:4000/notes/create`,payload,
      {
        headers:{
          "Authorization":localStorage.getItem("token")
        }
      }
      
      ).then((res)=>console.log(res.data))
      // return res
    }
    catch(erro){
      console.log(erro)
    }
  }

  


  const handleadd=()=>{

    const data={
      body:text
    }
    add_notes_api(data).then((res)=>{
      console.log(res)
      settext("")
    })
      // Api(data)
  }

  return (
    <>
      <div
        style={{
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          width: "30%",
        }}
      >
        <div style={{ paddingTop: "30px" }}>
          <textarea rows={6} cols={60} onChange={handleinput} value={text}></textarea>
          
        </div>

        <button style={{ marginTop: "10px", width: "30%" }}  onClick={handleadd}>Add</button>
        
      </div>
    </>
  );
}

export default Addnotes;
