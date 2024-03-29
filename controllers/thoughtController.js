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
      const thought = await Thought.findById({ _id: req.params.thoughtId });
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
      await User.findOneAndUpdate(
        { username },
        { $push: { thoughts: thought._id } },
        { new: true }
      );
      res.status(201).json(thought);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  },

  async updateThought(req, res) {
    const { thoughtId } = req.params;
    const { thoughtText } = req.body;

    try {
      const thought = await Thought.findByIdAndUpdate(
        thoughtId,
        { thoughtText },
        { new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: "Thought not found" });
      }

      res.json({ message: "Thought updated", thought });
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
  },

  async createReaction(req, res) {
    const { thoughtId } = req.params;
    const { reactionBody, username } = req.body;
    try {
      // Find the thought by ID
      const thought = await Thought.findById(thoughtId);
      if (!thought) {
        return res.status(404).json({ message: "Thought not found" });
      }

      thought.reactions.push({ reactionBody, username });
      await thought.save();

      res.status(201).json(thought);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  },

  async deleteReaction(req, res) {
    const { thoughtId, reactionId } = req.params;
    try {
      // Find the thought by ID
      const thought = await Thought.findById(thoughtId);
      if (!thought) {
        return res.status(404).json({ message: "Thought not found" });
      }

      thought.reactions.pull({ _id: reactionId });
      await thought.save();

      res.json({ message: "Reaction deleted" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  },
};
