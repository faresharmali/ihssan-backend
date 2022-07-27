const mongoose = require("mongoose");

const InformationSchema = mongoose.Schema({
  id: String,
  section:String,
  benificier: String,
  content:String,
  title:String,
  kids:Array,
  famillies:Array,
  author:String,
  type:String,
  date:Date

});

const Information = mongoose.model("Information", InformationSchema);

module.exports = Information;
