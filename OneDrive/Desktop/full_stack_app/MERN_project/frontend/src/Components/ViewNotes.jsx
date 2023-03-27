import React, { useEffect, useState } from 'react'
import axios from 'axios'



function Viewnotes() {
  const [notes,setnotes]=useState([])
  const [update,setupdate]=useState("")


  const get_notes_api=()=>{
    axios.get(`http://localhost:4000/notes/`,{
      headers:{
        Authorization:localStorage.getItem("token")
      }
    }).then((res)=>{
      setnotes(res.data)
      console.log(res.data)
    })
  }

  const delet_api=(id)=>{
    axios.delete(`http://localhost:4000/notes/delete/${id}`,{
      headers:{
        Authorization:localStorage.getItem("token")
      }
    }).then((res)=>{
      get_notes_api()
     
    })
  }
  const update_api=(id)=>{
    console.log(id)
    const payload={
      body:update
    }
    console.log(payload)
    axios.patch(`http://localhost:4000/notes/update/${id}`,payload,{
      headers:{
        Authorization:localStorage.getItem("token")
      }
    }).then((res)=>{
      get_notes_api()
    })
  }





  const handleupdate=(e)=>{
    // console.log(e.target.value)
    setupdate(e.target.value)
    
   
  }

  


  useEffect(()=>{
    get_notes_api()
  },[])
  


  return (
    <>
    <h1>View Notes </h1>

    {notes.map((el,i)=> (
      <div key={i}>
        <h1>{el.body}</h1>
        <button onClick={()=>delet_api(el._id)}>Delete</button>
        <input placeholder='edit notes'  onChange={handleupdate} key={i}/>
        <button onClick={()=>update_api(el._id)}>Update body</button>
       
      </div>
    ))}
    
    </>




  )
}

export default Viewnotes
// akash 