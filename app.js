const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user.route");
const authRoute = require("./routes/auth.router");
const {verifyToken , checkRole} = require("./middleware/auth");

dotenv.config();
const app = express();
const PORT =  process.env.PORT||5000;



mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("mongo is Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use("/user",verifyToken,checkRole(), userRoute);
app.use("/devjourney", authRoute);

app.listen(PORT, () => {
  console.log("server is running..");
});
