import navbar from "../components/navbar.js";
let nav_div=document.getElementById("navbar");
nav_div.innerHTML=navbar();


function slidshow(){
    
    let arr=["https://images.thrillophilia.com/image/upload/s--1W1S7cV0--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/048/579/original/1552897506_mahabaleshwar_places_feature.jpg.jpg?1552897506","https://wallpapercave.com/wp/fROEr8f.jpg","https://images.thrillophilia.com/image/upload/s--ffVDhkoA--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/013/736/original/1463259871_ladakh.jpg.jpg?1463259871"]
    let container=document.getElementById("container");
    
    let i=0
    let img=document.createElement("img");
    img.src=arr[0]
    
    container.append(img);
    i++
    
    setInterval(function (){
            if (i===3){
                i=0;
            }
            img.src=arr[i]
            i++
    },3000)
}

slidshow();

const travelPhotos=[
    {name:"1-Day Trip to The Taj Mahal and Agra with Commercial Return Flights",
    rating:5.0,
    Price: 7100,
    img:"https://mediaim.expedia.com/localexpert/2331289/fa58f22c-3b58-4b7c-b173-cf4c6b838944.jpg?impolicy=resizecrop&rw=500&rh=280"},
    
    {name:"Pune Walking Tour With a Punekar",
    rating:5.0,
    Price: 2535.80,
    img:"https://mediaim.expedia.com/localexpert/2331514/34e23713-5ae3-45fd-8384-74c6f5522dad.jpg?impolicy=resizecrop&rw=500&rh=280"},
    
    {name:"Lonavala - Hill Station Tour From Mumbai",
    rating:5.0,
    Price: 22086.49,
    img:"https://mediaim.expedia.com/localexpert/1714754/cffe9623-ce53-4032-9fc6-308df1e39bc2.jpg?impolicy=resizecrop&rw=500&rh=280"},

    {name:"2-Day Tour to The Taj Mahal and Agra from Pune with Commercial Return Flight",
    rating:5.0,
    Prince: 85259.72,
    img:"https://mediaim.expedia.com/localexpert/2331384/b945059f-e6b9-429e-91d4-28a3d4c6c1ee.jpg?impolicy=resizecrop&rw=500&rh=280"},

    {name:"Pune's Full Day Private Tour Activities",
    rating:4.0,
    Price : 20184.96,
    img:"https://mediaim.expedia.com/localexpert/4579038/c4652544-f912-4a6b-8249-d757377f9b39.jpg?impolicy=resizecrop&rw=500&rh=280"},

    {name:"Private 2-Day Tour to The Taj Mahal and Agra with Both Side Commercial Flight",
    rating:4.3,
    Price : 82391.40,
    img:"https://mediaim.expedia.com/localexpert/2080868/526ed46d-c405-49a6-a0ce-9f99a9da37f3.jpg?impolicy=resizecrop&rw=500&rh=280"},

    {name:"Experience the Story of Lord Ganesha in Pune with a local - Unique Walking Tour",
    rating:4.0,
    Price : 2452.26,
    img:"https://mediaim.expedia.com/localexpert/1176566/7aedce0a-2ad2-4b31-b168-94fb321bb011.jpg?impolicy=resizecrop&rw=500&rh=280"},

    {name:"Weekend Trip to Amritsar ex-Pune: Golden Temple, Heritage Walk and much more!",
    rating:3.0,
    Price : 134112.50,
    img:"https://mediaim.expedia.com/localexpert/788398/f69838b8-089d-4762-aee4-13a88d88420e.jpg?impolicy=resizecrop&rw=500&rh=280"}
]

localStorage.setItem("travelPhotos",JSON.stringify(travelPhotos));

let data=JSON.parse(localStorage.getItem("travelPhotos"));

function dummydata(data){
    let append_travel=document.getElementById("travelPhotos");
    append_travel.innerHTML=null;
    append_travel.id="travelPhotos";

    data.forEach(function (element){
        let div=document.createElement("div");

        let p_name=document.createElement("h2");
        p_name.innerHTML=element.name;

        let p_rating=document.createElement("h3");
        p_rating.innerHTML=`Rating: ${element.rating}/5.`;

        let img=document.createElement("img");
        img.id="Poster";
        img.src=element.img;

        let p=document.createElement('p');
        p.innerHTML="Free cancellation available";

        let price=document.createElement('h3');
        price.innerHTML=`RS. ${element.Price} /-`;

        let p2=document.createElement('p');
        p2.innerHTML="per adult*";
        p2.id="per";

        let buy=document.createElement('button');
        buy.innerText="Buy"
        buy.id="buy"
        buy.addEventListener("click",function(){
            window.location.href="./thingsPayment.html"
        })

        let p1=document.createElement('p');
        p1.innerHTML="*Get a lower price by selecting multiple adult tickets";

        

        div.append(img,p_name,p,p_rating,price,p2,buy,p1);

        append_travel.append(div);
    })

}



function sortLH(){
    let data=JSON.parse(localStorage.getItem("travelPhotos"));

    let sort=data.sort((a,b)=>a.rating-b.rating);
    dummydata(sort);
};

function sortHL(){
    let data=JSON.parse(localStorage.getItem("travelPhotos"));

    let sort=data.sort((a,b)=>b.rating-a.rating);
    dummydata(sort);
};

// function PriceLH(){
//     console.log("function check")
//     let data=JSON.parse(localStorage.getItem("travelPhotos"));

//     let sort=data.sort((a,b)=>a.Price-b.Price);
//     dummydata(sort);
// };

// function PriceHL(){
//     console.log("function check")
//     let data=JSON.parse(localStorage.getItem("travelPhotos"));

//     let sort=data.sort((a,b)=>b.Price-a.Price);
//     dummydata(sort);
// };

let getdatamovie=new Promise(function (resolve,reject){
    setTimeout(function (){
        let travelPhotos=data;
        if (data !=null){
            resolve(data);
        }else{
            reject("ISSUE FROM SERVER")
        }

    },5000)
})

getdatamovie.then(function (res){
    dummydata(res);
}).catch(function (err){
    console.log(("err:",err));
})

let random = document.getElementById("random");
random.addEventListener("click",function(){
    randomm();
})

function randomm(){
    
}

