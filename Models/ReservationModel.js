const mongoose = require("mongoose");

const ReservationSchema = mongoose.Schema({
  identifier: String,
  description: String,
  date: String,
  starttime: String,
  endtime: String,
});

const Reservation = mongoose.model("Reservation", ReservationSchema);

module.exports = Reservation;
