const mongoose = require("mongoose");

const DonationSchema = mongoose.Schema({
  identifier: String,
  donator: String,
  type: String,
  date:Date,
});

const Donation = mongoose.model("Donation", DonationSchema);

module.exports = Donation;
