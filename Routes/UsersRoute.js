const express = require("express");
const {
  AddUser,
  GetAllUsers,
  GetUser,
  DeleteUser,
  AddReservation,
  getReservation,
  UpdateUser,
  DeleteReservation,
  updateToken,
  UpdateProfile
} = require("../Controllers/UsersController");

const Router = express.Router();
Router.route("/").get(GetAllUsers);
Router.route("/reservations").get(getReservation);
Router.route("/add").post(AddUser);
Router.route("/update").post(UpdateUser);
Router.route("/updateprofile").post(UpdateProfile);
Router.route("/addreservation").post(AddReservation);
Router.route("/deletereservation").post(DeleteReservation);
Router.route("/reservations").get(getReservation);
Router.route("/:id").get(GetUser);
Router.route("/delete/:id").delete(DeleteUser);
Router.route("/notifications").post(updateToken);
module.exports = Router;
