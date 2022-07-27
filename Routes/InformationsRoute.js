const express = require("express");
const {
  CreateInformation,
  GetAllInformations,
  UpdateInformation
} = require("../Controllers/InformationsController");

const Router = express.Router();

Router.route("/").get(GetAllInformations)
Router.route("/add").post(CreateInformation);
Router.route("/update").post(UpdateInformation);

module.exports = Router;
