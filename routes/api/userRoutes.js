const express = require("express");
const router = express.Router();
// get ALL USERS, get single user, add user, update user, delete user, add friend, delete friend
const {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
  
} = require("../../controllers/userControllers");

// GET all users & create user
router.route("/").get(getUsers).post(createUser);

// get single user, update user, delete user
router.route("/:userId").get(getUserById).delete(deleteUser).put(updateUser);

// add friend, delete friend
router.route("/:userId/friends/:friendId").post();



module.exports = router;
