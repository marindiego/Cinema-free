// Import the Router class from Express
const { Router } = require('express');

// Import the moviesRouter module
const moviesRouter = require('./moviesRouter');

// Create a new Router instance
const router = Router();


// Mount the moviesRouter under the '/movies' endpoint
router.use('/movies', moviesRouter);


// Export the router module
module.exports = router;
