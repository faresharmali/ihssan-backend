const express = require("express");
const {
  AddDonator,
  GetDonators,

} = require("../Controllers/DonatorController");

const Router = express.Router();

Router.route("/").get(GetDonators)
Router.route("/add").post(AddDonator);


module.exports = Router;
