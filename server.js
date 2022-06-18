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
app.listen(3000, () => {
  console.log("app working on server",3000);
});
