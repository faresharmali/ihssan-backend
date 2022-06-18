const Ingredient = require("../Models/IngredientModel");

exports.CreateIngredient = (req, res) => {
  console.log("Information creation");
  Ingredient.create({
    ...req.body,
  })
    .then(() => {
      res.status(200).json({
        ok: true,
      });
    })
    .catch((e) => {
      console.log(e);
      res.sendStatus(404);
    });
};
exports.GetAllIngredients = async (req, res) => {
    console.log("ingredients")
  try {
    const data = await Ingredient.find();
    console.log(data)
    res.status(200).json({
      ok: true,
      status: "success",
      result: data,
    });
  } catch (e) {
    res.status(404).json({
      ok: false,

      status: "error",
      message: e,
    });
  }
};
exports.GetStatus = async (req, res) => {
  try {
    const data = await Ingredient.find();
    console.log(data)
    res.status(200).json({
      ok: true,
      status: "success",
      result: data,
    });
  } catch (e) {
    res.status(404).json({
      ok: false,

      status: "error",
      message: e,
    });
  }
};
exports.ChangeStatus = async (req, res) => {
  try {
    const data = await Ingredient.find();
    console.log(data)
    res.status(200).json({
      ok: true,
      status: "success",
      result: data,
    });
  } catch (e) {
    res.status(404).json({
      ok: false,

      status: "error",
      message: e,
    });
  }
};
