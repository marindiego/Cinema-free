const Movie = require('../models/Movie');

module.exports = {
    getMovies: async () => {
        try {
            // Intenta encontrar todas las películas en la base de datos utilizando el modelo 'Movie'
            // El method 'find()' sin argumentos devuelve todas las películas
            return await Movie.find();
        } catch (error) {
            console.log(error);
        }
    },
    createMovie: async (movie) => {
        try {
            // Intenta crear una nueva película utilizando el modelo 'Movie'
            // El method 'create()' recibe un objeto con los datos de la película
            return await Movie.create(movie);
        } catch (error) {
            console.log(error);
        }
    },
    deleteFilmByTitle: async (title) => {
        try {
            // Intenta eliminar una película utilizando el modelo 'Movie'
            // El method 'deleteOne()' recibe un objeto con los datos de la película
            return await Movie.deleteOne({ title });
        } catch (error) {
            console.log(error);
        }
    }
}