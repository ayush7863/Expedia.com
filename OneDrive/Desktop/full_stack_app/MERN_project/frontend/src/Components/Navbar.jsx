import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        border: "1px solid black",
        padding: "1rem",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/notes">View Notes</Link>
      <Link to="/addnotes">Add Notes</Link>
      <Link to="/registration">registration</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Navbar;
