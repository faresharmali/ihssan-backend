const express = require("express");
const {
  AddFamily,
  GetFamily,
  GetAllFamilies,
  UpdateFamily,
  DeleteFamily,
} = require("../Controllers/FamiliesController");

const Router = express.Router();

Router.route("/").get(GetAllFamilies)
Router.route("/:id").get(GetFamily);
Router.route("/update/:id").patch(UpdateFamily);
Router.route("/delete/:id").delete(DeleteFamily);
Router.route("/add").post(AddFamily);

module.exports = Router;
