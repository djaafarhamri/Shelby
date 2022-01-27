const User = require("../models/User");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

//! create token :
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

//? login :
module.exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.login(username, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ role: user.role });
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports.logout = (req, res) => {
  return res.status(202).clearCookie("jwt").send("cookie cleared");
};

module.exports.checkuser = (req, res) => {
  res.status(200);
};
