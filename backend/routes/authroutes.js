const express = require("express");
const {
  register,
  login,
  googleAuth,
} = require("../controllers/authcontroller");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/google", googleAuth);

module.exports = router;
