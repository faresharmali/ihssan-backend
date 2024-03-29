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
  username:{
    type: String,
    required: true,
    unique: true,
  },
  password:String,
  famillies:Array,
  followed: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Family' }],

  joined:Date,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
