const express = require("express");
const {
Login,
Signup
} = require("../Controllers/AuthController");

const Router = express.Router();

Router.route("/login").post(Login);
Router.route("/signup").get(Signup)

module.exports = Router;
