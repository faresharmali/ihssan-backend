const express = require("express");
const {
  AddFamily,
  GetFamily,
  GetAllFamilies,
  UpdateFamily,
  DeleteFamily,
  AddChild,
} = require("../Controllers/FamiliesController");

const Router = express.Router();

Router.route("/").get(GetAllFamilies)
Router.route("/:id").get(GetFamily);
Router.route("/update").post(UpdateFamily);
Router.route("/delete/:id").delete(DeleteFamily);
Router.route("/add").post(AddFamily);
Router.route("/addchild").post(AddChild);

module.exports = Router;
