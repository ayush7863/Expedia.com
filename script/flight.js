import navbar from "../components/navbar.js"
import footer from "../components/footer.js";
let nav_div=document.getElementById("navbar");
let footer_div=document.getElementById("footer");
//console.log(navbar());


let data=[{time:"18:15-19:55",journey:"Delhi to Patna",icon:"https://images.trvl-media.com/media/content/expus/graphics/static_content/fusion/v0.1b/images/airlines/vector/s/UK_sq.svg",
        name:"Vistara",duration:"1h 40m (Direct)",price:"₹5,116"},{time:"18:15-19:55",journey:"Delhi to Patna",icon:"https://images.trvl-media.com/media/content/expus/graphics/static_content/fusion/v0.1b/images/airlines/vector/s/UK_sq.svg",
        name:"Vistara",duration:"1h 40m (Direct)",price:"₹5,116"}]


nav_div.innerHTML=navbar();
footer_div.innerHTML=footer()
