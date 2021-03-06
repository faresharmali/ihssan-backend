require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("database Connected");
  });
app.listen(process.env.PORT, () => {
  console.log("app working on server",process.env.PORT);
});
