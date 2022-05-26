const express = require("express");
const {
  GetAllActivities,
  CreateActivity,
} = require("../Controllers/ActivitiesController");
const Router = express.Router();
Router.route("/").get(GetAllActivities);
Router.route("/add").post(CreateActivity);

module.exports = Router;
