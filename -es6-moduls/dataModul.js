import Movie from './movie.js';
import Program from './programs.js';

const storage = {
    listOfMovies: [],
}

const createMovie = (title, genre, length) => new Movie(title, genre, length);


const addMovie = (movie) => {

    storage.listOfMovies.push(movie);

    console.log(storage)

}

const createProgram = (date) => new Program(date);

export {

    createMovie,
    addMovie,
    createProgram

}



