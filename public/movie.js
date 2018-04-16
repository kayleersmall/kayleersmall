var urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get('id')); // Logs movie id
// REVIEW: Above is new method to get URL parameters; gets stuff after ?id=

var selectedmovie = urlParams.get('id');
// REVIEW: Above sets variable selectedmovie as index of clicked movie
console.log(movies);

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

console.log(movies[selectedmovie])
// REVIEW: Above gets movie with index from URL; Like movies[0], movies[1], etc.

document.getElementById("title").innerHTML = movies[selectedmovie].title;
document.getElementById("description").innerHTML = movies[selectedmovie].description;
document.getElementById("release").innerHTML = movies[selectedmovie].theatricalrelease;
document.getElementById("image").src = movies[selectedmovie].image;
