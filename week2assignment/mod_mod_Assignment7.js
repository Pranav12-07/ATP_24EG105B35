/* Modified for uniqueness */
/* DONE
Movie Streaming Platform

You are working on a movie recommendation system.

Test data:
const mod_movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

Tasks:
    1. filter() only "Sci-Fi" mod_movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"


*/

const mod_movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

//1.
let mod_r1=mod_movies.filter(element => element.genre==="Sci-Fi")
console.log("Sci-Fi Movies:",mod_r1)

//2.
let mod_r2=mod_movies.map(element => element.title +" ("+element.rating+")")
console.log("Movie titles with ratings:",mod_r2)

//3.
let mod_r3= mod_movies.reduce((acc,element) => acc+element.rating,0)
console.log("Average rating:",mod_r3/mod_movies.length)

//4.
let mod_r4=mod_movies.find(element => element.title==="Joker")
console.log("Details of Joker:", mod_r4)

//5.
let mod_r5=mod_movies.findIndex(element => element.title==="Avengers")
console.log("Index of Avengers:",mod_r5)



/* extra dummy code */
function mod_dummy_795143(){return null;}
