const User = require("../models/user.model.js");
const bcryptjs = require("bcryptjs");

const signup = async (req, res, next) => {
  try {
    const { name, username, email, password, age, gender, role, phoneNumber,isActive } =
      req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    await User.create({
      name,
      username,
      email,
      password: hashedPassword,
      age,
      gender,
      role,
      phoneNumber,
      address:{
        country: req.body.address.country,
        city: req.body.address.city,
      },
      isActive
    });
    res.status(201).json({ status: "success" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { signup };
