const Family = require("../Models/FamilyModel");
exports.AddFamily = (req, res) => {
  Family.create({
    identifier:req.body.id,
    fatherFirstName: req.body.fatherFirstName,
    fatherLastName: req.body.fatherLastName,
    motherFullName: req.body.motherFullName,
    donation: req.body.donation,
    salary: req.body.salary,
    kids: [],
    phone: req.body.phone,
    signupDate: new Date(),
    adresse: req.body.adresse,
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
exports.GetAllFamilies = async (req, res) => {
    console.log("called")
  try {
    const data = await Family.find();
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
exports.GetFamily = (req, res) => {
  res.send(req.params.id);
};
exports.DeleteFamily = (req, res) => {
  res.send("DeleteFamily");
};
exports.UpdateFamily = (req, res) => {
  res.send("UpdateFamily");
};
