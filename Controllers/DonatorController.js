const Donator = require("../Models/DonatorModel");

exports.AddDonator = (req, res) => {
  console.log("donator creation")
    Donator.create({
    name: req.body.name,
    phone: req.body.phone,
    job: req.body.job,
    user:req.body.user,
    type:req.body.type
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
exports.GetDonators = async (req, res) => {
  try {
    const data = await Donator.find();
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
exports.GetUser = (req, res) => {
  res.send(req.params.id);
};
exports.DeleteUser = (req, res) => {
  res.send("DeleteFamily");
};
exports.UpdateUser = (req, res) => {
  res.send("UpdateFamily");
};

