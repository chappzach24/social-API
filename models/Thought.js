const { Schema, model } = require("mongoose");


const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1
    },

    createdAt:{
      type: Date,
      default: Date.now
    },
    
    username: {
      type: String,
      required: true
    },
    reactions: []
  },
  {
    toJSON: {
      virtuals: true
    }
  }
)

const Thought = model('Thought', thoughtsSchema)

module.exports = Thought;