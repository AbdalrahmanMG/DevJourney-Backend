const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user.route");
const authRoute = require("./routes/auth.router");

dotenv.config();
const app = express();
const PORT = 5000 || process.env.PORT;

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("mongo is Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use("/user", userRoute);
app.use("/auth", authRoute);

app.listen(PORT, () => {
  console.log("server is running..");
});
