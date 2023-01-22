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
  kofa:Boolean,
  sick:Boolean,
  sickness:String,
  lastDelivery:String,
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Child' }],
  delivery: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  wasseet: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Family = mongoose.model("Family", FamilySchema);

module.exports = Family;
