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
    sick: req.body.sick,
    sickness: req.body.sickness,
    wasseet: req.body.wasseet,
    kofa: req.body.kofa,
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
exports.UpdateFamily = async (req, res) => {
  const MyFamily = await Family.findOne({
    id: req.body.id,
  }).exec();
  if (MyFamily) {
    MyFamily.fatherFirstName= req.body.fatherFirstName
    MyFamily.fatherLastName= req.body.fatherLastName
    MyFamily.motherFullName= req.body.motherFullName
    MyFamily.donation= req.body.donation
    MyFamily.salary= req.body.salary
    MyFamily.phone= req.body.phone
    MyFamily.adresse= req.body.adresse
    MyFamily.sick= req.body.sick
    MyFamily.sickness= req.body.sickness
    MyFamily.wasseet= req.body.wasseet
    MyFamily.kofa= req.body.kofa
    MyFamily.kids= req.body.kids
    MyFamily.save().then((response) => {
      console.log("updated",req.body.kids)
      res.status(200).json({ ok: true, data: MyFamily });
    });
  } else {
    console.log("not found");
  }
};
exports.AddChild = async (req, res) => {
  const MyFamily = await Family.findOne({
    id: req.body.id,
  }).exec();
  if (MyFamily) {
    let Childrern = [...MyFamily.kids];
    Childrern.push(req.body.kid);
    MyFamily.kids = Childrern;
    MyFamily.save().then((response) => {
      res.status(200).json({ ok: true, data: MyFamily });
    });
  } else {
    console.log("not found");
  }
};
exports.updateChild = async (req, res) => {
  const MyFamily = await Family.findOne({
    id: req.body.id,
  }).exec();
  if (MyFamily) {
    let Childrern = [...MyFamily.kids];
    Childrern.push(req.body.kid);
    MyFamily.kids = Childrern;
    MyFamily.save().then((response) => {
      res.status(200).json({ ok: true, data: MyFamily });
    });
  } else {
    console.log("not found");
  }
};
