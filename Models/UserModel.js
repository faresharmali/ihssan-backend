const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  identifier: String,
  name: {
    type: String,
    required: true,
    unique: true,
  },
  phone: String,
  job: String,
  username:String,
  password:String
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
