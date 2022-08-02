const express = require("express");
const {
  CreateInformation,
  GetAllInformations,
  UpdateInformation,
  DeleteInformation
} = require("../Controllers/InformationsController");

const Router = express.Router();

Router.route("/").get(GetAllInformations)
Router.route("/add").post(CreateInformation);
Router.route("/update").post(UpdateInformation);
Router.route("/delete").post(DeleteInformation);

module.exports = Router;
