const Activity = require("../Models/ActivityModel");
const Education = require("../Models/EducationsModel");
exports.CreateActivity = (req, res) => {
  Activity.create({
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
exports.GetAllActivities = async (req, res) => {
  try {
    const data = await Activity.find();
    res.status(200).json({
      ok: true,
      result: data,
    });
  } catch (e) {
    res.status(404).json({
      status: "error",
      message: e,
    });
  }
};
exports.GetEducationGroupes = async (req, res) => {
  try {
    const data = await Education.find();
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
exports.AddEducationMember = async (req, res) => {
  Education.create({
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
exports.UpdateActivity = async (req, res) => {
  const MyReport = await Activity.findOne({
    id: req.body.id,
  }).exec();
  if (MyReport) {
    MyReport.title = req.body.title;
    MyReport.content = req.body.content;
    MyReport.kids = req.body.kids;
    MyReport.famillies = req.body.famillies;
    MyReport.date = req.body.date;
    MyReport.benificier = req.body.benificier;
    MyReport.save().then((response) => {
      console.log("updated", req.body.type);
      res.status(200).json({ ok: true, data: MyReport });
    });
  } else {
    console.log("not found");
  }
};
exports.DeleteActivity = async (req, res) => {
  try {
    Activity.deleteOne({ id: req.body.id }, function (err) {
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
    console.log(e)
    res.status(404).json({
      status: "error",
      message: e,
    });
  }
};
