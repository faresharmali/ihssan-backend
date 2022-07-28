const Report = require("../Models/ReportModel");

exports.CreateReport = (req, res) => {
  Report.create({
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
exports.GetAllReports = async (req, res) => {
  try {
    const data = await Report.find();
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
exports.UpdateReport = async (req, res) => {
  const MyReport = await Report.findOne({
    id: req.body.id,
  }).exec();
  if (MyReport) {
    MyReport.title = req.body.title;
    MyReport.content = req.body.content;
    MyReport.type = req.body.type;
    MyReport.save().then((response) => {
      console.log("updated", req.body.type);
      res.status(200).json({ ok: true, data: MyReport });
    });
  } else {
    console.log("not found");
  }
};
