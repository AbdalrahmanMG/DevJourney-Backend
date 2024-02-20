const User = require("../models/user.model.js");

const getAllUser = async (req, res) => {
  try {
    const findAll = await User.find();
    res.json({ findAll, message: "api is working!" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const findById = await User.findById(id);
    res.json({ findById });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    // const checkid = await User.findById(id);
    // console.log(checkid);
    // if (!checkid) {
    //   res.json({
    //     statud: "fail",
    //   });
    // }
    const updated = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.send(updated);
  } catch (error) {
    next(error);
  }
};
const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteUser = await User.findByIdAndDelete(id);
    res.json({ deleteUser, message: "User Deleted successfully!" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { getAllUser, updateUser, deleteUser, getUserById };
