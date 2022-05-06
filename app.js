const express = require("express");
const app = express();
app.use(express.json());
var jwt = require("jsonwebtoken");

const FamilyRouter = require("./Routes/FamilyRoute");
const UsersRouter = require("./Routes/UsersRoute");
const AuthRouter = require("./Routes/authRoute");
const InformationsRouter = require("./Routes/InformationsRoute");


const CheckToken = (req, res, next) => {
  jwt.verify(req.headers.token,  process.env.JWTSECRET, (err, user) => {
    console.log("error",err)
    if (err) return res.status(403).json({ message: "Not Authorized" });
    req.body.user = user;
    next();
  });
};

app.use("/families", CheckToken, FamilyRouter);
app.use("/users", CheckToken, UsersRouter);
app.use("/informations", CheckToken, InformationsRouter);
app.use("/auth", AuthRouter);

module.exports = app;
