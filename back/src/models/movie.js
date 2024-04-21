// Importa la biblioteca Mongoose, que se utiliza para interactuar con la base de datos MongoDB desde Node.js
const mongoose = require('mongoose');

// Extrae la clase Schema de la biblioteca Mongoose para su uso
const { Schema } = mongoose;

// Define un esquema de datos para el modelo de película
const movieSchema = new Schema({
    title: String,
    year: Number,
    director: String,
    duration: Number,
    genre: Array,
    rate: Number,
    poster: String
});

// Crea un modelo de datos de película utilizando el esquema definido anteriormente
const Movie = mongoose.model('Movie', movieSchema);

// Exporta el modelo de película para que pueda ser utilizado en otras partes de la aplicación
module.exports = Movie;