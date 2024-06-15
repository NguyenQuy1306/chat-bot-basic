const AuthModel = require("../models/auth.model");
let authModel = new AuthModel();
const LocalStrategy = require("passport-local");
const passport = require("passport");
const pool = require("../loaders/db");
const bluebird = require("bluebird");
const bcrypt = require("bcryptjs/dist/bcrypt");
// const mysql = require("mysql/promise");

exports.signupUser = async (req, res, next) => {
  const { email, password, username } = req.body;
  authModel.signupUser({ email, password, username }, (error, result) => {
    if (error) {
      return res.status(500).json({ message: "create account fail" });
    } else if (result) {
      return res.status(200).json({ message: "Đăng ký thành công" });
    }
  });
};
exports.deleteUser = async (req, res, next) => {
  const id = req.params.id || "No user ID provided";
  authModel.deleteAccountUser(id, (error, result) => {
    if (error) {
      return res.status(500).json({ message: "delete account fail" });
    } else if (result) {
      return res.status(200).json({ message: "delete account successfully" });
    }
  });
};

exports.authencicateUser = (req, res, next) => {
  const { username, password, serviceURL } = req.body;
  let checkPass = bcrypt.compare;
  authModel.loginUser({ username, password }, (error, result) => {
    if (error) {
      res.status(500).json({ message: "login fail" });
    } else {
      if (result.length > 0) {
        return res.status(200).json({ message: "login success" });
      } else {
        return res.status(401).json({ message: "your account is wrong" });
      }
    }
  });
};

exports.user;

exports.ssoUser = () => {
  passport.use(
    new LocalStrategy(function verify(username, password, cb) {
      console.log("usename:", username, " password: ", password);
      // db.get(
      //   "SELECT * FROM users WHERE username = ?",
      //   [username],
      //   function (err, row) {
      //     if (err) {
      //       return cb(err);
      //     }
      //     if (!row) {
      //       return cb(null, false, {
      //         message: "Incorrect username or password.",
      //       });
      //     }

      //     crypto.pbkdf2(
      //       password,
      //       row.salt,
      //       310000,
      //       32,
      //       "sha256",
      //       function (err, hashedPassword) {
      //         if (err) {
      //           return cb(err);
      //         }
      //         if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
      //           return cb(null, false, {
      //             message: "Incorrect username or password.",
      //           });
      //         }
      //         return cb(null, row);
      //       }
      //     );
      //   }
      // );
    })
  );
};

// exports.authencicateUser = (req, res, next) => {
//   const { username, password } = req.body;
//   authModel.loginUser({ username, password }, (error, result) => {
//     if (error) {
//       res.status(500).json({ message: "login fail" });
//     } else {
//       if (result.length > 0) {
//         res.status(200).json({ message: "login success" });
//       } else {
//         res.status(401).json({ message: "your account is wrong" });
//       }
//     }
//   });
// };
