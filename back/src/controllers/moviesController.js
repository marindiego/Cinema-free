const moviesService = require('../services/moviesService')

module.exports = {
    getAllMovies: async (req, res) => {
        try {
            const movies = await moviesService.getMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    createFilm: async (req, res) => {
        try {
            const { title, year, director, duration, genre, rate, poster } = req.body;
            const movie = await moviesService.createMovie({title, year, director, duration, genre, rate, poster});
            res.status(201).json(movie);
        } catch (error) {
            res.status(500).json(error,"algo salio mal controller");
        }
    }
}