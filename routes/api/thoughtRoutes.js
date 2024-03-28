const express = require("express");
const router = express.Router();
const {
  getThoughts,
  getThoughtById,
  createThought,
} = require("../../controllers/thoughtController");

// Set up GET all and POST
router
  .route('/')
  .get(getThoughts)
  .post(createThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route('/:thoughtId')
  .get(getThoughtById)
  


module.exports = router;
