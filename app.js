const express = require("express");
const app = express();
app.use(express.json());
var jwt = require("jsonwebtoken");

const FamilyRouter = require("./Routes/FamilyRoute");
const UsersRouter = require("./Routes/UsersRoute");
const AuthRouter = require("./Routes/authRoute");
const InformationsRouter = require("./Routes/InformationsRoute");
const DonatorRouter = require("./Routes/DonatorRoute");
const ReportsRouter = require("./Routes/ReportRoute");
const ActivityRouter = require("./Routes/ActivitiesRoute");


const CheckToken = (req, res, next) => {
  jwt.verify(req.headers.token,  process.env.JWTSECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Not Authorized" });
    req.body.user = user;
    next();
  });
};

app.use("/",()=>{
  res.status(200).json({message:"hello"})
});
app.use("/families", CheckToken, FamilyRouter);
app.use("/users", UsersRouter);
app.use("/informations", CheckToken, InformationsRouter);
app.use("/auth", AuthRouter);
app.use("/donators", DonatorRouter);
app.use("/reports", ReportsRouter);
app.use("/activities", ActivityRouter);
module.exports = app;
