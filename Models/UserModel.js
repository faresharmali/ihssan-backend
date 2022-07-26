const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  id: String,
  name: {
    type: String,
    required: true,
    unique: true,
  },
  phone: String,
  job: String,
  token: String,
  username:String,
  password:String,
  famillies:Array,
  joined:Date,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
