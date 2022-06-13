const express = require("express");
const {
  AddUser,
  GetAllUsers,
  GetUser,
  DeleteUser,
  UpdateUser,
  AddReservation,
  getReservation,
} = require("../Controllers/UsersController");

const Router = express.Router();

Router.route("/").get(GetAllUsers);
Router.route("/reservations").get(getReservation);
Router.route("/add").post(AddUser);
Router.route("/addreservation").post(AddReservation);
Router.route("/reservations").get(getReservation);
Router.route("/:id").get(GetUser);
Router.route("/update/:id").patch(UpdateUser);
Router.route("/delete/:id").delete(DeleteUser);

module.exports = Router;
