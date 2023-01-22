const Child = require("../Models/ChildModel");
const Family = require("../Models/FamilyModel");
exports.AddFamily = (req, res) => {
  Family.create({
    ...req.body,
    kids: [],
    signupDate: new Date(),
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
  Family.aggregate(
    [
      {
        $lookup: {
          from: "children",
          localField: "_id",
          foreignField: "Family",
          as: "children",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "wasseet",
          foreignField: "_id",
          as: "wasseet",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "delivery",
          foreignField: "_id",
          as: "delivery",
        },
      },
    ],
    function (err, famillies) {
      if (err) {
        res.status(404).json({
          status: "error",
          message: err,
        });
      } else {
        res.status(200).json({
          status: "success",
          result: famillies,
        });
      }
    }
  );
};
exports.GetFamily = (req, res) => {
  res.send(req.params.id);
};
exports.UpdateFamily = async (req, res) => {
  const MyFamily = await Family.findOne({
    id: req.body.id,
  }).exec();
  if (MyFamily) {
    Object.keys(req.body).forEach((key) => {
      if (key !== "id") {
        MyFamily[key] = req.body[key];
      }
    });
    MyFamily.save().then((response) => {
      res.status(200).json({ ok: true, data: MyFamily });
    });
  } else {
    console.log("not found");
  }
};
exports.AddChild = async (req, res) => {
  const MyFamily = await Family.findOne({
    _id: req.body.id,
  }).exec();
  if (MyFamily) {
    Child.create({
      Family: MyFamily._id,
      ...req.body.kid,
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
  } else {
    console.log("not found");
  }
};
exports.updateChild = async (req, res) => {
  const MyChild = await Child.findOne({
    id: req.body.id,
  }).exec();
  if (MyChild) {
    console.log("Object.keys(req.body)", Object.keys(req.body))
    Object.keys(req.body).forEach((key) => {
      if (key !== "id") {
        MyChild[key] = req.body[key];
      }
    });
    MyChild.save().then((response) => {
      res.status(200).json({ ok: true, data: MyChild });
    });
  } else {
    console.log("not found");
  }
};
exports.DeleteChild = async (req, res) => {
  Child.deleteOne({ identifier: req.body.identifier }, function (err) {
    if (err) {
      return res.status(404).json({
        ok: false,
        message: err,
      });
    }
    res.status(200).json({ ok: true });
  });
};
exports.DeleteFamily = async (req, res) => {
  Family.deleteOne({ id: req.body.id }, function (err) {
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
