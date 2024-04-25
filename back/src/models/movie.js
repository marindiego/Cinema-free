// Importa la biblioteca Mongoose, que se utiliza para interactuar con la base de datos MongoDB desde Node.js
const mongoose = require('mongoose');

// Extrae la clase Schema de la biblioteca Mongoose para su uso
const { Schema } = mongoose;

// Define un esquema de datos para el modelo de película
const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    genre: {
        type: Array,
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    poster: {
        type: String,
        required: true
    }
});
// Crea un modelo de datos de película utilizando el esquema definido anteriormente
const Movie = mongoose.model('Movie', movieSchema);

// Exporta el modelo de película para que pueda ser utilizado en otras partes de la aplicación
module.exports = Movie;