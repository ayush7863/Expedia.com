import  navbar from '../components/navbar.js'
let nav_div=document.getElementById("navbar")
nav_div.innerHTML=navbar()


let things=document.getElementById("things")
things.addEventListener("click",function(){
  window.location.href="things_to_do.html"
})

let btnone=document.getElementById("btnone");
let btntwo=document.getElementById("btntwo");

btnone.addEventListener("click",function(){
  window.location.href="loginpage.html"
})

btntwo.addEventListener("click",function(){
  window.location.href="createaccount.html"
})











import footer from '../components/footer.js'
let footer_div=document.getElementById('footer')
footer_div.innerHTML=footer();




const get_data=JSON.parse(localStorage.getItem('customer_details'))||[]
// console.log(get_data)
if(get_data.length=="0"){
  document.getElementById('mybtn').innerText='profile'
}
else{
  document.getElementById('mybtn').innerText=get_data[0].email
}
  var modal = document.getElementById("myModal");


var mybtn = document.getElementById("mybtn");

var span = document.getElementsByClassName("close")[0];


mybtn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}












let btn=document.getElementById('btn-1')


btn.addEventListener('click',function(){
    let inp_1=document.getElementById('phone').value;
   if(inp_1.length>9){
    alert('We’ve sent you a text message with a link to download the app.')

   }else{
    alert('Enter correct Mobile No.')
   }
    
    

   
})
let div_image1=document.getElementById('update')
div_image1.addEventListener('click',function(){
    window.location.href='home3.html'
})
let div_image2=document.getElementById('update1')
div_image2.addEventListener('click',function(){
    window.location.href='home3.html'
})