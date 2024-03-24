const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  addFriend,
  removeFriend,
} = require('../controllers/userController');

// GET all users
router.get('/users', getUsers);

// GET a single user by ID
router.get('/users/:userId', getUserById);

// POST a new user
router.post('/users', createUser);


module.exports = router;