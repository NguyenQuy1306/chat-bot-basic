const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/user.controller");

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", createUser);

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const founduser = users.find((user) => user.id === id);

  res.send(founduser);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const usersafter = users.filter((user) => user.id !== id);

  res.send(usersafter);
});

module.exports = router;
