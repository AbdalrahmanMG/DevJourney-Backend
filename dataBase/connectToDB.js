const mongoose = require("mongoose");
require("dotenv").config();
let URL_DATABASE = process.env.URL_DATABASE;

let connect = () => {
  const connectDB = mongoose
    .connect(URL_DATABASE)
    .then(() => {
      console.log("connect to DB is successfully");
    })
    .catch((err) => console.log(err));
};

module.exports = connect;