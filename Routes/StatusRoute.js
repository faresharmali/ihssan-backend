const express = require("express");
const {GetStatus,ChangeStatus}=require("../Controllers/StatusController")
const Router = express.Router();


Router.route("/:type").get(GetStatus);
Router.route("/changeStatus").post(ChangeStatus);


module.exports = Router;
