// document.addEventListener("DOMContentLoaded", function(){
//   document.getElementById("Spidey").style.display = "none";
// });
//   Code above will remove the 'Spidey' div / code, but once removed you cant add
//   it back in

function characterchange() {
  console.log("fired characterchange");

  var character = document.getElementById("select").value;
  console.log(character);

  if (character == "spidey") {
    console.log("selected spidey");
    document.getElementById("Spidey").style.display = "inline";
    document.getElementById("Panther").style.display = "none";
    console.log("showing Spidey");
  }
  if (character == "panther") {
    console.log("selected panther");
    document.getElementById("Spidey").style.display = "none";
    document.getElementById("Panther").style.display = "inline";
    console.log("showing Panther");
  }
}
