const express = require("express");
const {
  GetAllActivities,
  CreateActivity,
  GetEducationGroupes,
  AddEducationMember,
  UpdateActivity,
  DeleteActivity
} = require("../Controllers/ActivitiesController");
const {
  AddProgramItem,
  CreateProgram,
  GetProgram,
  DeleteProgram
} = require("../Controllers/ProgramsController");
const Router = express.Router();
Router.route("/").get(GetAllActivities);
Router.route("/add").post(CreateActivity);
Router.route("/addprogram").post(AddProgramItem);
Router.route("/createprogram").post(CreateProgram);
Router.route("/getprogram").get(GetProgram);
Router.route("/geteducation").get(GetEducationGroupes);
Router.route("/addeducationmember").post(AddEducationMember);
Router.route("/update").post(UpdateActivity);
Router.route("/delete").post(DeleteActivity);
Router.route("/deleteprogram").post(DeleteProgram);

module.exports = Router;
