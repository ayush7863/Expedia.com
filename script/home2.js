import navbar from "../components/navbar.js";
let nav_div = document.getElementById("navbar");
nav_div.innerHTML = navbar();

import footer from '../components/footer.js'
let footer_div=document.getElementById('footer')
footer_div.innerHTML=footer();

let objArr = [
  {
    img_url:
      "https://images.trvl-media.com/hotels/20000000/20000000/19994100/19994043/844765c5_b.jpg",
    title: "Hotel Asian Park",
    city: "srinagar",
    rating: "4.3/5(6 reviews)",
    date: "Sun 20 Nov-Tue,22 Nov",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/10000000/9850000/9843000/9842947/3edf8809_b.jpg",
    title: "Ghaya Grand Hotel",
    city: "Dubai",
    rating: "4.1/5(432 reviews)",
    date: "Sat 29 Oct - Wed,2 Nov ",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/2000000/1770000/1769100/1769023/90eb8bb6_b.jpg",
    title: "Grand Millennium Dubai",
    city: "Dubai",
    rating: "4.2/5(53 reviews)",
    date: "Sun 30 Oct - Thu,3 Nov",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/38000000/37870000/37869100/37869032/3b4cba94_b.jpg",
    title: "Hotel K Stars Beacon Vashi Navi Mu...",
    city: "Mumbai",
    rating: "4.1/5(70 reviews)",
    date: "Sat 1 Sep - Fri,4 Jan",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/31000000/30080000/30076800/30076769/w5370h3803x5y5-a4f1963f_b.jpg",
    title: "The Piccadily Lucknow",
    city: "Lucknow",
    rating: "4.0/5(110 reviews)",
    date: "Sun 20 Dec - Fri,4 Feb",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/4000000/3260000/3257600/3257541/0a4d7a7c_b.jpg",
    title: "Golden Tuilp Lucknow",
    city: "Lucknow",
    rating: "3.3/5(10 reviews)",
    date: "Mon 1 Feb - Fri,4 Mar",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/34000000/33230000/33223500/33223437/3f2d4213_b.jpg",
    title: "Shivas Galaxy Hotel",
    city: "Bengaluru",
    rating: "3.9/5(29 reviews)",
    date: "Sat 29 Oct - Mon,31 Oct",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/2000000/1870000/1868000/1867913/12cfa5a4_b.jpg",
    title: "Royal Orchid Centeral Pune",
    city: "Pune",
    rating: "4.1/5(103 reviews)",
    date: "Sat 29 Oct - Tue,1 Nov",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/1000000/330000/328800/328749/503c0031_b.jpg",
    title: "PARKROYAL COLLECTION Marina Bay...",
    city: "Singapore",
    rating: "4.3/5(1001 reviews)",
    date: "Mon 28 Nov - Fri,4 Jan",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/4000000/3040000/3037400/3037335/ff7e7bcf_b.jpg",
    title: "PARKROYAL on Beach Road,Singapore",
    city: "Singapore",
    rating: "4.3/5(998 reviews)",
    date: "Fri 25 Nov - Mon,28 Nov",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/1000000/530000/528400/528337/36eee0ed_b.jpg",
    title: "The Rubens at the Palace",
    city: "London",
    rating: "4.3/5(1001 reviews)",
    date: "Sun 4 Dec - Fri,4 Jan",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/1000000/530000/523800/523756/d3d9a2a8_b.jpg",
    title: "The Milestone Hotel",
    city: "London",
    rating: "4.8/5(308 reviews)",
    date: "Sun 30 Oct - Thu,3 Nov",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/3000000/2600000/2600000/2599949/34d2ffef_b.jpg",
    title: "Sonesta Inn",
    city: "Goa",
    rating: "4.2/5(104 reviews)",
    date: "Sun 6 Nov - Tue,8 Nov",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/20000000/19550000/19540500/19540419/b9fbcab0_b.jpg",
    title:"Welcome Heritage Mani Mansion",
    city: "Ahmedabad",
    rating: "4.3/5(3 reviews)",
    date: "Sat 3 Oct - Mon,31 Oct",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/1000000/50000/49300/49286/58f93db6_b.jpg",
    title: "Avani Atrium Bangkok Hotel",
    city: "Bangkok",
    rating: "4.3/5(997 reviews)",
    date: "Sun 13 Nov - Fri,4 Jan",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/3000000/2340000/2339900/2339868/d5fbbe4b_b.jpg",
    title: "Bandara Suites Silom",
    city: "Bangkok",
    rating: "4.3/5(999 reviews)",
    date: "Sat 27 Oct - Mon,31 Oct",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/12000000/11980000/11971700/11971622/8dd401e8_b.jpg",
    title: "The William Vale",
    city: "New York",
    rating: "4.3/5(1000 reviews)",
    date: "Tue 1 Nov - Sat,4 Nov",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/4000000/3610000/3606300/3606282/aedc4c3c_b.jpg",
    title: "NoMo SoHo",
    city: "New York",
    rating: "4.0/5(1002 reviews)",
    date: "Sun 18 Dec - Thu,22 Dec",
  },
];
let section2 = document.getElementById("section-2");

objArr.map(function (el) {
  let div = document.createElement("div");

  let img = document.createElement("img");
  img.src = el.img_url;

  let h4 = document.createElement("h4");
  h4.innerText = el.title;

  let p = document.createElement("p");
  p.innerText = el.city;

  let rating = document.createElement("p");
  rating.innerText = el.rating;

  let div2 = document.createElement("div");
  div2.id = "div-2";
  div2.style.border = "0px solid black";
  div2.style.height = "20px";
  let div2_1 = document.createElement("div");
  div2_1.id = "div-2-1";

  let div2_2 = document.createElement("div");
  div2_2.id = "div-2-2";

  div2_2.innerText = "Member Price available  ";

  let div3 = document.createElement("div");
  div3.id = "div-3";

  let div3_1 = document.createElement("div");
  div3_1.id = "div-3-1";
  div3_1.innerText = el.date;

  let div3_2 = document.createElement("div");
  div3_2.id = "div-3-2";
  let h5 = document.createElement("h5");
  h5.innerText = `Sign in to see Member price`;

  div3_2.append(h5);
  // div3_2.innerText=el.mem

  div2.append(div2_1, div2_2);

  div3.append(div3_1, div3_2);

  div.append(img, h4, p, rating, div2, div3);
  section2.append(div);
});

let button2=document.getElementById('btn-2')



button2.addEventListener('click',function(){
    button2.style.visibility="hidden"
    let section3=document.getElementById('section-3')
    section3.style.top='3600px'

    let sec_fot=document.getElementById('footer')
    //sec_fot.style.visibility='hidden'
    sec_fot.style.top='3900px'
 

  

    
   let objArr=[
    {
    img_url:
      "https://images.trvl-media.com/hotels/3000000/2600000/2600000/2599949/34d2ffef_b.jpg",
    title: "Sonesta Inn",
    city: "Goa",
    rating: "4.2/5(104 reviews)",
    date: "Sun 6 Nov - Tue,8 Nov",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/20000000/19550000/19540500/19540419/b9fbcab0_b.jpg",
    title:"Welcome Heritage Mani Mansion",
    city: "Ahmedabad",
    rating: "4.3/5(3 reviews)",
    date: "Sat 3 Oct - Mon,31 Oct",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/1000000/50000/49300/49286/58f93db6_b.jpg",
    title: "Avani Atrium Bangkok Hotel",
    city: "Bangkok",
    rating: "4.3/5(997 reviews)",
    date: "Sun 13 Nov - Fri,4 Jan",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/3000000/2340000/2339900/2339868/d5fbbe4b_b.jpg",
    title: "Bandara Suites Silom",
    city: "Bangkok",
    rating: "4.3/5(999 reviews)",
    date: "Sat 27 Oct - Mon,31 Oct",
  },
   {
    img_url:
      "https://images.trvl-media.com/hotels/2000000/1870000/1868000/1867913/12cfa5a4_b.jpg",
    title: "Royal Orchid Centeral Pune",
    city: "Pune",
    rating: "4.1/5(103 reviews)",
    date: "Sat 29 Oct - Tue,1 Nov",
  },
    {
    img_url:
      "https://images.trvl-media.com/hotels/10000000/9850000/9843000/9842947/3edf8809_b.jpg",
    title: "Ghaya Grand Hotel",
    city: "Dubai",
    rating: "4.1/5(432 reviews)",
    date: "Sat 29 Oct - Wed,2 Nov ",
  },

   ]

   objArr.map(function(el){
     let div = document.createElement("div");

  let img = document.createElement("img");
  img.src = el.img_url;

  let h4 = document.createElement("h4");
  h4.innerText = el.title;

  let p = document.createElement("p");
  p.innerText = el.city;

  let rating = document.createElement("p");
  rating.innerText = el.rating;

  let div2 = document.createElement("div");
  div2.id = "div-2";
  div2.style.border = "0px solid black";
  div2.style.height = "20px";
  let div2_1 = document.createElement("div");
  div2_1.id = "div-2-1";

  let div2_2 = document.createElement("div");
  div2_2.id = "div-2-2";

  div2_2.innerText = "Member Price available  ";

  let div3 = document.createElement("div");
  div3.id = "div-3";

  let div3_1 = document.createElement("div");
  div3_1.id = "div-3-1";
  div3_1.innerText = el.date;

  let div3_2 = document.createElement("div");
  div3_2.id = "div-3-2";
  let h5 = document.createElement("h5");
  h5.innerText = `Sign in to see Member price`;

  div3_2.append(h5);
  // div3_2.innerText=el.mem

  div2.append(div2_1, div2_2);

  div3.append(div3_1, div3_2);

  div.append(img, h4, p, rating, div2, div3);
  section2.append(div);

   })
  
})

// button2.addEventListener('click',function(){
    

// })
 