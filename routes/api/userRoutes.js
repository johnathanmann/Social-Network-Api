const router = require('express').Router();

// Imports all the functions from our controllers
const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
} = require('../../controllers/userController');

// ../user/
router.route('/').get(getUsers).post(createUser);
// ../user/:id
router.route('/:id').get(getUser).delete(deleteUser).post(updateUser);


module.exports = router;