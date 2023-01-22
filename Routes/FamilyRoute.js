const express = require("express");
const {
  AddFamily,
  GetFamily,
  GetAllFamilies,
  UpdateFamily,
  DeleteFamily,
  AddChild,
  DeleteChild,
  updateChild
} = require("../Controllers/FamiliesController");

const Router = express.Router();

Router.route("/").get(GetAllFamilies)
Router.route("/:id").get(GetFamily);
Router.route("/update").post(UpdateFamily);
Router.route("/deletefamily").post(DeleteFamily);
Router.route("/add").post(AddFamily);
Router.route("/addchild").post(AddChild);
Router.route("/updatechild").post(updateChild);
Router.route("/deletechild").post(DeleteChild);

module.exports = Router;
