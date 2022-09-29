// import console from "console";
import navbar from "../component/signnavbar.js";

let navbar_div=document.getElementById("navbar")
navbar_div.innerHTML=navbar()

const login_details=[]

document.querySelector("#form").addEventListener('submit',()=>{
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value
    // const checkbox=document.getElementById('radio').value
    // console.log(checkbox)

    function logindetails(email,password){
        this.email=email
        this.password=password
    }

    
    let res= new logindetails(email,password)
    login_details.push(res)
    localStorage.setItem('customer_details',JSON.stringify(login_details))


    // login_details.push(new logindetails(email,password))

    // if(checkbox){
    //     alert(`you are login your email is  ${email}` )
    // }
    // else{
    //     alert(`Please checkin`)
    // }
    
    alert(`you are login your email is  ${email}` )
    
    // console.log(login_details)

    // console.log(email,password)
})