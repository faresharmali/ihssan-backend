const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  id: String,
  name: {
    type: String,
    required: true,
    unique: true,
  },
  job: String,
  type: String,
  phone: String,
  user: String,
  famillies: Array,
  orphans: Array,
  nextPayment: Date,
  joined: Date,
  lastPayement:Date,
  donationAmount:Number
});

const Donator = mongoose.model("Donator", UserSchema);

module.exports = Donator;
