const express = require("express");
const {CreateIngredient,GetAllIngredients,DeleteIngredient}=require("../Controllers/IngredientController")

const Router = express.Router();

Router.route("/").get(GetAllIngredients)
Router.route("/add").post(CreateIngredient);
Router.route("/status").get(CreateIngredient);
Router.route("/changeStatus").get(CreateIngredient);
Router.route("/delete").post(DeleteIngredient);


module.exports = Router;
