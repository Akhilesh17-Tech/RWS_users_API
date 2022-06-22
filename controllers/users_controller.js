const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.register = async function (req, res) {
  try {
    let email = req.body.email;
    let name = req.body.name;
    // console.log("==============================================", req.body);

    // checking both password in form to be same
    if (req.body.password != req.body.confirm_password) {
      return res.status(403).json({
        success: false,
        message: "Password doesn't matched",
      });
    }
    // finding user if already exist
    let user = await User.findOne({ email: email });
    if (!user) {
      let salt = 7;
      // encrypting password
      let passwordHash = await bcrypt.hash(req.body.password, salt);
      // creating user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: passwordHash,
      });

      return res.status(200).json({
        success: true,
        message: `User ${name} Registered Successfully with ${email}`,
      });
    } else {
      return res.status(402).json({
        success: false,
        message: "User exist with these email address",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports.createSession = async function (req, res) {
  try {
    //   finding the user in db
    let user = await User.findOne({ email: req.body.email });

    // checking if user exist or not
    if (!user) {
      return res.status(402).json({
        success: false,
        message: "Please Register! account not exist with these email",
      });
    }

    // comparing encrypted password with input password
    bcrypt.compare(req.body.password, user.password, function (err, result) {
      if (result != true) {
        return res.status(402).json({
          success: false,
          message: "Invalid Username or Password",
        });
      }
      //   if password matched return user
      return res.status(200).json({
        success: true,
        message: `Hello ${user.name} you are Sign-in successfully!`,
      });
      h;
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
