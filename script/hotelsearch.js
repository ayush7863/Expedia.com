import navbar from "../components/navbar.js";
import footer from "../components/footer.js";
let nav_div=document.getElementById("navbar");
nav_div.innerHTML=navbar();

//hotel data 
function hotel(u,n,r,p,c,pt){
  this.url=u;
  this.name=n;
  this.rating=r;
  this.price=p;
  this.city=c;
  this.proprtyType=pt;
}
let hotelData=[];
let h1 = new hotel("https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/31000000/30790000/30783800/30783748/4ec39822_b.jpg",
"ITC Grand","⭐⭐⭐⭐",22050," Goa","hotel");
hotelData.push(h1);

let h2 = new hotel("https://images.trvl-media.com/hotels/7000000/6250000/6244400/6244326/aee15893.jpg?impolicy=resizecrop&rw=455&ra=fit",
"Coconut Creek","⭐⭐⭐",9108," Goa","hotel");
hotelData.push(h2);

let h3 = new hotel("https://images.trvl-media.com/hotels/5000000/4060000/4051300/4051243/41f8fa89.jpg?impolicy=resizecrop&rw=455&ra=fit",
"Grand Hayatt","⭐⭐⭐⭐⭐",20000," Goa","hotel");
hotelData.push(h3);

let h4 = new hotel("https://images.trvl-media.com/hotels/47000000/46210000/46205200/46205118/1583475f.jpg?impolicy=resizecrop&rw=455&ra=fit",
"Taj Resort","⭐⭐⭐",19000," Goa","hotel");
hotelData.push(h4);

let h5 = new hotel("https://images.trvl-media.com/hotels/3000000/2190000/2185200/2185154/9391a4d8.jpg?impolicy=resizecrop&rw=455&ra=fit",
"Heritage Village Resort","⭐⭐⭐",9499," Goa","hotel");
hotelData.push(h5);

let h6 = new hotel("https://images.trvl-media.com/hotels/1000000/30000/20300/20285/cb62ebfa.jpg?impolicy=resizecrop&rw=455&ra=fit",
"Cidade De Goa","⭐⭐⭐⭐",13900," Goa","hotel");
hotelData.push(h6);

let h7 = new hotel("https://images.trvl-media.com/hotels/31000000/30790000/30783800/30783748/28cd0aa1.jpg?impolicy=resizecrop&rw=455&ra=fit",
"ITC Grand","⭐⭐⭐⭐",22050," Kolkata","hotel");
hotelData.push(h7);

let h8= new hotel("https://images.trvl-media.com/hotels/1000000/890000/881600/881558/6cbc2547.jpg?impolicy=resizecrop&rw=455&ra=fit",
"Bay15","⭐⭐⭐⭐",6000," Kolkata","hotel");
hotelData.push(h8);

let h9= new hotel("https://images.trvl-media.com/hotels/71000000/70330000/70324400/70324366/8d721488.jpg?impolicy=resizecrop&rw=455&ra=fit",
"Vivanta ","⭐⭐⭐",10000," Kolkata","hotel");
hotelData.push(h9);

let h10= new hotel("https://images.trvl-media.com/hotels/41000000/40740000/40739900/40739881/dc2aeed4.jpg?impolicy=resizecrop&rw=455&ra=fit",
"Sandalwood","⭐⭐⭐⭐",11000," Kolkata","hotel");
hotelData.push(h10);

let h11 = new hotel("https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6100000/6097600/6097535/e60af9b9_b.jpg",
"The Amaya Resort","⭐⭐⭐⭐",9450," Kolkata","hotel");
hotelData.push(h11);

let h12 = new hotel("https://images.trvl-media.com/hotels/20000000/19220000/19217600/19217545/cd617a3f.jpg?impolicy=resizecrop&rw=455&ra=fit",
"The Rajwari","⭐⭐⭐⭐⭐",16095," Kolkata","hotel");
hotelData.push(h12);

let h13= new hotel("https://images.trvl-media.com/hotels/27000000/26560000/26554200/26554165/a0118907.jpg?impolicy=resizecrop&rw=455&ra=fit",
"The Golden Retreat","⭐⭐⭐⭐",11749," Bengaluru","hotel");
hotelData.push(h13);

let h14= new hotel("https://images.trvl-media.com/hotels/1000000/470000/465100/465008/1f8a8fdf.jpg?impolicy=resizecrop&rw=455&ra=fit",
"Seabird Hotel","⭐⭐⭐⭐",11000," Bengaluru","hotel");
hotelData.push(h14);

let h15= new hotel("https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/19000000/18930000/18923100/18923089/99854903_b.jpg",
"ITC Gardenia","⭐⭐⭐⭐",16500," Bengaluru","hotel");
hotelData.push(h15);

let h16= new hotel("https://images.trvl-media.com/hotels/7000000/6090000/6081800/6081726/b5a7a2dc.jpg?impolicy=resizecrop&rw=455&ra=fit",
"Hyatt Centric","⭐⭐⭐",8100," Bengaluru","hotel");
hotelData.push(h16);

let h17= new hotel("https://images.trvl-media.com/hotels/1000000/530000/526400/526340/f5764d77.jpg?impolicy=resizecrop&rw=455&ra=fit",
"The Ottera","⭐⭐⭐⭐⭐",16000," Bengaluru","hotel");
hotelData.push(h17);

let h18= new hotel("https://images.trvl-media.com/hotels/2000000/1790000/1782800/1782707/1c8eed3d.jpg?impolicy=resizecrop&rw=455&ra=fit",
"JW Marriott","⭐⭐⭐⭐⭐",22000,"Delhi","hotel");
hotelData.push(h18);

let h19= new hotel("https://images.trvl-media.com/hotels/6000000/5260000/5250400/5250322/ed201943.jpg?impolicy=resizecrop&rw=455&ra=fit",
"FabExpress Pearl","⭐⭐⭐⭐",18000," Delhi","hotel");
hotelData.push(h19);

let h20= new hotel("https://images.trvl-media.com/hotels/1000000/30000/21700/21672/3b47de32.jpg?impolicy=resizecrop&rw=455&ra=fit",
"The Oberoi","⭐⭐⭐",7000," Bengaluru","hotel");
hotelData.push(h20);

localStorage.setItem("hotel",JSON.stringify(hotelData));

let s1=JSON.parse(localStorage.getItem("cart"))||[];

function display(hotelData){
  document.querySelector("#hotel").innerHTML=""

hotelData.map(function(el,i,arr){
  let box1=document.createElement("div");
  let image = document.createElement("img");
  image.src=el.url;

  box1.addEventListener("click",myFunction);
  function myFunction(){
  addToCart(el);
  window.open('hotels.html','_blank');
  }

  image.setAttribute("class","image");

  let box2=document.createElement("div");
  let name = document.createElement("h3");
  name.innerText=el.name;
  let rating = document.createElement("h3");
  rating.innerText = el.rating;
  let price1 = document.createElement("h3");
  price1.innerText = "₹"+el.price;
  let city = document.createElement("h3");
  city.innerText = el.city;
  let ref=document.createElement("p");
  ref.innerText="Fully refundable";
  let rese=document.createElement("p");
  rese.innerText="Reserve now, pay later";
  let rati=document.createElement("p");
  rati.innerText="4/5 Excellent(402 reviews)"
  price1.setAttribute("class","price1")
  box2.setAttribute("class","box2")
  let box4=document.createElement("div");
  box4.append(ref,rese,rati)

  let box5=document.createElement("div");
  box5.append(rating,city)
  box5.setAttribute("class","box5")
  box4.setAttribute("class","box4")
  box2.append(name,box5,box4);
  box1.setAttribute("class","box1");

  box1.append(image,box2,price1);
  document.getElementById("hotel").append(box1);

});
}
//sort function 
function sort(){
  let select = document.getElementById("sort").value;
  if(select=="htl"){
    hotelData.sort(function(a,b){
      return b.price-a.price;
      });
      display(hotelData);
       
  }if(select=="lth"){
    hotelData.sort(function(a,b){
      return a.price-b.price;
      });
      display( hotelData);
  }
}

//sort by rating 
function sortByR3(){
  hotelData.sort(function(a,b){
    if(a.rating>b.rating) return 1;
    if(a.rating<b.rating) return -1;
    return 0;
})
display(hotelData);
}
function sortByR5(){
  hotelData.sort(function(a,b){
    if(a.rating<b.rating) return 1;
    if(a.rating>b.rating) return -1;
    return 0;
})
display(hotelData);
}

function search(){
  let destination = document.getElementById("search").value;
  let inDate = document.getElementById("inDate").value;
  let outDate = document.getElementById("outDate").value;
  let room = document.getElementById("room").value;
  let person = document.getElementById("person").value;
  console.log(destination,inDate,outDate,room,person);
  if(destination&&inDate&&outDate&&room&&person){
    let hotelData= JSON.parse(localStorage.getItem("hotel"))||[];
    let searchArray=[];
    let x = destination.toLowerCase().trim();
    hotelData.filter(function(el,i,arr){
      let t=(el.city).trim();
      let u=x.trim();
      if(x===t){
        searchArray.push(el);
      }
  });
  console.log(searchArray)
  document.querySelector("#hotel").innerHTML=""

  searchArray.map(function(el,i,arr){
     let box1=document.createElement("div");
     let image = document.createElement("img");
     image.src=el.url;

     box1.addEventListener("click",myFunction);
     function myFunction(){
      addToCart(el);
      window.open('staysIndividual.html','_blank');
     }

     image.setAttribute("class","image");

     let box2=document.createElement("div");
     let name = document.createElement("h3");
     name.innerText=el.name;
     let rating = document.createElement("h3");
     rating.innerText = el.rating;
     let price1 = document.createElement("h3");
     price1.innerText = "₹"+el.price;
     let city = document.createElement("h3");
     city.innerText = el.city;
     price1.style.marginLeft = "100px";
     price1.style.marginTop = "120px";
     let ref=document.createElement("p");
     ref.innerText="Fully refundable";
     let rese=document.createElement("p");
     rese.innerText="Reserve now, pay later";
     let rati=document.createElement("p");
     rati.innerText="4/5 Excellent(402 reviews)"
     price1.setAttribute("class","price1")
     box2.setAttribute("class","box2")
     let box4=document.createElement("div");
     box4.append(ref,rese,rati)

     let box5=document.createElement("div");
     box5.append(rating,city)
     box5.setAttribute("class","box5")
     box4.setAttribute("class","box4")
     box2.append(name,box5,box4);
     box1.setAttribute("class","box1");

     box1.append(image,box2,price1);
     document.getElementById("hotel").append(box1);

    });
  }else{
    alert("please fill all the details");
  }
}
display(hotelData);

//sort by price using checkbox
function sortByPrice(){
  //console.log("inside Price");
  let hotelData= JSON.parse(localStorage.getItem("hotel"))||[];
  let searchArray=[];
  let x = document.getElementById("p5").value;
  console.log(x);
 hotelData.map(function(el){
   if(el.price >= x){
     searchArray.push(el);
   }
 });
 hotelData=[];
 display(searchArray);

}

let sByP=document.getElementById("searchbyProperty");
sByP.addEventListener("keypress", function(event){
  if (event.key === "Enter"){
    event.preventDefault();
    searchByProperty();
  }

});

function searchByProperty(){
  let searchValue=document.getElementById("searchbyProperty").value;
  let hotelData= JSON.parse(localStorage.getItem("hotel"))||[];
  let x = searchValue.toLowerCase();
  console.log(x);
  let searchArray=[];
  hotelData.map(function(el){
    if(el.proprtyType == x){
      searchArray.push(el);
    }
  });
  hotelData=[];
  display(searchArray);
}

function addToCart(el){
 let cartData=[];
  cartData.push(el);
  localStorage.setItem("cart",JSON.stringify(cartData));
  alert("Book The Room");
}