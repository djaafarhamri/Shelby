const jwt = require("jsonwebtoken");
const User = require("../models/User");
const dotenv = require("dotenv");
dotenv.config();

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.status(400);
      } else {
        next();
      }
    });
  } else {
    res.json("object");
  }
};
// require admin
const requireAdmin = (req, res, next) => {
  const token = req.cookies.jwt;
  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      let admin = await User.findById(decodedToken.id);
      if (err || admin.isAdmin !== "admin") {
          if(err) console.log(err.message);
        res.status(400).json('not admin');
    } else {
        next();
    }
});
} else {
    res.status(400).json('no token found');
  }
};
// require manager
const requireManager = (req, res, next) => {
  const token = req.cookies.jwt;
  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      let admin = await User.findById(decodedToken.id);
      if (!err && (admin.role === "manager" || admin.role === "admin")) {
        next();
      } else {
        if(err) console.log(err.message);
        res.status(400).json('not manager');
    }
});
} else {
    res.status(400).json('no token found');
  }
};

// check current user
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        req.currUser = null;
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        req.currUser = user;
        next();
      }
    });
  } else {
    req.currUser = null;
    next();
  }
};

module.exports = { requireAuth, checkUser, requireAdmin };
