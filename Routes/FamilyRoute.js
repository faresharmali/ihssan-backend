const express = require("express");
const {
  AddFamily,
  GetFamily,
  UpdateFamily,
  DeleteFamily,
} = require("../Controllers/FamiliesController");


const FamilyRouter = express.Router();

FamilyRouter.route("/get").get(GetFamily);
FamilyRouter.route("/update").get(UpdateFamily);
FamilyRouter.route("/delete").get(DeleteFamily);
FamilyRouter.route("/add").get(AddFamily);

module.exports = FamilyRouter;
