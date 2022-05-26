const mongoose = require("mongoose");

const ActivitySchema = mongoose.Schema({
  id: String,
  famillies: String,
  kids:Array,
  date:Date,
  title:String,
  type:String,
  description:String,
  author:String

});

const Activity = mongoose.model("Activity", ActivitySchema);

module.exports = Activity;
