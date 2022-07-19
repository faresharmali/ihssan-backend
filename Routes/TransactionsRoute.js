const express = require("express");
const {
AddTransaction,
GetTransactions,
UpdateTransaction

} = require("../Controllers/TransactionController");

const Router = express.Router();

Router.route("/").get(GetTransactions)
Router.route("/add").post(AddTransaction);
Router.route("/udpate").post(UpdateTransaction);


module.exports = Router;
