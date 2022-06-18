const express = require("express");
const {CreateIngredient,GetAllIngredients}=require("../Controllers/IngredientController")

const Router = express.Router();

Router.route("/").get(GetAllIngredients)
Router.route("/add").post(CreateIngredient);
Router.route("/status").get(CreateIngredient);
Router.route("/changeStatus").get(CreateIngredient);


module.exports = Router;
