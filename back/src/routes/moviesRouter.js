// Import the Router class from Express
const { Router } = require("express");

// Import the moviesController module
const moviesController = require("../controllers/moviesController");

// Create a new Router instance
const router = Router();

// Define a route for handling GET requests to the root endpoint
router.get("/", moviesController.getAllMovies);

// Export the router module
module.exports = router;
