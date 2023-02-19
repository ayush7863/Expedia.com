import React from 'react'
import { useRouter } from 'next/router'

function Navbar() {
    const router=useRouter()
    // console.log(router);

    const handleprofilecard=()=>{
        router.push("/Profile")
    }
    const handleaddnewprofilecard=()=>{
        router.push("/addprofile")
    }

  return (
    <>
    <div style={{margin:"10px"}}>
        <button onClick={handleprofilecard}>profileCard page</button>
        <button onClick={handleaddnewprofilecard}>Addnewprofilepage</button>

    </div>
    
    </>
  )
}

export default Navbar