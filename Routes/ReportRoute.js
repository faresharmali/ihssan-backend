const express = require("express");
const {
  CreateReport,
  GetAllReports,
} = require("../Controllers/ReportsController");

const Router = express.Router();
Router.route("/").get(GetAllReports);
Router.route("/add").post(CreateReport);

module.exports = Router;
