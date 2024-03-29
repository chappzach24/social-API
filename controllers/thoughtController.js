const { Thought, User } = require("../models");

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  },

  async getThoughtById(req, res) {
    
    try {
      const thought = await Thought.findById({_id:req.params.thoughtId});
      if (!thought) {
        return res.status(404).json({ message: "Thought not found" });
      }
      res.json(thought);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  },

  async createThought(req, res) {
    const { thoughtText, username } = req.body;
    try {
      const thought = await Thought.create({ thoughtText, username });
      res.status(201).json(thought);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  },

  async updateThought(req, res) {
    const { thoughtId } = req.params;
    try {
      const thought = await Thought.findByIdAndUpdate(
        thoughtId,
        { $set: req.body },
        { new: true }
      );
      res.json({ message: "Thought updated" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  },  

  async deleteThought(req, res) {
    const { thoughtId } = req.params;
    try {
      const thought = await Thought.findByIdAndDelete(thoughtId);
      if (!thought) {
        return res.status(404).json({ message: "Thought not found" });
      }

      await User.updateMany({}, { $pull: { thoughts: thoughtId } });
      res.json({ message: "Thought deleted" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  }

};
