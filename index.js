//JSON - like arrays on steroids
var movies = {
  "Black Panther" : {
    "title" : "Black Panther",
    "theatricalrelease" : "2/16/2018"
  },
  "Infinity War" : {
    "title" : "Avengers: Infinity War",
    "theatricalrelease" : "5/4/2018"
  },
  "Captain Marvel" : {
    "title" : "Captain Marvel",
    "theatricalrelease" : "TBA"
  }
}

var characters = ["Spider-Boy", "Iron Man", "Hawkeye", "Dr. Strange", "Thor", "Hulk", "Black Panther", "Vision"];

console.log(characters)

console.log(characters[0]); //Logs Spider-Boy
console.log(characters[1]); //Logs Iron Man
console.log(characters[2]);
console.log(characters[3]);

for (var i = 0; i < characters.length; i++) { //Logs entire array from beginning to end
  console.log(characters[i]);
}


console.log(movies);
console.log(moment().format('l'));
console.log(Object.keys(movies).length);

for(var key in movies) {
  console.log(movies[key]);
  console.log(movies[key].title); //logs correctly
  console.log(movies[key].theatricalrelease);
}

function showsearchlist(){
  // alert("key was pressed")
  document.getElementById('searchlist').style.display = 'inline';
  var searchinput = document.getElementById("searchbar").value;
  if (searchinput == null || searchinput == "") {
    document.getElementById('searchlist').style.display = 'none';
  }
}
