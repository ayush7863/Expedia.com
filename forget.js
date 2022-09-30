import signnavbar from "../component/signnavbar.js";

const signnavbar_div=document.querySelector("#navbar")
signnavbar_div.innerHTML=signnavbar()

document.getElementById('form').addEventListener('submit',()=>{
    const email=document.getElementById('email').value
    alert(`Reset Link is send to your id  ${email}`)
    // console.log(email)
})