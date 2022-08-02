const Ingredient = require("../Models/IngredientModel");

exports.CreateIngredient = (req, res) => {
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
  try {
    const data = await Ingredient.find();
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
exports.DeleteIngredient = async (req, res) => {
  try {
    Ingredient.deleteOne({ id: req.body.id }, function (err) {
      if (err) {
        console.log(err);
        return res.status(404).json({
          ok: false,
          message: err,
        });
      }
      res.status(200).json({ ok: true });
    });
  } catch (e) {
    console.log(e)
    res.status(404).json({
      ok: false,
      message: e,
    });
  }
};
