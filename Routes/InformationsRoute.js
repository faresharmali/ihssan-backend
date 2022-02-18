const express = require("express");
const {
    AddInformation,
    GetAllInformation,
    GetInformation,
    UpdateInformation,
    DeleteInformation
} = require("../Controllers/InformationsController");

const Router = express.Router();

Router.route("/get").get(GetAllInformation).post(AddInformation);
Router.route("/get/:id").get(GetInformation);
Router.route("/update").patch(UpdateInformation);
Router.route("/delete").delete(DeleteInformation);

module.exports = Router;
