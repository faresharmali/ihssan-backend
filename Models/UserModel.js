const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  identifier: String,
  name: {
    type: String,
    required: true,
    unique: true,
  },
  birthdate: String,
  schoolLevel: String,
  health: String,
  gender: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
