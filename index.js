// 1.
// const numberOfFilms = prompt('Сколько фильмов вы просмотрели', 1000);

// console.log(numberOfFilms);

// 2.
const answer = "";

const personalMovieDB = {
  count: answer,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// 3.

const lastWatchedMovie = prompt("Один из последних просмотренных фильмов ?");
const rateOfMovie = prompt("На сколько оцените его ?");

personalMovieDB.movies[lastWatchedMovie] = rateOfMovie;

console.log(personalMovieDB);
