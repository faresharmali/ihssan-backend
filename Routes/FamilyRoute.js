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
Router.route("/delete").delete(DeleteFamily);
Router.route("/add").post(AddFamily);
Router.route("/addchild").post(AddChild);
Router.route("/updatechild").patch(updateChild);
Router.route("/deletechild").delete(DeleteChild);

module.exports = Router;
