// Import the Express module
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Import the router module from './routes'
const indexRouter = require('./routes');

// Create an instance of the Express application
const app = express();

// Use the morgan middleware to log HTTP requests
app.use(morgan('dev'));

// Use the cors middleware to enable CORS
app.use(cors());

// Use the express.json middleware to parse JSON request bodies
app.use(express.json());

// Mount the indexRouter middleware on the application
app.use(indexRouter);

// Export the Express application object
module.exports = app;
