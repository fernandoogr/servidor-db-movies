import { initDB } from './db/init';
import { getAllMovies, getMovieById, getMoviesByName } from './models/movies';
import express from 'express';

const app = express();
const PORT = 3000;
const db = await initDB();

app.get("/movies", (req, res) => {
    const peliculas = getAllMovies(db);
    res.json(peliculas);
});

app.listen(PORT, () => {
    console.log(`Server corriendo en el puerto º${PORT}`);
});


//const movies = getAllMovies(db);
//console.log(movies);

//const movie = getMovieById(db, 1);
//console.log(movie);

//const moviesByName = getMoviesByName(db, 'Matrix');
//console.log(moviesByName);