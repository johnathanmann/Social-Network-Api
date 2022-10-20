const router = require('express').Router();

// Imports all the functions from our controllers
const {
  getUsers,
  createUser
} = require('../../controllers/userController');

router.route('/').get(getUsers);
router.route('/').post(createUser);

module.exports = router;