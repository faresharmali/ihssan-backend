const Information = require("../Models/InformationModel");
const axios = require("axios");

const Token = require("../Models/TokenModel");
exports.CreateInformation = (req, res) => {
  Information.create({
    ...req.body,
    date: new Date(),
  })
    .then(async () => {
      let tokens;
      if (req.body.section == "كل الأقسام") {
        tokens = await Token.find();
      } else {
        tokens = await Token.find({
          job: { $in: [req.body.section, "قسم الادارة"] },
        }).exec();
      }

      let AllTokens = tokens.map((t) => t.token).filter((t) => t != "null");
      AllTokens.forEach(async (token) => {
        let message = {
          to: token,
          sound: "default",
          title: "جمعية احسان لكفالة الأيتام",
          body: req.body.title,
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
exports.GetAllInformations = async (req, res) => {
  Information.find()
    .populate("author")
    .exec(function (err, infos) {
      if (err) {
        res.status(404).json({
          status: "error",
          message: e,
        });
      } else {
        res.status(200).json({
          status: "success",
          result: infos.reverse(),
        });
      }
    });
};
exports.UpdateInformation = async (req, res) => {
  let Info = await Information.findOne({
    id: req.body.id,
  }).exec();
  if (Info) {
    (Info.section = req.body.section),
      (Info.benificier = req.body.benificier),
      (Info.content = req.body.content),
      (Info.title = req.body.title),
      (Info.kids = req.body.kids),
      (Info.famillies = req.body.famillies),
      (Info.type = req.body.type);

    Info.save().then((response) => {
      res.status(200).json({ ok: true, data: Info });
    });
  } else {
    console.log("not found");
  }
};
exports.DeleteInformation = (req, res) => {
  try {
    Information.deleteOne({ id: req.body.id }, function (err) {
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
