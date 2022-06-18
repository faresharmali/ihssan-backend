const mongoose = require("mongoose");

const StatusSchema = mongoose.Schema({
id:String,
status:String,
type:String,
month:String,
year:String,
});

const Status = mongoose.model("Status", StatusSchema);

module.exports = Status;
