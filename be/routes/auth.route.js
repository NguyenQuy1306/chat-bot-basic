const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

router.post("/signup", authController.authenticateUser);
router.delete("/deleteAcount/:id", authController.deleteUser);
module.exports = router;
