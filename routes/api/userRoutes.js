const router = require('express').Router();

// Imports all the functions from our controllers
const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

// ../user/
router.route('/').get(getUsers).post(createUser);
// ../user/:id
router.route('/:id').get(getUser).delete(deleteUser).post(updateUser);
// ../user/:id/friends/:friendsId
router.route("/:id/friends/:friendsId").post(addFriend).delete(removeFriend)


module.exports = router;