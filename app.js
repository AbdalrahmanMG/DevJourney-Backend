const express = require("express");
const dotenv = require("dotenv");
const userRoute = require("./routes/user.route");
const authRoute = require("./routes/auth.router");
const storsRoute = require("./routes/stories.router");
const connect=require("./dataBase/connectToDB");


dotenv.config();
const app = express();
const PORT = 5000 || process.env.PORT;


app.use(express.json());

app.use("/user", userRoute);
app.use("/auth", authRoute);

//stories
app.use("/story", storsRoute);


connect()
app.listen(PORT, () => {
  console.log(PORT,"server is running..");
});
