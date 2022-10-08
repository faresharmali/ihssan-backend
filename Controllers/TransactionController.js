const Transaction = require("../Models/TransactionModel");
const Hassala = require("../Models/HassalaModel");

exports.AddTransaction = (req, res) => {
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
    amount:0,
    received: false,
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

exports.UpdateHassala = async (req, res) => {
  const MyHassala = await Hassala.findOne({
    identifier: req.body.identifier,
  }).exec();
  if (MyHassala) {
    MyHassala.location = req.body.location;
    MyHassala.name = req.body.name;
    MyHassala.save().then((response) => {
      res.status(200).json({ ok: true, data: MyHassala });
    });
  } else {
    res.status(200).json({ ok: false, message: "error" });
  }
};
exports.CloseHassala = async (req, res) => {
  const MyHassala = await Hassala.findOne({
    identifier: req.body.identifier,
  }).exec();
  if (MyHassala) {
    MyHassala.receiver = req.body.receiver;
    MyHassala.amount = req.body.amount;
    MyHassala.received = true;
    MyHassala.save().then((response) => {
      res.status(200).json({ ok: true, data: MyHassala });
    });
  } else {
    res.status(200).json({ ok: false, message: "error" });
  }
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
exports.DeleteHassala = async (req, res) => {
  try {
    Hassala.deleteOne({ identifier: req.body.identifier }, function (err) {
      if (err) {
        return res.status(404).json({
          ok: false,
          message: err,
        });
      }
      res.status(200).json({ ok: true });
    });
  } catch (e) {
    res.status(404).json({
      status: "error",
      message: e,
      ok:false
    });
  }
};