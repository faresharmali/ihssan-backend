const express = require("express");
const {
  CreateInformation,
  GetAllInformations
} = require("../Controllers/InformationsController");

const Router = express.Router();

Router.route("/").get(GetAllInformations)
Router.route("/add").post(CreateInformation);

module.exports = Router;
