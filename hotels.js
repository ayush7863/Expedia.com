var cartData=JSON.parse(localStorage.getItem("cart"))||[];
     console.log(cartData);
     let url1="https://media-cdn.tripadvisor.com/media/photo-s/03/a4/33/51/moonrise-hotel.jpg";
     let url2="http://moonrisehotel.com/wp-content/uploads/2013/11/SuperiorKing-500x337.jpg";
     let url3="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/91/35/bc/double-queen-beds.jpg?w=900&h=-1&s=1";
     let url4="https://www.paric.com/wp-content/uploads/2016/07/Moonrise-show-room-003-copy.jpg";

     display(cartData)

 function display(cartData){
    cartData.map(function(el,i,arr){
        let box1=document.createElement("div");
        let image = document.createElement("img");
        image.src=el.url;
        image.setAttribute("id","image");
        let img1=document.createElement("img");
        img1.src=url1;
        img1.setAttribute("id","img1");
   
        let img2=document.createElement("img");
        img2.src=url2;
        img2.setAttribute("id","img2");
   
        let img3=document.createElement("img");
        img3.src=url3;
        img3.setAttribute("id","img3");
   
        let img4=document.createElement("img");
        img4.src=url4;
        img4.setAttribute("id","img4");
   
        let box2=document.createElement("div");
        let name = document.createElement("h3");
        name.innerText=el.name;
        name.style.fontSize="45px";
        name.style.marginTop="80px"
        name.style.marginLeft="20px"
        let rating = document.createElement("h3");
        rating.innerText = el.rating;
        rating.style.fontSize="25px";
        rating.style.marginLeft="20px"
        rating.style.marginTop="-40px"
        let price1 = document.createElement("h3");
        price1.innerText = "4.3/5 Excellent";
        price1.style.marginLeft="20px"

        box2.append(name,rating);
   
        let box3=document.createElement("div");
        let box=document.createElement("div");
        box.append(img1,img2,img3,img4);
        box3.append(image,box);
        box3.style.display="flex";
   
        box.setAttribute("id","box")
        box3.setAttribute("id","box3")
        box1.append(box3, box2,price1);
        document.getElementById("roomDetails").append(box1);
   
   });
 }

console.log(hotelData);

var hotelData=JSON.parse(localStorage.getItem("hotel"))||[];
display1(hotelData);
function display1(hotelData){
     document.querySelector("#addForRef").innerHTML=""

     hotelData.map(function(el,i,arr){
          let box1=document.createElement("div");
          let image = document.createElement("img");
          image.src=el.url;

          image.addEventListener("click",myFunction);
          function myFunction(){
               addToCart(el);
               window.open('hotels.html','_blank');
          }







     image.setAttribute("id","image1");

     let box2=document.createElement("div");
     let name = document.createElement("h3");
     name.innerText=el.name;
     let rating = document.createElement("h3");
     rating.innerText = el.rating;
     let price1 = document.createElement("h3");
     price1.innerText = el.price;

     let city = document.createElement("h3");
     city.innerText = el.city;
     price1.style.marginLeft = "100px";
     price1.style.marginTop = "120px";

     box2.setAttribute("id","box2")

     box2.append(name,rating,city);
     box1.setAttribute("id","box1");

     box1.append(image,box2);
     document.getElementById("addForRef").append(box1);

});

}
function addToCart(el){
  cartData=[];
  cartData.push(el);
  localStorage.setItem("cart",JSON.stringify(cartData));
  alert("Book The Room");
}


// function bookingBtn(){
//      window.location.href="#fillRoom";
// }

// function bookRoom(){
//      let inDate = document.getElementById("inDate").value;
//      let outDate = document.getElementById("outDate").value;
//      let room = document.getElementById("room").value;
//      let person = document.getElementById("person").value;
//      console.log(inDate,outDate,room,person);

//      let personalInfo = [{
//           TotalRoom:room,
//           TotalPerson:person,
//           CheckIn:inDate,
//           CheckOut:outDate,
//      }];

//      localStorage.setItem("perInfo",JSON.stringify(personalInfo));
//      console.log(personalInfo);
//      if(inDate&&outDate&&room&&person){
//           window.open("Payment.html");
//      }else{
//           alert("Fill All The Details");
//      }
    
// }