const express = require("express");
const {
  AddUser,
  GetAllUsers,
  GetUser,
  DeleteUser,
  UpdateUser,
} = require("../Controllers/UsersController");

const Router = express.Router();

Router.route("/").get(GetAllUsers).post(AddUser);
Router.route("/:id").get(GetUser);
Router.route("/update/:id").patch(UpdateUser);
Router.route("/delete/:id").delete(DeleteUser);

module.exports = Router;
