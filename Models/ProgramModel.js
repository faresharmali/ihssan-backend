const mongoose = require("mongoose");

const ProgramScehema = mongoose.Schema({
  id: String,
  section: String,
  title: String,
  date:Date
});

const Program = mongoose.model("Program", ProgramScehema);

module.exports = Program;
