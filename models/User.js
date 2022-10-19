const { Schema, model } = require('mongoose');
const userSchema = require('./Assignment');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unqiue: true,
      required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts: {
      type: Schema.Types.ObjectId,
      ref: "Thought"
    },
    friends: [{
      type: Schema.Types.ObjectId,
      ref: "User"
    }],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false
  }
);

userSchema.virtual('friendCount').get(function(){
 return this.friends.length
});

const User = model('user', userSchema);

module.exports = User;
