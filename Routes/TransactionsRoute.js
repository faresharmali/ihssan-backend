const express = require("express");
const {
  AddTransaction,
  GetTransactions,
  UpdateTransaction,
  GetHassalat,
  AddHassala,
  CloseHassala,
  UpdateHassala,
  DeleteHassala,
  DeleteTransaction
} = require("../Controllers/TransactionController");

const Router = express.Router();
Router.route("/").get(GetTransactions);
Router.route("/add").post(AddTransaction);
Router.route("/udpate").post(UpdateTransaction);
Router.route("/gethassalat").get(GetHassalat);
Router.route("/addhassala").post(AddHassala);
Router.route("/updatehassala").post(UpdateHassala);
Router.route("/closehassala").post(CloseHassala);
Router.route("/deletehassala").post(DeleteHassala);
Router.route("/deletetransaction").post(DeleteTransaction);

module.exports = Router;
