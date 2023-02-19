import React from 'react'
import { useSearchParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useRouter } from 'next/router';
import Link from 'next/link';

function ProfileCard(data) {
  // const {location}=useLocation
  const router = useRouter();

  
  
  
  // const handleclick=(id)=>{
  //   console.log(id);
  //   router.replace({
  //      query: { ...router.query, id: id },
  //   });
  // }

// console.log(data.data.id);
  const {id,image,name}=data.data
  return (
    <>
    <div style={{width:"20%"}}>

    <div   key={id} style={{cursor:"pointer"}}>
      <Link href={`/Profile/${id}`}>
      <img src={image} alt="" width={"100%"} />
      </Link>
      <p>name:{name}</p>
      {/* <p>{id}</p> */}

    </div>
    

    </div>
    
    
    </>
  )
}

export default ProfileCard