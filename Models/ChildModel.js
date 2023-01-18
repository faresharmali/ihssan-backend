const mongoose = require("mongoose");

const ChildSchema = mongoose.Schema({
  identifier: String,
  scolarity: String,
  gender: String,
  name: String,
  sickness: String,
  modules: Array,
  sick: Boolean,
  Education: Boolean,
  day: String,
  month: String,
  year: String,
  Family: { type: mongoose.Schema.Types.ObjectId, ref: 'Family' },
});

const Child = mongoose.model("Child", ChildSchema);
module.exports = Child;
