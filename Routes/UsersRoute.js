const express = require("express");
const {
  AddUser,
  GetAllUsers,
  GetUser,
  DeleteUser,
  UpdateUser,
} = require("../Controllers/UsersController");

const Router = express.Router();

Router.route("/").get(AddUser).post(AddUser);
Router.route("/add").get(AddUser)
Router.route("/:id").get(GetUser);
Router.route("/update/:id").patch(UpdateUser);
Router.route("/delete/:id").delete(DeleteUser);

module.exports = Router;
