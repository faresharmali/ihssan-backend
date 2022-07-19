const mongoose = require("mongoose");

const TransactionSchema = mongoose.Schema({
  identifier: String,
  receiver: String,
  payer: String,
  type: String,
  date: Date,
  amount:Number,
  section:String,
  reason:String,
  income:Boolean
});

const Transaction = mongoose.model("Transaction", TransactionSchema);
module.exports = Transaction;
