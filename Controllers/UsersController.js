const User = require("../Models/UserModel");
const Reservation = require("../Models/ReservationModel");
exports.AddUser = (req, res) => {
  User.create({
    id: req.body.id,
    name: req.body.name,
    phone: req.body.phone,
    job: req.body.job,
    username: req.body.username,
    password: req.body.password,
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
exports.GetAllUsers = async (req, res) => {
  try {
    const data = await User.find();
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
exports.getReservation = async (req, res) => {
  console.log(req);
  try {
    const data = await Reservation.find();
    res.status(200).json({
      status: "success",
      result: data,
    });
  } catch (e) {
    console.log(e);
    res.status(404).json({
      status: "error",
      message: e,
    });
  }
};
exports.AddReservation = async (req, res) => {
  Reservation.create({
    identifier: req.body.id,
    description: req.body.description,
    date: req.body.date,
    starttime: req.body.starttime,
    endtime: req.body.endtime,
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
exports.GetUser = (req, res) => {
  res.send(req.params.id);
};
exports.DeleteUser = (req, res) => {
  res.send("DeleteFamily");
};
exports.UpdateUser = (req, res) => {
  res.send("UpdateFamily");
};
