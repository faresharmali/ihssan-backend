const mongoose = require("mongoose");

const ProgramScehema = mongoose.Schema({
  id: String,
  departement: String,
  items: Array,
});

const Program = mongoose.model("Program", ProgramScehema);

module.exports = Program;
