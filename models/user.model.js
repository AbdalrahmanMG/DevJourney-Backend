const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
      min: 12,
      max: 80,
    },
    address: {
      country: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "user"],
    },
    phoneNumber: {
      type: String,
      required: true,
      validate: {
        validator: function (number) {
          return /^[0-9]{11}$/.test(number);
        },
      },
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
