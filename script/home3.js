import navbar from "../components/navbar.js";
let nav_div = document.getElementById("navbar");
nav_div.innerHTML = navbar();

import footer from '../components/footer.js'
let footer_div=document.getElementById('footer')
footer_div.innerHTML=footer();


// var nowTemp = new Date();
// var now = new Date(
//   nowTemp.getFullYear(),
//   nowTemp.getMonth(),
//   nowTemp.getDate(),
//   0,
//   0,
//   0,
//   0
// );

// var checkin = $("#dp1")
//   .datepicker({
//     beforeShowDay: function (date) {
//       return date.valueOf() >= now.valueOf();
//     },
//     autoclose: true,
//   })
//   .on("changeDate", function (ev) {
//     if (
//       ev.date.valueOf() > checkout.datepicker("getDate").valueOf() ||
//       !checkout.datepicker("getDate").valueOf()
//     ) {
//       var newDate = new Date(ev.date);
//       newDate.setDate(newDate.getDate() + 1);
//       checkout.datepicker("update", newDate);
//     }
//     $("#dp2")[0].focus();
//   });

// var checkout = $("#dp2")
//   .datepicker({
//     beforeShowDay: function (date) {
//       if (!checkin.datepicker("getDate").valueOf()) {
//         return date.valueOf() >= new Date().valueOf();
//       } else {
//         return date.valueOf() > checkin.datepicker("getDate").valueOf();
//       }
//     },
//     autoclose: true,
//   })
//   .on("changeDate", function (ev) {});

let objArr = [
  {
    logo_url:
      "https://images.trvl-media.com/media/content/expus/graphics/static_content/fusion/v0.1b/images/airlines/vector/s/UA_sq.svg",
    country: "United",
    destination: "New Delhi(DEL)-New York(NYC)",

    class: "Economy Return",
    date: "Sat 29 Oct - Wed,2 Nov ",
    ruppee: "₹87,381",
  },
  {
    logo_url:
      "https://images.trvl-media.com/media/content/expus/graphics/static_content/fusion/v0.1b/images/airlines/vector/s/TK_sq.svg",
    country: "Turkish Airlines",
    destination: "New Delhi(DEL)-Chicago(CHI)",

    class: "Economy Return",
    date: "Sun 16 Oct - Sun 20 Nov ",
    ruppee: "₹91,023",
  },
  {
    logo_url:
      "https://images.trvl-media.com/media/content/expus/graphics/static_content/fusion/v0.1b/images/airlines/vector/s/BA_sq.svg",
    country: "British Airways",
    destination: "Hyderabad(HYD)-New York(NYC)",

    class: "Economy Return",
    date: "Tue 18 Oct - Wed,2 Nov ",
    ruppee: "₹108,622",
  },

  {
    logo_url:
      "https://images.trvl-media.com/media/content/expus/graphics/static_content/fusion/v0.1b/images/airlines/vector/s/UA_sq.svg",
    country: "United",
    destination: "New Delhi(DEL)-San Francisco(SFO)",

    class: "Economy Return",
    date: "Wed 26 Oct - Wed,9 Nov ",
    ruppee: "₹97,814",
  },
  {
    logo_url:
      "https://images.trvl-media.com/media/content/expus/graphics/static_content/fusion/v0.1b/images/airlines/vector/s/EY_sq.svg",
    country: "Etihad Airways",
    destination: "Hyderabad(HYD)-Chicago(CHI)",

    class: "Economy Return",
    date: "Mon 17 Oct - Wed,2 Nov ",
    ruppee: "₹104,602",
  },
  {
    logo_url:
      "https://images.trvl-media.com/media/content/expus/graphics/static_content/fusion/v0.1b/images/airlines/vector/s/TK_sq.svg",
    country: "Turkish Airlines",
    destination: "Hyderabad(HYD)-New York(NYC)",

    class: "Economy Return",
    date: "Tue 18 Oct - Wed,2 Nov ",
    ruppee: "₹80,622",
  },
];

let section4_1 = document.getElementById("section-4_1");

const display = () => {
  objArr.map(function (el) {
    let div = document.createElement("div");

    let logo_url = document.createElement("img");
    logo_url.src = el.logo_url;
    logo_url.id = "logo";

    let p = document.createElement("p");
    p.innerText = el.country;
    let img_div = document.createElement("div");
    let img_div_1 = document.createElement("div");
    img_div_1.append(logo_url);
    let img_div_2 = document.createElement("div");
    img_div_2.append(p);

    img_div.append(img_div_1, img_div_2);
    img_div.id = "logo_div";

    let h4 = document.createElement("h4");
    h4.innerText = el.destination;
    h4.id = "destination";

    let clas = document.createElement("p");
    clas.innerText = el.class;
    clas.id = "cl";

    let div_1 = document.createElement("div");
    div_1.id = "section-4_div_div-1";

    let div_2 = document.createElement("div");
    div_2.id = "div_2";

    let div_2_1 = document.createElement("div");
    div_2_1.id = "div_2_1";
    let p1 = document.createElement("p");
    p1.innerText = el.date;
    div_2_1.append(p1);

    let div_2_2 = document.createElement("div");
    let h5 = document.createElement("h3");
    h5.innerText = el.ruppee;
    div_2_2.append(h5);

    div_2.append(div_2_1, div_2_2);

    div.append(img_div, h4, clas, div_1, div_2);

    section4_1.append(div);
  });
};
display();

let objArr2 = [
  {
    img_url:
      "https://images.trvl-media.com/hotels/17000000/16010000/16007600/16007579/5aeda05e_b.jpg",
    title: "The WIlliamsburg Hotel",
    city: "New York",
    rating: "4.3/5(6 reviews)",
    date: "Sun 20 Nov-Tue,22 Nov",
    mem:'15% off',
    ruppee: "₹87,381",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/8000000/7460000/7451300/7451233/e302f5f1_b.jpg",
    title: "The Marmara Park Avenue",
    city: "New York",
    rating: "4.1/5(432 reviews)",
    date: "Sat 29 Oct - Wed,2 Nov ",
    mem:'10% off',
    ruppee: "₹87,381",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/7000000/6470000/6468000/6467973/d477aa33_b.jpg",
    title: "WestHouse New York",
    city: "New York",
    rating: "4.2/5(53 reviews)",
    date: "Sun 30 Oct - Thu,3 Nov",
    mem:'Member Price available',
    ruppee: "₹87,381",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/1000000/30000/22300/22265/d6d324e2_b.jpg",
    title:"The Michelangelo Hotel",
    city: "New York",
    rating: "4.1/5(70 reviews)",
    date: "Sat 1 Sep - Fri,4 Jan",
    mem:'Member Price available',
    ruppee: "₹87,381",

  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/4000000/3580000/3573000/3572938/07e8466d_b.jpg",
    title: "Royalton Park Avenue",
    city: "New York",
    rating: "4.0/5(110 reviews)",
    date: "Sun 20 Dec - Fri,4 Feb",
    mem:'Member Price available',
    ruppee: "₹20,381",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/1000000/30000/20600/20571/5ae420b7_b.jpg",
    title: "InterContinental New York Barclay...",
    city: "New York",
    rating: "3.3/5(10 reviews)",
    date: "Mon 1 Feb - Fri,4 Mar",
    mem:'Member Price available',
    ruppee: "₹37,381",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/1000000/30000/24600/24548/02372609_b.jpg",
    title: "Westgate Hotel",
    city: "San Diego",
    rating: "3.9/5(29 reviews)",
    date: "Sat 29 Oct - Mon,31 Oct",
    mem:'25% off',
    ruppee: "₹17,381",
  },

  {
    img_url:
      "https://images.trvl-media.com/hotels/42000000/41510000/41504800/41504735/8077fd39_b.jpg",
    title: "Legacy Resort Hotel & Spa",
    city: "San Diego",
    rating: "4.1/5(103 reviews)",
    date: "Sat 29 Oct - Tue,1 Nov",
     mem:'5% off',
    ruppee: "₹27,381",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/1000000/20000/11800/11725/88513545_b.jpg",
    title: "Sheraton Mission Valley San Diego",
    city: "San Diego",
    rating: "4.3/5(1001 reviews)",
    date: "Mon 28 Nov - Fri,4 Jan",
     mem:'15% off',
    ruppee: "₹10,381",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/1000000/30000/21400/21394/b02514eb_b.jpg",
    title: "Town and Country San Diego",
    city: "San Diego",
    rating: "4.3/5(998 reviews)",
    date: "Fri 25 Nov - Mon,28 Nov",
     mem:'Member Price available',
    ruppee: "₹10,121",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/27000000/26990000/26984300/26984236/4da45887_b.jpg",
    title: "IneteContinental San Diego,an IH...",
    city: "San Diego",
    rating: "4.3/5(1001 reviews)",
    date: "Sun 4 Dec - Fri,4 Jan",
    mem:'Member Price available',
    ruppee: "₹07,381",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/37000000/36380000/36377000/36376990/b5aaa958_b.jpg",
    title: "Carte Hotel San Diefo Downtown",
    city: "San Diego ",
    rating: "4.8/5(308 reviews)",
    date: "Sun 30 Oct - Thu,3 Nov",
     mem:'Member Price available',
    ruppee: "₹07,381",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/2000000/1120000/1117800/1117726/412ec9fd_b.jpg",
    title: "The Guild Hotel, San Diego, a tri...",
    city: "San Diego",
    rating: "4.2/5(104 reviews)",
    date: "Sun 6 Nov - Tue,8 Nov",
     mem:'Member Price available',
    ruppee: "₹07,381",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/20000000/19550000/19540500/19540419/b9fbcab0_b.jpg",
    title:"Welcome Heritage Mani Mansion",
    city: "Ahmedabad",
    rating: "4.3/5(3 reviews)",
    date: "Sat 3 Oct - Mon,31 Oct",
     mem:'Member Price available',
    ruppee: "₹07,381",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/1000000/50000/49300/49286/58f93db6_b.jpg",
    title: "Avani Atrium Bangkok Hotel",
    city: "Bangkok",
    rating: "4.3/5(997 reviews)",
    date: "Sun 13 Nov - Fri,4 Jan",
     mem:'Member Price available',
    ruppee: "₹07,381",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/3000000/2340000/2339900/2339868/d5fbbe4b_b.jpg",
    title: "Bandara Suites Silom",
    city: "Bangkok",
    rating: "4.3/5(999 reviews)",
    date: "Sat 27 Oct - Mon,31 Oct",
     mem:'Member Price available',
    ruppee: "₹07,381",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/12000000/11980000/11971700/11971622/8dd401e8_b.jpg",
    title: "The William Vale",
    city: "New York",
    rating: "4.3/5(1000 reviews)",
    date: "Tue 1 Nov - Sat,4 Nov",
     mem:'Member Price available',
    ruppee: "₹07,381",
  },
  {
    img_url:
      "https://images.trvl-media.com/hotels/4000000/3610000/3606300/3606282/aedc4c3c_b.jpg",
    title: "NoMo SoHo",
    city: "New York",
    rating: "4.0/5(1002 reviews)",
    date: "Sun 18 Dec - Thu,22 Dec",
     mem:'Member Price available',
    ruppee: "₹07,381",
  },
];

let section5_1 = document.getElementById("section-5_1");

const display_hotel = () => {
  objArr2.map(function(el){

  

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

  div2_2.innerText = el.mem;

  let div3 = document.createElement("div");
  div3.id = "div-3";

  let div3_1 = document.createElement("div");
  div3_1.id = "div-3-1";
  div3_1.innerText = el.date;

  let div3_2 = document.createElement("div");
  div3_2.id = "div-3-2";
  let h5 = document.createElement("h3");
  h5.innerText = el.ruppee;

  div3_2.append(h5);
  // div3_2.innerText=el.mem

  div2.append(div2_1, div2_2);

  div3.append(div3_1, div3_2);

  div.append(img, h4, p, rating, div2, div3);
  section5_1.append(div);
});


};
display_hotel();
