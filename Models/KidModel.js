const mongoose = require("mongoose");

const KidSchema = mongoose.Schema({
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

const Kid = mongoose.model("Kid", KidSchema);

module.exports = Family;
