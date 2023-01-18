const mongoose = require("mongoose");

const InformationSchema = mongoose.Schema({
  id: String,
  section:String,
  benificier: String,
  content:String,
  title:String,
  kids:Array,
  famillies:Array,
  type:String,
  date:Date,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Information = mongoose.model("Information", InformationSchema);

module.exports = Information;
