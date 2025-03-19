const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const { generateTokenAndSetCookie } = require("../utils/generateToken.js");

// Register User
const register = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ error: "User already exists" });
    const displayName = name;
    user = new User({
      email,
      password,
      displayName,
    });
    await user.save();

   generateTokenAndSetCookie(user._id, res);
    res.status(201).json({
      name: displayName,
      email: email,
      token: token,
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Login User
const login = async (req, res) => {
  const { email, password } = req.body;
  console.log("Received login request:", req.body);

  try {
    const user = await User.findOne({ email });
    console.log("Going For user search");
    if (!user) return res.status(400).json({ error: "User Not Found" });
    console.log("User Found",user);

    console.log("Going For Password");
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ error: "Invalid credentials" });
    console.log("Password matched");

    await generateTokenAndSetCookie(user._id, res);
    console.log("Set cookie sucessfully");

    res.json({ name: user.displayName, email: user.email });
    console.log("Response sent");
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const logout = (req, res) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

// Google OAuth
const googleAuth = passport.authenticate("google", {
  scope: ["profile", "email"],
});

const googleAuthCallback = (req, res) => {
  const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.redirect(`http://localhost:3000?token=${token}`);
};

module.exports = { register, login, googleAuth, googleAuthCallback ,logout};
