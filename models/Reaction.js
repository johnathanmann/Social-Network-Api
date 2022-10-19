const { Schema, model, Types } = require('mongoose');

// Schema to create a course model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Number,
      default: () => new Types.ObjectId
    },
    reactionBody: {
      type: String,
      required: true,
      minlength: 1,
      maxLength: 280
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date, 
      default: Date.now()
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
