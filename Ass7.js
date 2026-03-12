/* DONE
Movie Streaming Platform
*/

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// 1. Filter only Sci-Fi movies
let sciFiMovies = movies.filter(movie => movie.genre === "Sci-Fi");
console.log("Sci-Fi Movies:", sciFiMovies);

// 2. Format movie titles with rating
let movieTitlesWithRatings = movies.map(
  movie => `${movie.title} (${movie.rating})`
);
console.log("Movie titles with ratings:", movieTitlesWithRatings);

// 3. Average movie rating
let totalRatings = movies.reduce((sum, movie) => sum + movie.rating, 0);
let averageRating = totalRatings / movies.length;
console.log("Average rating:", averageRating);

// 4. Find movie "Joker"
let jokerMovie = movies.find(movie => movie.title === "Joker");
console.log("Details of Joker:", jokerMovie);

// 5. Find index of "Avengers"
let avengersIndex = movies.findIndex(movie => movie.title === "Avengers");
console.log("Index of Avengers:", avengersIndex);