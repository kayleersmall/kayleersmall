//JSON - like arrays on steroids
var movies = [{
  //"Black Panther" : {
    "title" : "Black Panther",
    "theatricalrelease" : "2/16/2018",
    "description" : "Marvel Studios’ “Black Panther” follows T’Challa who, after the death of his father, the King of Wakanda, returns home to the isolated, technologically advanced African nation to succeed to the throne and take his rightful place as king.",
    "image" : "https://i.ytimg.com/vi/2e52vw7RR-A/maxresdefault.jpg"
  },
  //"Infinity War" : {
  {
    "title" : "Avengers: Infinity War",
    "theatricalrelease" : "4/27/2018",
    "description" : "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos.",
    "image" : "http://sm.ign.com/ign_latam/screenshot/default/avengers-infinitywar-art-860x450-860x450-c_efps.png"
  },
  //"Captain Marvel" : {
  {
    "title" : "Ant-Man and The Wasp",
    "theatricalrelease" : "7/6/2018",
    "description" : "From the Marvel Cinematic Universe comes a new chapter featuring heroes with the astonishing ability to shrink: “Ant-Man and The Wasp.”",
    "image" : ""
}];

var TestArray = []; //empty array - more than one item
var TestObject = {}; //empty object - one item

console.log("movies json", movies);
console.log(moment().format('l'));
var today = moment().format('l');

var movie = {}; //Variable named 'movie' equals empty object
var closestmovie = {};
for (var i = 0; i < movies.length; i++) {
  // console.log("movie object", movies[i]);
  console.log("Release date for " + movies[i].title + " is " + movies[i].theatricalrelease);
  var moviedate = movies[i].theatricalrelease;
  console.log("movie object", movie); //Logs variable named 'movie' from ln 31 which is an empty object
  //if (movies[i].theatricalrelease - today) {
    //show that movie on homepage
  //}

  var momenttoday = moment(moment().format('l')); //Need moment(...) to make Moment object; otherwise shows as NaN
  //var testdate = "4/27/2018";
  //var momenttestdate = moment(testdate).format('M/D/YYYY');
  var momenttestdate = moment(movies[i].theatricalrelease).format('M/D/YYYY'); //Converts movie release date to Moment object with same format used in movies object array / JSON
  console.log(momenttestdate);
  var difference = momenttoday.diff(momenttestdate); //Gets difference between momenttoday and momenttestdate in milliseconds
  var absolutedifference = Math.abs(difference) //Converts difference to absolute value (no negatives)
  console.log("Difference", difference);
  console.log("Absoluteddifference " + movies[i].title, absolutedifference);

  // movie = movies[i];
  // console.log("movie object", movie); // Now filled with object from movies object array

   if (absolutedifference < closestmovie || Object.keys(closestmovie).length === 0 && closestmovie.constructor === Object){
   // console.log(absolutedifference + "<" + closestmovie);
    closestmovie = absolutedifference;
   // console.log(closestmovie);
   movie = movies[i]; //IF movie currenlty being looped over is closer than the movie already stored in closestmovie object, this is the new closest movie
   console.log("Closestmovie ", movie)
  }
}

console.log(movie.title, movie.theatricalrelease)

document.getElementById("title").innerHTML = movie.title;
document.getElementById("description").innerHTML = movie.description;
document.getElementById("jumbotron").style.backgroundImage = "url(" + movie.image + ")";

// var characters = ["Spider-Boy", "Iron Man", "Hawkeye", "Dr. Strange", "Thor", "Hulk", "Black Panther", "Vision"];
//
// console.log(characters)
//
// console.log(characters[0]); //Logs Spider-Boy
// console.log(characters[1]); //Logs Iron Man
// console.log(characters[2]);
// console.log(characters[3]);
//
// for (var i = 0; i < characters.length; i++) { //Logs entire array from beginning to end
//   console.log(characters[i]);
// }


// console.log(movies);

// console.log(Object.keys(movies).length);

// for(var key in movies) {
//   console.log(movies[key]);
//   console.log(movies[key].title); //logs correctly
//   console.log(movies[key].theatricalrelease);
// }

function showsearchlist(){
  // alert("key was pressed")
  document.getElementById('searchlist').style.display = 'inline';
  var searchinput = document.getElementById("searchbar").value;
  if (searchinput == null || searchinput == "") {
    document.getElementById('searchlist').style.display = 'none';
  }
}
