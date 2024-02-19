const User = require("../models/user.model.js");
const bcryptjs = require("bcryptjs");

const signup = async (req, res, next) => {
  try {
    const { name, username, email, password } = req.body;

    const hashedPassword = bcryptjs.hashSync(password, 10);
    await User.create({ name, username, email, password: hashedPassword });
    res.status(201).json({ status: "success" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { signup };
