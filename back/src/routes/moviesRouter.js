// Import the Router class from Express and movies middleware
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

//Define a route for handling DELETE requests to the /delete-film-byTitle endpoint
router.delete("/delete-film-byTitle",moviesMiddleware.checkMovieExist,moviesController.deleteFilmByTitle);

// Export the router module
module.exports = router;
