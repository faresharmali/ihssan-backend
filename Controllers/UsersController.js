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
        name: req.body.name,
        token: "null",
        job: req.body.job,
      }).then(() => {
        res.status(200).json({
          ok: true,
        });
      });
    })
    .catch((e) => {
      console.log("username exists");
      console.log(e);
      res.sendStatus(404);
    });
};
exports.updateToken = async (req, res) => {
  const MyUser = await Token.findOne({
    id: req.body.id,
  }).exec();
  if (MyUser) {
    MyUser.token = req.body.token;
    MyUser.save().then((response) => {
      res.status(200).json({ ok: true, data: MyUser });
    });
  } else {
    res.status(200).json({ ok: false });
    console.log("not found");
  }
};
exports.GetAllUsers = async (req, res) => {
  User.aggregate(
    [
      {
        $lookup: {
          from: "families",
          localField: "_id",
          foreignField: "wasseet",
          as: "followers",
        },
      },
      {
        $lookup: {
          from: "families",
          localField: "_id",
          foreignField: "delivery",
          as: "deliveries",
        },
      },
    ],
    function (err, users) {
      if (err) {
        res.status(404).json({
          ok: false,
          message: err,
        });
      } else {
        res.status(200).json({
          ok: true,
          result: users,
        });
      }
    }
  );
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
exports.UpdateProfile = async (req, res) => {
  let MyUser = await User.findOne({
    id: req.body.id,
  }).exec();
  if (MyUser) {
    Object.keys(req.body).forEach((key) => {
      if (key !== "id") {
        MyUser[key] = req.body[key];
      }
    });
    MyUser.save().then((response) => {
      res.status(200).json({ ok: true, data: MyUser });
    });
  } else {
    console.log("not found");
  }
};
exports.DeleteReservation = async (req, res) => {
  try {
    Reservation.deleteOne({ id: req.body.id }, function (err) {
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
    console.log(e);
    res.status(404).json({
      ok: false,
      message: e,
    });
  }
};
