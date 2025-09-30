console.log("===== Project 5: Movie Recommendation App =====\n");

// --------------------
// Global Scope
// --------------------
var movies = []; // global movies array
var avgRating;   // var hoisting example

console.log("Average rating before any movie added:", avgRating); // undefined

// --------------------
// Hoisting Example
// --------------------
// Calling function declaration before definition
recommendMovies("Action", 8); // works due to hoisting

// --------------------
// Functions
// --------------------

// Function Expression: add movie
const addMovie = function (name, genre, rating = 0) {
  movies.push({ name, genre, rating });
};

// Function Expression: rate a movie
const rateMovie = function (name, rating) {
  let idx = movies.findIndex((m) => m.name === name);
  if (idx !== -1) {
    movies[idx].rating = rating;
    console.log(`Movie "${name}" rated: ${rating}`);
  } else {
    console.log(`Movie "${name}" not found.`);
  }
};

// Function Declaration: recommend movies
function recommendMovies(genre, minRating = 0) {
  // local scope for filtered recommendations
  let recommended = movies.filter((m) => m.genre === genre && m.rating >= minRating);
  console.log(`\nRecommended ${genre} Movies with rating >= ${minRating}:`);
  if (recommended.length === 0) {
    console.log("No recommendations found.");
  } else {
    console.log(recommended.map((m) => m.name).join(", "));
  }
}

// --------------------
// Adding Movies
// --------------------
addMovie("Inception", "Sci-Fi", 9);
addMovie("The Dark Knight", "Action", 9.5);
addMovie("Interstellar", "Sci-Fi", 8.5);
addMovie("Parasite", "Thriller", 9.2);
addMovie("Avengers: Endgame", "Action", 8.8);

// --------------------
// Array Methods Demonstration
// --------------------

// map() → extract movie names
let movieNames = movies.map((m) => m.name);
console.log("\nAll Movie Titles:", movieNames.join(", "));

// reduce() → calculate average rating
avgRating = movies.reduce((acc, m) => acc + m.rating, 0) / movies.length;
console.log("Average Rating:", avgRating.toFixed(2));

// some() → check if any movie has rating > 9
let hasTopRated = movies.some((m) => m.rating > 9);
console.log("Any movie with rating > 9?", hasTopRated);

// sort() → sort movies by rating (descending)
let sortedByRating = [...movies].sort((a, b) => b.rating - a.rating);
console.log("\nMovies sorted by rating:");
sortedByRating.forEach((m) => console.log(`${m.name} [${m.rating}]`));

// filter() → get movies by genre (Action)
let actionMovies = movies.filter((m) => m.genre === "Action");
console.log("\nAction Movies:", actionMovies.map((m) => m.name).join(", "));

// --------------------
// Rate a Movie
// --------------------
rateMovie("Interstellar", 9);

// --------------------
// Recommend Movies (using function declaration called earlier works)
recommendMovies("Sci-Fi", 8.5);
recommendMovies("Action", 9);

// join() → UI-friendly display
let uiDisplay = movies.map((m) => `${m.name} (${m.rating})`).join(" | ");
console.log("\nUI-Friendly Movie Display:\n", uiDisplay);
