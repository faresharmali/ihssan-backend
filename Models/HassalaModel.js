const mongoose = require("mongoose");

const HassalaSchema = mongoose.Schema({
  identifier: String,
  receiver: String,
  name: String,
  location: String,
  date: Date,
  amount: Number,
});

const Hassala = mongoose.model("Hassala", HassalaSchema);
module.exports = Hassala;
