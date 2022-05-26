const Family = require("../Models/FamilyModel");
exports.AddFamily = (req, res) => {
  Family.create({
    id: req.body.id,
    fatherFirstName: req.body.fatherFirstName,
    fatherLastName: req.body.fatherLastName,
    motherFullName: req.body.motherFullName,
    donation: req.body.donation,
    salary: req.body.salary,
    kids: [],
    phone: req.body.phone,
    signupDate: new Date(),
    adresse: req.body.adresse,
    wasseet: req.body.wasseet,
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
exports.AddChild = async (req, res) => {
  console.log(req.body.identifier)
  const MyFamily = await Family.findOne({
    identifier: req.body.identifier,
  }).exec();
  if (MyFamily) {
    let Childrern = [...MyFamily.kids];
    Childrern.push(req.body.kid);
    MyFamily.kids = Childrern;
    MyFamily.save().then((response) => {
      res.status(200).json({ ok: true, data: MyFamily });
    });
  } else {
    console.log("not found")
  }
};
