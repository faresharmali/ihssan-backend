const express = require("express");
const {
  AddTransaction,
  GetTransactions,
  UpdateTransaction,
  GetHassalat,
  AddHassala,
} = require("../Controllers/TransactionController");

const Router = express.Router();

Router.route("/").get(GetTransactions);
Router.route("/add").post(AddTransaction);
Router.route("/udpate").post(UpdateTransaction);
Router.route("/gethassalat").get(GetHassalat);
Router.route("/addhassala").post(AddHassala);

module.exports = Router;
