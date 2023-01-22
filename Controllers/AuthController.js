const User = require("../Models/UserModel");
var jwt = require("jsonwebtoken");

exports.Login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username }).exec();
    if (user && user.password == req.body.password) {
      let token = jwt.sign({ ...user._doc }, process.env.JWTSECRET);
      let { name, phone, job,id,username,joined,_id } = user;
      res.status(200).json({
        ok: true,
        status: "success",
        result: {
          user: { name, phone, job, token,id,username,joined,_id },
        },
      });
    } else {
      res.status(200).json({
        ok: false,
        status: "fail",
        message: "invalid credentials",
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
