const express = require("express");
const {
  registerUser,
  logInUser,
  findUser,
  getUsers,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", logInUser);
router.get("/find/:userId", findUser);
router.get("/", getUsers);

module.exports = router;
