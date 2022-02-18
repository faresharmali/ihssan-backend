const express = require("express");
const {
  AddFamily,
  GetFamily,
  GetAllFamilies,
  UpdateFamily,
  DeleteFamily,
} = require("../Controllers/FamiliesController");

const Router = express.Router();

Router.route("/").get(GetAllFamilies);
Router.route("/:id").get(GetFamily);
Router.route("/update/:id").get(UpdateFamily);
Router.route("/delete/:id").get(DeleteFamily);
Router.route("/add").get(AddFamily);

module.exports = Router;
