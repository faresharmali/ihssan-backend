const Information = require("../Models/InformationModel");

exports.CreateInformation = (req, res) => {
  console.log("Information creation");
  Information.create({
    ...req.body,
    date: new Date()
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
exports.GetAllInformations = async (req, res) => {
  try {
    const data = await Information.find();
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
