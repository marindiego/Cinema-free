// Import the Router class from Express
const { Router } = require("express");
const moviesMiddleware = require('../middlewares/validateMovie');

// Import the moviesController module
const moviesController = require("../controllers/moviesController");

// Create a new Router instance
const router = Router();

// Define a route for handling GET requests to the root endpoint
router.get("/", moviesController.getAllMovies);

// Define a route for handling POST requests to the /create-film endpoint
router.post("/create-film",moviesMiddleware.validateMovieData ,moviesController.createFilm);

// Export the router module
module.exports = router;
