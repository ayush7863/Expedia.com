import navbar from "../components/signnavbar.js";

const navbar_div=document.querySelector("#aknavbar")
navbar_div.innerHTML=navbar()

const customer_account=[]


document.querySelector("#form").addEventListener('submit',()=>{
    const email=document.getElementById("email").value

    const first_name=document.getElementById('name').value

    const sur_name=document.getElementById('surname').value

    const pasd=document.getElementById('password').value

    // console.log(email,first_name,sur_name,pasd)

    function create_account(email,first_name,sur_name,pasd){
        this.email=email
        this.firstname=first_name
        this.surname=sur_name
        this.password=pasd
    }

    customer_account.push(new create_account(email,first_name,sur_name,pasd))

    localStorage.setItem('new_customer',JSON.stringify(customer_account))
})