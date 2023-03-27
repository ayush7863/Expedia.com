import React from 'react'
import { useState } from 'react'

import axios from 'axios'




// export interface logintype{
//   email:String,
//   password:any
// }

function Login() {

  const [email,setemail]=useState("")
  const [pass,setpassword]=useState("")

  const handleinput=(e)=>{
    // console.log(e.target.value)
    setemail(e.target.value)
    
  }
  const handlepass=(e)=>{
    // console.log(e.target.value)
    setpassword(e.target.value)
    
  }
   const login_api=async(payload)=>{
    try{
      return  axios.post(`http://localhost:4000/login`,payload).then((res)=>{
        console.log(res.data)
        localStorage.setItem("token",res.data.token)
      })
      
         
    }
    catch(error){
      console.log(error);
      
    }
  }
  const handleAdd=()=>{
    const value={
      email,
      password:pass
    }
     login_api(value)
    // console.log(value)
  }
  return (
    <>

    <h1>login Page</h1>
    <input placeholder='Enter email' type='text' onChange={handleinput} value={email}/>
    <input placeholder='Enter password' type='password' onChange={handlepass} value={pass}/>
    <button onClick={handleAdd}>Add</button>
    
    </>
  )
}

export default Login

