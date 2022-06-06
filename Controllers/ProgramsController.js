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
  Program.create({
    id: "1",
    programs: [],
    departement: "activities",
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
    const MyProgram = await Program.findOne({
      departement: req.headers.departement,
    }).exec();
    if (MyProgram) {
      res.status(200).json({
        ok: true,
        data: MyProgram,
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
