// Import the Router class from Express and movies middleware
const { Router } = require("express");
const moviesMiddleware = require('../middlewares/validateMovie');

// Import the moviesController module
const moviesController = require("../controllers/moviesController");

// Create a new Router instance
const router = Router();

// Define a route for handling GET requests to the root endpoint
router.get("/", moviesController.getAllMovies);

// Define a route for handling GET requests to the /get-film-byTitle endpoint
router.get("/get-film-byTitle/:title", moviesMiddleware.checkMovieExist, moviesController.getFilmByTitle);

// Define a route for handling POST requests to the /create-film endpoint
router.post("/create-film",moviesMiddleware.validateMovieData ,moviesController.createFilm);

//Define a route for handling DELETE requests to the /delete-film-byTitle endpoint
router.delete("/delete-film-byTitle/:title",moviesMiddleware.checkMovieExist,moviesController.deleteFilmByTitle);

//Define a route for handling PUT requests to the /update-film endpoint
router.put("/update-film/:title", moviesMiddleware.validateMovieData, moviesMiddleware.checkMovieExist,moviesController.updateFilm);

// Export the router module
module.exports = router;
