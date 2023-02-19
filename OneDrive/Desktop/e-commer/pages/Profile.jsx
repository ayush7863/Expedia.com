import ProfileCard from "@/Component/ProfileCard";
import axios from "axios";
// import { profile } from "console";
import React from "react";

function Profile( {data} ) {
  
  return (
    <>
      <h1>Profiles...</h1>
      {data&& data.map((el,i)=>{
        return  <ProfileCard  key={i}  data={el} />

      })}
    </>
  );
}

export async function getServerSideProps() {

    let response = await fetch("http://localhost:8080/profiles");
    let data = await response.json();
    console.log(data);
  
  return {
    props:{
      data,
      fallback:false
    }
  };

  // return {props:{hary:"akash"}}
}

export default Profile;
