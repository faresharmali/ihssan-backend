const mongoose = require("mongoose");

const FamilySchema = mongoose.Schema({
  id: String,
  fatherFirstName:String,
  fatherLastName:String,
  motherFullName:String,
  donation:Number,
  salary: Number,
  kids: Array,
  phone: String,
  signupDate: String,
  adresse: String,
  wasseet: String,
});

const Family = mongoose.model("Family", FamilySchema);

module.exports = Family;
