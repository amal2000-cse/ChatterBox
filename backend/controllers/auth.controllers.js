import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    //hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
        fullName,
        username,
        password:hashedPassword,
        gender,
        profilePic: gender === "male" ? boyProfilePic : girlProfilePic
    })

    if(newUser){
      //generate JWT token
      generateTokenAndSetCookie(newUser._id, res)
      await newUser.save();
       res.status(200).json({
          _id : newUser._id,
          fullName : newUser.fullName,
          username : newUser.username,
          profilePic : newUser.profilePic
      });
    }else{
      return res.status(500).json({ error: "Internal user data" });
    }
    
    
  } catch (error) {
    console.log("Error in signup controller: " + error.message)
    return res.status(500).json({ error: "Internal Server Error" });
  }
};



export const login = async(req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPassword = await bcrypt.compare(password, user?.password || "");

    if (!user || !isPassword) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    //generate JWT token
    generateTokenAndSetCookie(user._id, res)
    res.status(200).json({
      _id : user._id,
      fullName : user.fullName,
      username : user.username,
      profilePic : user.profilePic
    });

  } catch (error) {
    console.log("Error in login controller: " + error.message)
    res.status(500).json({ error: "Internal Server Error" });
    
  }
};

export const logout = async(req, res) => {

  try {
    res.cookie("jwt", "", {maxAge: 0});
    res.status(200).json({
      message: "Successfully logged out"
    });

    
  } catch (error) {
    console.log("Error in logout controller: " + error.message)
    res.status(500).json({ error: "Internal Server Error" });
    
  }
};