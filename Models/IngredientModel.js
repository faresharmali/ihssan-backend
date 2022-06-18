const mongoose = require("mongoose");

const IngredientSchema = mongoose.Schema({
id:String,
name:String,
unite:String,
quantity:Number
});

const Ingredient = mongoose.model("Ingredient", IngredientSchema);

module.exports = Ingredient;
