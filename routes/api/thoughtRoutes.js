const express = require("express");
const router = express.Router();
const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtController");

// GET all thoughts & create thought
router
  .route("/")
  .get(getThoughts)
  .post(createThought);

// GET a single thought by its _id, update thought, delete thought
router
  .route("/:thoughtId")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
