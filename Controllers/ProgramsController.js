const Program = require("../Models/ProgramModel");

exports.AddProgramItem = async (req, res) => {
  const MyProgram = await Program.findOne({
    id: req.body.id,
  }).exec();
  if (MyProgram) {
    let Programs = [...MyProgram.items];
    Programs.push(req.body.program);
    MyProgram.items = Programs;
    MyProgram.save()
      .then((response) => {
        res.status(200).json({ ok: true, data: MyProgram });
      })
      .catch((e) => console.error(e));
  } else {
    console.log("not found");
  }
};
exports.CreateProgram = async (req, res) => {
  console.log("re",req.body)
  Program.create({
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
exports.GetProgram = async (req, res) => {
  try {
    const result = await Program.find();
    if (result) {
      res.status(200).json({
        ok: true,
        result: result,
      });
    } else {
      res.status(200).json({
        ok: false,
        status: "fail",
        message: "not found",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};
exports.DeleteProgram = async (req, res) => {
  try {
    Program.deleteOne({ id: req.body.id }, function (err) {
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
      ok: false,
      message: e,
    });
  }
};
