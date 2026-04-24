const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

// @desc Register user
// @route POST /api/auth/register
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//@desc Login User
const loginUser = async(req,res)=>{
  try{
    const{email,password}=req.body;
    const user=await User.findOne({email});
    if(user && (await bcrypt.compare(password,user.password))){
      res.json({
        _id:user._id,
        name:user.name,
        email:user.email,
        token:generateToken(user._id)
      })
    }else{
      res.status(401).json({message:"Invalid email or password"});
    }
  }
  catch(error){
    res.status(500).json({message:error.message});
  }
};
module.exports = { registerUser, loginUser};