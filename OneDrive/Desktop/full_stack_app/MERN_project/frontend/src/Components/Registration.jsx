import axios from 'axios'
import React from 'react'
import {useState} from 'react'


// interface registrationtype{
//   email:String,
//   password:any,
//   location:String,
//   age:any
// }

function Registration() {

  const [email,setemail]=useState("")
  const [pass,setpass]=useState("")
  const [location,setlocation]=useState("")
  const [age,setage]=useState()


  const handlepass=(e)=>{
    // console.log(e.target.value)
    setpass(e.target.value)
    
  }
  const handlemail=(e)=>{
    // console.log(e.target.value)
    setemail(e.target.value)
    
  }
  const handlelocation=(e)=>{
    // console.log(e.target.value)
    setlocation(e.target.value)
    
  }
  const handage=(e)=>{
    // console.log(e.target.value)
    setage(e.target.value)
    
  }

  const registration_api=async(payload)=>{
    try{
      return  axios.post(`http://localhost:4000/registration`,payload).then((res)=>{
        console.log(res.data)
      }) 
    }
    catch(error){
      console.log(error);
      
    }
  }

  const handleAdd=()=>{
    const value={
      email,
      password:pass,
      location,
      age
    }
    registration_api(value)
     
    // console.log(value)
  }


  return (
    <>


    <h1>Registration Page</h1>

    <input placeholder='Enter email' type='text' onChange={handlemail} value={email}/>
    <input placeholder='Enter password' type='password' onChange={handlepass} value={pass}/>
    <input placeholder='Enter location' type='text' onChange={handlelocation} value={location}/>
    <input placeholder='Enter age' type='number' onChange={handage} value={age}/>
    <button onClick={handleAdd}>Add</button>

    
    </>
  )
}

export default Registration