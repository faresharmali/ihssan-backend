const mongoose = require("mongoose");

const ReportSchema = mongoose.Schema({
  id: String,
  section:String,
  benificier: String,
  content:String,
  date:Date,
  title:String,
  type:String,
  author:String

});

const Report = mongoose.model("Report", ReportSchema);

module.exports = Report;
