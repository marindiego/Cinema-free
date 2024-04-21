//In this module make the connection  with the data base in a function
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    return await mongoose.connect(process.env.MONGO_URL)
}

module.exports = connectDB;