import React from "react";
import { useDispatch } from "react-redux";
import * as types from "../Redux/action";
import { useState } from "react";
import { add_profile_api } from "../Redux/action";
import { useRouter } from "next/router";

function Addprofilecard() {
  const dispatch = useDispatch();
  const router=useRouter()

  const [name, setname] = useState("");
  const [imageurl, setimageurl] = useState();

  const handlesubmit = (e) => {
    e.preventDefault();

    const payload = {
      name: name,
      image: imageurl,
    };
    console.log(payload);
    dispatch(add_profile_api(payload))
    router.push("/Profile")

  };

  const handlename = (e) => {
    // console.log(e.target.value);
    setname(e.target.value);
  };

  const handleimgurl = (e) => {
    // console.log(e.target.value);
    setimageurl(e.target.value);
  };
  // console.log(name,imageurl);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <form onSubmit={handlesubmit}>
          <label>Name</label>
          <input type="text" placeholder="name" onChange={handlename} />
          <label>img url</label>
          <input type="text" placeholder="url" onChange={handleimgurl} />
          <button>submit</button>
        </form>
      </div>
    </>
  );
}

export default Addprofilecard;
