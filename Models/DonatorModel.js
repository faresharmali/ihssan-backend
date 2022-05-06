const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  identifier: String,
  name: {
    type: String,
    required: true,
    unique: true,
  },
  departement: String,
  phone: String,
  intermidate:String,
});

const Donator = mongoose.model("Donator", UserSchema);

module.exports = Donator;
