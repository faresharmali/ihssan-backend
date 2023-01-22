const User = require("../Models/UserModel");
const Reservation = require("../Models/ReservationModel");
const Token = require("../Models/TokenModel");
const axios = require("axios");

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
  Reservation.find().populate('user').exec(function (err, data) {
    if (err){
      res.status(404).json({
        ok: false,
      message: e,
      });
    }else{
      res.status(200).json({
        ok: true,
        meetings: data,
      });
    }
   
  });

};
exports.AddReservation = async (req, res) => {
  Reservation.create({
    ...req.body,
  })
    .then(async() => {
      const tokens = await Token.find({})
      console.log("tokens",tokens)
      let AllTokens = tokens.map((t) => t.token).filter((t) => t != "null");
      AllTokens.forEach(async (token) => {
        let message = {
          to: token,
          sound: "default",
          title: "جمعية احسان لكفالة الأيتام",
          body: req.body.description,
          data: { someData: "goes here" },
        };
        try {
          await axios.post("https://exp.host/--/api/v2/push/send", message, {
            headers: {
              ContentType: " application/json",
              AcceptEncoding: "gzip, deflate",
            },
          });
        } catch (e) {
          console.error("error", e);
        }
      });

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
exports.DeleteUser = async (req, res) => {
    User.deleteOne({ id: req.body.id }, function (err) {
      if (err) {
        console.log(err);
        return res.status(404).json({
          ok: false,
          message: err,
        });
      }
      res.status(200).json({ ok: true });
    });

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
