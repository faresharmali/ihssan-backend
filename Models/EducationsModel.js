const mongoose = require("mongoose");

const EducationSchema = mongoose.Schema({
  id: String,
  groupe:String,
  person:String,
 
});

const Education = mongoose.model("Education", EducationSchema);

module.exports = Education;
