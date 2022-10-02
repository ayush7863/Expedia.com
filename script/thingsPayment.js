import navbar from "../components/navbar.js";
let nav_div=document.getElementById("navbar");
nav_div.innerHTML=navbar();

let input=document.getElementsByClassName("inpWidth");


let submit=document.getElementById("submit");
submit.addEventListener("click",function(){
    alert("OTP sent to your registred mobile number");
    alert("payment successful");
    
})