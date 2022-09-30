

const get_data=JSON.parse(localStorage.getItem('customer_details'))||[]
// console.log(get_data)
if(get_data.length=="0"){
  document.getElementById('mybtn').innerText='profile'
}
else{
  document.getElementById('mybtn').innerText=get_data[0].email
}


var modal = document.getElementById("myModal");


var btn = document.getElementById("mybtn");

var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
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