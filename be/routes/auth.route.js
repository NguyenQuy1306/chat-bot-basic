const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const passport = require("passport");
router.post("/signup", authController.signupUser);
router.post("/login", authController.authencicateUser);
// router.post(
//   "/login",
//   passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/login",
//   })
// );
router.delete("/deleteAcount/:id", authController.deleteUser);
module.exports = router;
