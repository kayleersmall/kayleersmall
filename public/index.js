//JSON - like arrays on steroids
var movies = [{
    "title" : "Black Panther",
    "theatricalrelease" : "2/16/2018",
    "description" : "Marvel Studios’ “Black Panther” follows T’Challa who, after the death of his father, the King of Wakanda, returns home to the isolated, technologically advanced African nation to succeed to the throne and take his rightful place as king.",
    "image" : "https://i.ytimg.com/vi/2e52vw7RR-A/maxresdefault.jpg"
  },
  {
    "title" : "Avengers: Infinity War",
    "theatricalrelease" : "4/27/2018",
    "description" : "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos.",
    "image" : "http://sm.ign.com/ign_latam/screenshot/default/avengers-infinitywar-art-860x450-860x450-c_efps.png"
  },
  {
    "title" : "Ant-Man and The Wasp",
    "theatricalrelease" : "7/6/2018",
    "description" : "From the Marvel Cinematic Universe comes a new chapter featuring heroes with the astonishing ability to shrink: “Ant-Man and The Wasp.”",
    "image" : ""
}];

// console.log("movies json", movies);
// console.log(moment().format('l'));
var today = moment().format('l');

var movie = {}; //Variable named 'movie' equals empty object
var closestmovie = {};
for (var i = 0; i < movies.length; i++) {

  // console.log("Release date for " + movies[i].title + " is " + movies[i].theatricalrelease);
  var moviedate = movies[i].theatricalrelease;
  // console.log("movie object", movie); //Logs variable named 'movie' from ln 31 which is an empty object

  var momenttoday = moment(moment().format('l')); //Need moment(...) to make Moment object; otherwise shows as NaN
  var momenttestdate = moment(movies[i].theatricalrelease).format('M/D/YYYY'); //Converts movie release date to Moment object with same format used in movies object array / JSON
  // console.log(momenttestdate);
  var difference = momenttoday.diff(momenttestdate); //Gets difference between momenttoday and momenttestdate in milliseconds
  var absolutedifference = Math.abs(difference) //Converts difference to absolute value (no negatives)
  // console.log("Difference", difference);
  // console.log("Absoluteddifference " + movies[i].title, absolutedifference);

  if (absolutedifference < closestmovie || Object.keys(closestmovie).length === 0 && closestmovie.constructor === Object){
    closestmovie = absolutedifference;
    movie = movies[i]; //IF movie currenlty being looped over is closer than the movie already stored in closestmovie object, this is the new closest movie
    console.log("Closestmovie ", movie)
  }

  // REVIEW: Function compares each movie title to the next and sorts in ABC order
    function compare(a,b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      else {
        return 0;
      }
    }
  console.log(movies.sort(compare));

  var link = document.createElement("A");                                             // Create a <a> node
  var textnode = document.createTextNode(movies[i].title);                            // Add movie title to each link
  link.appendChild(textnode);                                                         // Append the text to <li>
  document.getElementById("bootstraplistgroup").appendChild(link);                    // Append <li> to <ul> with id="myList"
  link.className = "list-group-item";                                                 // Adds list-group-item class to link variable
  link.setAttribute('href', "movie.html?id=" + movies.indexOf(movies[i]))                  // Sets each link's href as link with movies index
  console.log("Index for " + movies[i].title + " is " + movies.indexOf(movies[i]));   // Logs index of each item

}

console.log(movie.title, movie.theatricalrelease)

document.getElementById("title").innerHTML = movie.title;
document.getElementById("description").innerHTML = movie.description;
document.getElementById("jumbotron").style.backgroundImage = "url(" + movie.image + ")";


function filterFunction() {
    var input, filter, div, ul, li, a, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("bootstraplistgroup");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = "";
      }
      else {
          a[i].style.display = "none";
      }
    }
  }
