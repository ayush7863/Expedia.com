// function slidshow(){
    
//     let arr=["https://images.thrillophilia.com/image/upload/s--1W1S7cV0--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/048/579/original/1552897506_mahabaleshwar_places_feature.jpg.jpg?1552897506","https://wallpapercave.com/wp/fROEr8f.jpg","https://images.thrillophilia.com/image/upload/s--ffVDhkoA--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/013/736/original/1463259871_ladakh.jpg.jpg?1463259871"]
//     let container=document.getElementById("container");
    
//     let i=0
//     let img=document.createElement("img");
//     img.src=arr[0]
    
//     container.append(img);
//     i++
    
//     setInterval(function (){
//             if (i===3){
//                 i=0;
//             }
//             img.src=arr[i]
//             i++
//     },3000)
// }

// slidshow();

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
    img:"https://mediaim.expedia.com/localexpert/788398/f69838b8-089d-4762-aee4-13a88d88420e.jpg?impolicy=resizecrop&rw=500&rh=280"},

    {name:"Pune to Koyna Wildlife Sanctuary, Kolhapur, Belgaum & Goa Beach Tour",
    rating: 4.1,
    Price : 2342882,
    img:"https://mediaim.expedia.com/localexpert/3332206/f231f079-64aa-4314-9375-efd04e96f007.jpg?impolicy=resizecrop&rw=500&rh=280"},

    {name:"Best of Pune Private City Tour with Lunch and Transport.",
    rating:3.8,
    Price : 17619,
    img:"https://mediaim.expedia.com/localexpert/2413805/08ace7b4-ba19-4bf0-99eb-2d1040717a1f.jpg?impolicy=resizecrop&rw=500&rh=280"},

    {name:"Varanasi from Pune (with Flights): A Luxury Private Guided Tour in a Weekend",
    rating: 3.9,
    Price : 131173,
    img:"https://mediaim.expedia.com/localexpert/3913327/9228174b-526c-49cf-aaa7-a4f512b3e66b.jpg?impolicy=resizecrop&rw=500&rh=280"},

    {name:"Day Trip To Agra From Pune With Air Tickets",
    rating: 3.5,
    Price : 135315,
    img:"https://mediaim.expedia.com/localexpert/1134686/a431623f-16b6-4098-b6f8-f54901f942f6.jpg?impolicy=resizecrop&rw=500&rh=280"},

    {name:"2 day trip to Agra from Pune without air tickets",
    rating: 4.2,
    Price : 96089,
    img:"https://mediaim.expedia.com/localexpert/1134751/8506a706-691e-46b8-9087-1507a085b1e3.jpg?impolicy=resizecrop&rw=500&rh=280"},

    {name:"Pune to Alibaug Beach Tour",
    rating:3.3,
    Price : 90089,
    img:"https://mediaim.expedia.com/localexpert/3299095/b7125ba7-ccfc-4978-9954-e13229189c52.jpg?impolicy=resizecrop&rw=500&rh=280"},

    {name:"Pune to Mahabaleshwar Overnight Trip",
    rating:3.8,
    Price : 65991,
    img:"https://mediaim.expedia.com/localexpert/3299107/e8aeb73e-f455-4087-bdc0-31b852c52c98.jpg?impolicy=resizecrop&rw=500&rh=280"},

    {name:"Private Tour: Full-Day Bird Safari Excursion to Bhigwan from Pune",
    rating: 3.1,
    Price : 31411,
    img:"https://mediaim.expedia.com/localexpert/1176747/71ae8d5d-ed81-42c4-99dd-335b12fa8d18.jpg?impolicy=resizecrop&rw=500&rh=280"},

    {name:"Pune to Nashik Overnight trip",
    rating: 4.2,
    Price : 61000,
    img:"https://mediaim.expedia.com/localexpert/3299091/0c5fa0dd-9b08-4079-a2f1-9ef2764d5d8b.jpg?impolicy=resizecrop&rw=500&rh=280"},

    {name:"Private Tour: 4-Hour Walking Tour of Old Pune",
    rating: 3.4,
    Price : 12000,
    img:"https://mediaim.expedia.com/localexpert/1176759/a3048988-89d8-469d-9cfc-95be7852e58c.jpg?impolicy=resizecrop&rw=500&rh=280"},

    {name:"Golden Triangle in 4 Days ex-Pune (Delhi-Agra-Jaipur): Private Luxury Tour",
    rating:4.4,
    Price : 159978,
    img:"https://mediaim.expedia.com/localexpert/1161816/76b792d7-8f07-4f13-8d4e-d89d1c0e289f.jpg?impolicy=resizecrop&rw=500&rh=280"},

    {name:"Pune to Koyna Wildlife Sanctuary Overnight Tour",
    rating:4.5,
    Price : 81058,
    img:"https://mediaim.expedia.com/localexpert/3304117/108c8a03-1866-428d-bae2-c2d4ded9006d.jpg?impolicy=resizecrop&rw=500&rh=280"},

    {name:"Half-Day Small-Group Heritage Walking Tour of Old Pune",
    rating:4.7,
    Price : 13772,
    img:"https://mediaim.expedia.com/localexpert/1176758/b0511154-ac2e-4d05-9d86-2a2b6dee9bed.jpg?impolicy=resizecrop&rw=500&rh=280"},

    {name:"5-Day Tour to Delhi, Agra, Jaipur, Ranthambhore with one-way Commercial Flight",
    rating:4.8,
    Price : 93532,
    img:"https://mediaim.expedia.com/localexpert/2080807/f983aecd-f4da-44d3-ae16-524f65678c7e.jpg?impolicy=resizecrop&rw=500&rh=280"},

    {name:"Strasbourg Self-Guided Audio Tour",
    rating:4.3,
    Price : 420,
    img:"https://mediaim.expedia.com/localexpert/666117/6efcc04c-f933-420b-95b0-68c4497c49de.jpg?impolicy=resizecrop&rw=500&rh=280"},

    {name:"4-Hour Tour: Pune University Complex Cycling Private Tour",
    rating: 4.8,
    Price : 17435,
    img:"https://mediaim.expedia.com/localexpert/1176726/6b89ddd4-0a28-4ddc-89a9-2c632cdc12d0.jpg?impolicy=resizecrop&rw=500&rh=280"},

    {name:"1-Day Trip to Jaipur with Both Side Commercial Flights",
    rating:4.1,
    Price : 41224,
    img:"https://mediaim.expedia.com/localexpert/2149391/c720f1fe-3d6e-4d21-928b-5809ae0b0808.jpg?impolicy=resizecrop&rw=500&rh=280"},

    {name:"Full-Day Tour of Sinhagad Fort and Kadakwasla Lake from Pune",
    rating: 5.0,
    Price : 10102,
    img:"https://mediaim.expedia.com/localexpert/3420163/fcee5ecb-3ac6-4c6d-a17e-7ccdd9710488.jpg?impolicy=resizecrop&rw=500&rh=280"},

    {name:"Bungee Jumping",
    rating: 4.6,
    Price : 5051,
    img:"https://mediaim.expedia.com/localexpert/1070857/d732fa26-e638-472f-b3ae-a523a5ddf193.jpg?impolicy=resizecrop&rw=500&rh=280"},

    {name:"Bungee Jumping In Kolad",
    rating: 4.5,
    Price : 6010,
    img:"https://mediaim.expedia.com/localexpert/2558826/f7c9ed75-34a5-4c81-a15e-a7301e25f9c5.jpg?impolicy=resizecrop&rw=500&rh=280"},

    {name:"Experience the Story of Lord Ganesha in Pune with a local - Unique Walking Tour",
    rating:4.0,
    Price : 2100,
    img:"https://mediaim.expedia.com/localexpert/1176566/7aedce0a-2ad2-4b31-b168-94fb321bb011.jpg?impolicy=resizecrop&rw=500&rh=280"},

    {name:"Private Day Trek To Tung Fort From Mumbai",
    rating:4.3,
    Price : 9640,
    img:"https://mediaim.expedia.com/localexpert/2376516/884d3698-565b-4a90-8022-c2f71c8a7f35.jpg?impolicy=resizecrop&rw=500&rh=280"},
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

        let p1=document.createElement('p');
        p1.innerHTML="*Get a lower price by selecting multiple adult tickets";

        div.append(img,p_name,p,p_rating,price,p2,p1);

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

