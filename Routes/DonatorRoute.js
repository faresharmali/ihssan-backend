const express = require("express");
const {
  AddDonator,
  GetDonators,
  AddDonation,
  GetDonations,
  ExtendKafala,
  UpdateDonator,
  UpdateDonatorInfos,
  deleteDonator


} = require("../Controllers/DonatorController");

const Router = express.Router();

Router.route("/").get(GetDonators)
Router.route("/add").post(AddDonator);
Router.route("/newdonation").post(AddDonation);
Router.route("/getdonations").get(GetDonations);
Router.route("/extend").post(ExtendKafala);
Router.route("/update").post(UpdateDonator);
Router.route("/updateinfos").post(UpdateDonatorInfos);
Router.route("/delete").post(deleteDonator);


module.exports = Router;
