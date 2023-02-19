import ProfileCard from "@/Component/ProfileCard";
import axios from "axios";
import { useRouter } from "next/router";
import path from "path";
import React from "react";
import SingleProduct from "./SingleProduct";

function Id({ data }) {
  // const router=useRouter()

  // const { data } = profiles;
  console.log(data);
  return (
    <>
      <h1>Profiles...</h1>
      <p>{data.id}</p>
      {/* <SingleProduct data={data} /> */}
    </>
  );
}

export async function getStaticPaths() {
  
    let responce = await fetch(`http://localhost:8080/profile`);
    let data = await responce.json();
    const path=data.map((el)=>{
      return{
        params:{id:String(el.id)}
      }
    })

  return{
      path,
      fallback:false

  }
}

export async function getStaticProps(context) {
  const { id } = context.params.id;
  console.log(id);
    let responce = await fetch(`http://localhost:8080/profile${id}`);
    let data = await responce.json();
    console.log(data);
  
  return {
    props: {
       data,
      //  fallback:true
    },
  };
}

// export async function getServerSideProps() {
//   let data = [];
//   try {
//     let response = await fetch("http://localhost:8080/profiles");
//     data = await response.json();
//     console.log(data);
//   } catch {
//     console.log("Error");
//   }
//   return {
//     props: {
//       profiles: { data },
//     },
//   };

//   // return {props:{hary:"akash"}}
// }

export default Id;
