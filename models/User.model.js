const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    require: true,
    unique: true
  },
  passwordHash: {
    type: String,
    require: true
}
});

const User = model("User", userSchema);

module.exports = User;
