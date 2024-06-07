const AuthModel = require("../models/auth.model");
let authModel = new AuthModel();

exports.authenticateUser = async (req, res, next) => {
  const { username, password, hovaten } = req.body;
  authModel.signupUser({ username, password, hovaten }, (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "create account fail" });
    } else if (result) {
      //   res.status(200).send("Đăng ký thành công");
      res.status(201).json({ message: "Đăng ký thành công" });
    }
  });
};
exports.deleteUser = async (req, res, next) => {
  const id = req.params.id || "No user ID provided";
  authModel.deleteAccountUser(id, (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "delete account fail" });
    } else if (result) {
      console.log(result);
      res.status(200).json({ message: "delete account successfully" });
    }
  });
};
