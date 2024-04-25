// Importa Mongoose para interactuar con MongoDB
const mongoose = require('mongoose');

// Importa dotenv para cargar variables de entorno
require('dotenv').config();

//Construimos la URI con las variables de entorno para que se conecte a la base de datos
const URI = `${process.env.DB_HOST}+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.9yoc78y.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=${process.env.DB_CLUSTER}`

// Función asincronía para conectar a la base de datos MongoDB
const connectDB = async () => {
    // Conecta a MongoDB usando la URL proporcionada en la variable de entorno MONGO_URL
    return await mongoose.connect(URI);
}

// Exporta la función para uso en otros archivos
module.exports = connectDB;
