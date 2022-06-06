const express = require("express");
const {
  GetAllActivities,
  CreateActivity
  
} = require("../Controllers/ActivitiesController");
const {AddProgramItem,CreateProgram,GetProgram} =require("../Controllers/ProgramsController")
const Router = express.Router();
Router.route("/").get(GetAllActivities);
Router.route("/add").post(CreateActivity);
Router.route("/addprogram").post(AddProgramItem);
Router.route("/createprogram").post(CreateProgram);
Router.route("/getprogram").get(GetProgram);

module.exports = Router;
