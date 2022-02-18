const express = require("express");
const {
  AddUser,
  GetAllUsers,
  GetUser,
  DeleteUser,
  UpdateUser,
} = require("../Controllers/UsersController");

const Router = express.Router();

Router.route("/").get(GetAllUsers);
Router.route("/:id").get(GetUser);
Router.route("/update/:id").get(UpdateUser);
Router.route("/delete/:id").get(DeleteUser);
Router.route("/add").get(AddUser);

module.exports = Router;
