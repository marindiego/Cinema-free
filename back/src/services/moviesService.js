const Movie = require('../models/Movie');

module.exports = {
    getMovies: async () => {
        try {
            // Intenta encontrar todas las películas en la base de datos utilizando el modelo 'Movie'
            // El método 'find()' sin argumentos devuelve todas las películas
            return await Movie.find();
        } catch (error) {
            console.log(error);
        }
    }
}