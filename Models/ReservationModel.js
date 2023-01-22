const mongoose = require("mongoose");

const ReservationSchema = mongoose.Schema({
  id: String,
  description: String,
  date: Date,
  time: String,
  DateString: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

});

const Reservation = mongoose.model("Reservation", ReservationSchema);

module.exports = Reservation;
