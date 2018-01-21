//alert("Hello! I am an alert box!!");

function ShowRestaurants(){
  alert("Hi!");
  console.log("I have no clue :P");
  var restaurants = ["Chick-Fil-A", "Azzip", "Moe's"];
  document.getElementById("restaurants").innerHTML = restaurants;
}

function getinput1(){
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;

  // if (input1 == "" || input1 == null) {
  if (input1 < 5 || input1 > 7) {

    alert("Enter something for input1.")
  }
  var combined = input1 + " " + input2;
  console.log(input1);
  console.log(input2);
  console.log(combined);
  document.getElementById("Input1Result").innerHTML = input1;
  document.getElementById("CombinedResult").innerHTML = combined;

}
