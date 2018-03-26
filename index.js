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
for (var i = 0; i < movies.length; i++) {
  // console.log("movie object", movies[i]);
  console.log("Release date for " + movies[i].title + " is " + movies[i].theatricalrelease);
  var moviedate = movies[i].theatricalrelease;
  console.log("movie object", movie); //Logs variable named 'movie' from ln 31 which is an empty object
  //if (movies[i].theatricalrelease - today) {
    //show that movie on homepage
  //}

  var momenttoday = moment(moment().format('l'));
  //var testdate = "4/27/2018";
  //var momenttestdate = moment(testdate).format('M/D/YYYY');
  var momenttestdate = moment(movies[i].theatricalrelease).format('M/D/YYYY');
  console.log(momenttestdate);
  console.log(momenttoday.diff(momenttestdate));

  movie = movies[i];
  console.log("movie object", movie); // Now filled with object from movies object array
}

document.getElementById("title").innerHTML = movies[0].title;

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
