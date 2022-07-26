const User = require("../Models/UserModel");
const Reservation = require("../Models/ReservationModel");
const Token = require("../Models/TokenModel");
exports.AddUser = (req, res) => {
  User.create({
    id: req.body.id,
    name: req.body.name,
    phone: req.body.phone,
    job: req.body.job,
    username: req.body.username,
    password: req.body.password,
    famillies: req.body.famillies,
    joined: new Date(),
  })
    .then(() => {
      Token.create({
        id: req.body.id,
        token: "null",
      }).then(() => {
        res.status(200).json({
          ok: true,
        });
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
exports.getReservation = async (req, res) => {
  try {
    const data = await Reservation.find();
    res.status(200).json({
      ok: true,
      meetings: data,
    });
  } catch (e) {
    console.log(e);
    res.status(404).json({
      ok: false,
      message: e,
    });
  }
};
exports.AddReservation = async (req, res) => {
  Reservation.create({
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
exports.GetUser = (req, res) => {
  res.send(req.params.id);
};
exports.DeleteUser = (req, res) => {
  res.send("DeleteFamily");
};
exports.UpdateUser = async (req, res) => {
  const MyUser = await User.findOne({
    id: req.body.id,
  }).exec();
  if (MyUser) {
    MyUser.famillies = [...req.body.famillies];
    MyUser.save().then((response) => {
      res.status(200).json({ ok: true, data: MyUser });
    });
  } else {
    console.log("not found");
  }
};
