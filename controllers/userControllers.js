const { User } = require("../models");

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  },
  async getUserById(req, res) {
    const { userId } = req.params;
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  },
  async createUser(req, res) {
    const { username, email } = req.body;
    try {
      const user = await User.create({ username, email });
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  },
  async deleteUser(req, res) {
    const { userId } = req.params;
    try {
      const user = await User.findByIdAndDelete(userId);
      res.json({ message: "User deleted" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  },
  async updateUser(req, res) {
    const { userId } = req.params;
    try {
      const user = await User.findByIdAndUpdate(
        userId,
        { $set: req.body },
        { new: true }
      );
      res.json({ message: "User updated" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  },
  async addFriend(req, res) {
    const { userId, friendId } = req.params;
    // find user and friendID
    // find the user by their id then update the users friends array and push the friendId into that array

    try {
      const user = await User.findByIdAndUpdate(
        userId,
        { $push: { friends: friendId } },
        { new: true }
      );

      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server Error" });
    }
  },
};
