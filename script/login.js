// import console from "console";
import navbar from "../components/signnavbar.js";


let pfour=document.getElementById("pfour");
pfour.addEventListener("click",function(){
    window.location.href='createaccount.html'
})

let forget=document.getElementById("forget");
forget.addEventListener("click",function(){
    window.location.href='forgetpage.html'
})







let navbar_div=document.getElementById("aknavbar")
navbar_div.innerHTML=navbar()

const new_customer_details=JSON.parse(localStorage.getItem('new_customer'))||[]
// console.log(new_customer_details)
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

    function check_customer(new_customer_details){
        new_customer_details.forEach(element => {
            if(email==element.email && password==element.password){
                alert("Login Succesfully")
                console.log(email,password)
                let res= new logindetails(email,password)
                login_details.push(res)
                localStorage.setItem('customer_details',JSON.stringify(login_details))
            }
            else{
                alert("Wrong details if you forget password pls click on forget passowrd")
            
            }
        });
    }
    check_customer(new_customer_details)


    
    


    // login_details.push(new logindetails(email,password))

    // if(checkbox){
    //     alert(`you are login your email is  ${email}` )
    // }
    // else{
    //     alert(`Please checkin`)
    // }
    
    // alert(`you are login your email is  ${email}` )
    
    // console.log(login_details)

    // console.log(email,password)
})