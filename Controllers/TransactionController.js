const Transaction=require("../Models/TransactionModel")
const Hassala=require("../Models/HassalaModel")

exports.AddTransaction = (req, res) => {
  console.log(req.body)
  Transaction.create({
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
exports.GetTransactions = async (req, res) => {
  try {
    const data = await Transaction.find();
    res.status(200).json({
      status: "success",
      result: data,
    });
  } catch (e) {
    res.status(404).json({
      status: "error",
      message: e,
    });
  }
};
exports.UpdateTransaction = async (req, res) => {
  try {
    const data = await Transaction.find();
    res.status(200).json({
      ok: true,
      result: data,
    });
  } catch (e) {
    res.status(404).json({
      ok: false,
      message: e,
    });
  }
};
exports.AddHassala = (req, res) => {
  Hassala.create({
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
exports.GetHassalat = async (req, res) => {
  try {
    const data = await Hassala.find();
    res.status(200).json({
      ok: true,
      result: data,
    });
  } catch (e) {
    res.status(404).json({
      ok: false,
      message: e,
    });
  }
};