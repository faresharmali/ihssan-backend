const mongoose = require("mongoose");

const ActivitySchema = mongoose.Schema({
  id: String,
  famillies: Array,
  date:Date,
  kids:Array,
  title:String,
  type:String,
  benificier:String,
  author:String

});

const Activity = mongoose.model("Activity", ActivitySchema);

module.exports = Activity;
