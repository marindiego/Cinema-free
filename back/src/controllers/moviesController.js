const moviesService = require('../services/moviesService');
const catchAsync = require('../utils/catchAsync');

module.exports = {
    getAllMovies: catchAsync(async (req, res) => {
        const movies = await moviesService.getMovies();
        res.status(200).json(movies);
    }),
    getFilmByTitle: catchAsync(async (req, res) => {
        const { title } = req.params;
        const movie = await moviesService.getMovie(title);
        res.status(200).json(movie);
    }),

    createFilm: catchAsync(async (req, res) => {
        const { title, year, director, duration, genre, rate, poster } = req.body;
        const movie = await moviesService.createMovie({ title, year, director, duration, genre, rate, poster });
        res.status(201).json(movie);
    }),

    deleteFilmByTitle: catchAsync(async (req, res) => {
        const { title } = req.params;
        await moviesService.deleteFilmByTitle(title);
        res.status(200).json({
            message: "Movie deleted successfully"
        });
    }),
    updateFilm: catchAsync(async (req, res) => {
        const { title } = req.params;
        await moviesService.updateFilm(title, req.body);
        res.status(200).json({
            message: "Movie updated successfully"
        });
    })
};
