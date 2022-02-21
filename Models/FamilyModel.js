const mongoose = require("mongoose");

const FamilySchema = mongoose.Schema({
  identifier: String,

  name: {
    type: String,
    required: true,
    unique: true,
  },
  salary: Number,
  kids: Array,
  date: String,
  adresse: String,
});

const Family = mongoose.model("Family", FamilySchema);

module.exports = Family;
