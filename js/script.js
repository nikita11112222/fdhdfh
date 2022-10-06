let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let theLastFilm = prompt('Какой ваш последний просмотренный фильм?', ''),
    scoreOfFilm = prompt('На сколько оцените его?', '');

personalMovieDB.movies[theLastFilm] = scoreOfFilm;

console.log(personalMovieDB);