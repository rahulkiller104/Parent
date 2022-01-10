const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const HttpError = require("../../models/http-error");
const Recruiter = require("../../Models/recruiter/auth");
const RecruiterProfile = require('../../Models/recruiter/recruiterProfile');

const signup = async (req, res, next) => {
  //   const errors = validationResult(req);
  //   if (!errors.isEmpty()) {
  //     return next(
  //       new HttpError("Invalid inputs passed, please check your data.", 422)
  //     );
  //   }
  console.log("signup");

  const { firstName, secondName, emailormobile, password } = req.body;

  let existingUser;
  try {
    existingUser = await Recruiter.findOne({ emailormobile: emailormobile });
  } catch (err) {
    const error = new HttpError(
      "Signing up failed, please try again later1.",
      500
    );
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError("Recruiter exists already", 422);
    return next(error);
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError(
      "Could not create user, please try again.",
      500
    );
    return next(error);
  }

  const createdUser = new Recruiter({
    firstName,
    secondName,
    emailormobile,
    password: hashedPassword,
  });

  try {
    await createdUser.save();
    const newRecruiter = new RecruiterProfile({
      recruiterId:createdUser.id,
      jobs:[]
      })
    await newRecruiter.save();
  } catch (err) {
    const error = new HttpError(
      "Signing up failed, please try again later save signup.",
      500
    );
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: createdUser.id, emailormobile: createdUser.emailormobile },
      "supersecret_dont_share"
      //   { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new HttpError(
      "Signing up failed, please try again later2.",
      500
    );
    return next(error);
  }

  
   



  res.status(201).json({
    userId: createdUser.id,
    emailormobile: createdUser.emailormobile,
    token: token,
  });
};

const login = async (req, res, next) => {
  const { emailormobile, password } = req.body;

  let existingUser;

  try {
    existingUser = await Recruiter.findOne({ emailormobile: emailormobile });
  } catch (err) {
    const error = new HttpError(
      "Logging in failed, please try again later.",
      500
    );
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError(
      "Invalid credentials, could not log you in.",
      401
    );
    return next(error);
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError(
      "Could not log you in, please check your credentials and try again.",
      500
    );
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError(
      "Invalid credentials, could not log you in.",
      401
    );
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: existingUser.id, emailormobile: existingUser.emailormobile },
      "supersecret_dont_share"
      //   { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new HttpError(
      "Logging in failed, please try again later.",
      500
    );
    return next(error);
  }

  res.json({
    userId: existingUser.id,
    emailormobile: existingUser.emailormobile,
    token: token,
  });
};

exports.signup = signup;
exports.login = login;
