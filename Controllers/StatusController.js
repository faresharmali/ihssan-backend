const Status = require("../Models/StatusModel");

exports.GetStatus = async (req, res) => {
  try {
    const data = await Status.find({ type: req.params.type }).exec();
    res.status(200).json({
      ok: true,
      status: "success",
      result: data,
    });
  } catch (e) {
    res.status(404).json({
      ok: false,

      status: "error",
      message: e,
    });
  }
};
exports.ChangeStatus = async (req, res) => {
    console.log("change status")
  Status.create({
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
