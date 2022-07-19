const Donator = require("../Models/DonatorModel");
const Donation = require("../Models/DonationModel");

exports.AddDonator = (req, res) => {
  Donator.create({
    ...req.body,
    nextPayment: new Date(),
    joined: new Date(),
    lastPayement:"",
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
exports.GetDonations = async (req, res) => {
  try {
    const data = await Donation.find();
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
exports.GetUser = (req, res) => {
  res.send(req.params.id);
};
exports.DeleteUser = (req, res) => {
  res.send("DeleteFamily");
};
exports.UpdateUser = (req, res) => {
  res.send("UpdateFamily");
};

exports.AddDonation = (req, res) => {
  Donation.create({
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
exports.ExtendKafala = async (req, res) => {
  const MyDonator = await Donator.findOne({
    id: req.body.id,
  }).exec();
  if (MyDonator) {
    let periode = parseFloat(req.body.amount / MyDonator.donationAmount) * 30;
    let OldDate = new Date(MyDonator.nextPayment);
    let newDate = new Date(OldDate.setDate(OldDate.getDate() + periode));
    MyDonator.nextPayment = newDate;
    MyDonator.lastPayement = new Date();
    MyDonator.save().then((response) => {
      res.status(200).json({ ok: true });
    });
  } else {
    console.log("not found");
  }
};
