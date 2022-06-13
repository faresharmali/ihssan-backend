const mongoose = require("mongoose");

const ReservationSchema = mongoose.Schema({
  id: String,
  description: String,
  date: Date,
  time: String,
  DateString: String,
});

const Reservation = mongoose.model("Reservation", ReservationSchema);

module.exports = Reservation;
