// Import the Express module
const express = require('express');

// Import the router module from './routes'
const router = require('./routes');

// Create an instance of the Express application
const app = express();

// Mount the router middleware on the application
app.use(router);

// Export the Express application object
module.exports = app;
