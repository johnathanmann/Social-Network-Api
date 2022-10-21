const router = require('express').Router();

// Imports all the functions from our controllers
const {
  getThoughts,
  getThought,
  createThought,
  deleteThought,
  updateThought,
} = require('../../controllers/thoughtController');

// ../thought/
router.route('/').get(getThoughts).post(createThought);
// ../thought/:id
router.route('/:id').get(getThought).delete(deleteThought).post(updateThought);


module.exports = router;