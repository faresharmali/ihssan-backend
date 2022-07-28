const express = require("express");
const {
  CreateReport,
  GetAllReports,
  UpdateReport
} = require("../Controllers/ReportsController");

const Router = express.Router();
Router.route("/").get(GetAllReports);
Router.route("/add").post(CreateReport);
Router.route("/update").post(UpdateReport);

module.exports = Router;
