const express = require("express");
const {
    AddInformation,
    GetAllInformation,
    GetInformation,
    UpdateInformation,
    DeleteInformation
} = require("../Controllers/InformationsController");

const Router = express.Router();

Router.route("/get").get(GetAllInformation);
Router.route("/get/:id").get(GetInformation);
Router.route("/update").get(UpdateInformation);
Router.route("/delete").get(DeleteInformation);
Router.route("/add").get(AddInformation);

module.exports = Router;
