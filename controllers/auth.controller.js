const User = require("../models/user.model.js");
const bcryptjs = require("bcrypt");
const jwt = require("jsonwebtoken")

const signup = async (req, res, next) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    const hashedPassword = await bcryptjs.hash(password , 10);

    await User.create({ firstname, lastname, email, password: hashedPassword , role:"admin" });
    res.status(201).json({ status: "success" });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({message : "Internal Server Error"})
  }
};


const login = async (req, res, next)=>{
  try {
    const {email , password} = req.body;

    const userOrAdmin = await User.findOne({email:email});
    if(!userOrAdmin) return res.status(400).json({ message:"Invalid Credentials" })

    const hashedPassword = await bcryptjs.compare(password , userOrAdmin.password)

    if(!hashedPassword) return res.status(400).json({ message:"Invalid Credentials" })

    const token = jwt.sign({_id:userOrAdmin._id , role:userOrAdmin.role , email:userOrAdmin.email , firstname:userOrAdmin.firstname , lastname:userOrAdmin.lastname} , process.env.PRIVATE_KEY_TOKEN)

    res.json({
      token
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({message : "Internal Server Error"});
  }
}

module.exports = { signup,login };
