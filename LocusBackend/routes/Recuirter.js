const express = require("express");
const { check } = require("express-validator");

const recruiterController = require("../Controller/Recruiter/auth");
const ispresentController = require("../Controller/Recruiter/isPresent");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ message: "success" });
});
router.post("/signup", recruiterController.signup);

router.post("/login", recruiterController.login);

router.post("/ispresent", ispresentController.isPresent);
module.exports = router;
