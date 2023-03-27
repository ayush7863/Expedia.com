import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Viewnotes from "./Components/ViewNotes";
import Addnotes from "./Components/AddNotes";
import Registration from "./Components/Registration";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/notes" element={<Viewnotes/>}></Route>
        <Route path="/addnotes" element={<Addnotes/>}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
       
      </Routes>
    </div>
  );
}

export default App;
