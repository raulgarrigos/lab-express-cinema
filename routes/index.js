const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

// GET "/movies" => Listar todas las películas
router.get("/movies", async (req, res, next) => {
  try {
    const response = await Movie.find().select({ title: 1, image: 1 });
    res.render("movies.hbs", {
      allMovies: response,
    });
  } catch (error) {
    next(error);
  }
});

// GET "movies/:id" => Para dar los detalles de las películas

router.get("/movies/:movieId", async (req, res, next) => {
  try {
    const response = await Movie.findById(req.params.movieId);
    res.render("details.hbs", {
      oneMovie: response,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
