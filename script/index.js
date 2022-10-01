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
let div_image1=document.getElementById('update')
div_image1.addEventListener('click',function(){
    window.location.href='home3.html'
})
let div_image2=document.getElementById('update')
div_image2.addEventListener('click',function(){
    window.location.href='home3.html'
})