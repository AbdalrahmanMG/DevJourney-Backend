const express = require("express");
const dotenv = require("dotenv");
const userRoute = require("./routes/user.route");
const authRoute = require("./routes/auth.router");

const storsRoute = require("./routes/stories.router");
const connect=require("./dataBase/connectToDB");

const {verifyToken , checkRole} = require("./middleware/auth");


dotenv.config();
const app = express();
const PORT =  process.env.PORT||5000;




app.use(express.json());

app.use("/user",verifyToken,checkRole(), userRoute);
app.use("/devjourney", authRoute);

//stories
app.use("/story", storsRoute);


connect()
app.listen(PORT, () => {
  console.log(PORT,"server is running..");
});
