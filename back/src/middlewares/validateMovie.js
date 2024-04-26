const Movie = require('../models/Movie');

module.exports =  {
    validateMovieData: (req, res, next) => {
        const { title, year, director, duration, genre, rate, poster } = req.body;
        
        // Verificar si todos los campos son truthy (es decir, no están vacíos o son null/undefined)
        if (![title, year, director, duration, genre, rate, poster].every(field => field)) {
            return res.status(400).json({ message: "Faltan campos requeridos" });
        } else {
            next();
        }
    },
    checkMovieExist: async (req, res, next) => {
        const { title } = req.params;
        try {
            const movie = await Movie.findOne({ title });
            if (!movie) {
                return res.status(404).json({
                    message: 'Movie not found'
                })
            }
            next()
        } catch (error) {
            res.status(500).json({
                message: error.message,
            })
        }
       }   
}