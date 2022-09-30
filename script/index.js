import  navbar from '../components/navbar.js'
let nav_div=document.getElementById("navbar")
nav_div.innerHTML=navbar()


import footer from '../components/footer.js'
let footer_div=document.getElementById('footer')
footer_div.innerHTML=footer();

let btn=document.getElementById('btn-1')


btn.addEventListener('click',function(){
    let inp_1=document.getElementById('phone').value;
   if(inp_1.length>9){
    alert('We’ve sent you a text message with a link to download the app.')

   }else{
    alert('Enter correct Mobile No.')
   }
    
    

   
})