const mongoose = require("mongoose");

const TokenScehema = mongoose.Schema({
  id: String,
  token: String,
  name: String,
  job: String,
 
});

const Token = mongoose.model("Token", TokenScehema);

module.exports = Token;
