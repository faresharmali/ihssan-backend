const mongoose = require("mongoose");

const DonationSchema = mongoose.Schema({
  identifier: String,
  donatorInfos: String,
  type: String,
  date: Date,
  name:String,
  amount:Number
});

const Donation = mongoose.model("Donation", DonationSchema);
module.exports = Donation;
