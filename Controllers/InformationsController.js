const Information = require("../Models/InformationModel");

exports.CreateInformation = (req, res) => {
  console.log("Information creation");
  Information.create({
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
