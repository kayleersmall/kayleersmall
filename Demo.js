//alert("Hello! I am an alert box!!");

function ShowRestaurants(){
  alert("Hi!");
  console.log("I have no clue :P");
  var restaurants = ["Chick-Fil-A", "Azzip", "Moe's"];
  document.getElementById("restaurants").innerHTML = restaurants;
}

function getname(){
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var combined = fname + lname;
  console.log(fname);
  console.log(lname);
  console.log(combined);
  document.getElementById("FNameResult").innerHTML = fname;
  document.getElementById("CombinedResult").innerHTML = combined;

}
