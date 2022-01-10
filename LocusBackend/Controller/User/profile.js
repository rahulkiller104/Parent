const { validationResult } = require("express-validator");
const HttpError = require("../../models/http-error");
const UserProfile = require("../../Models/user/profile");

const userProfile = async (req, res, next) => {
  const { userId, persional, proffesional } = req.body;
  // console.log(req.body);
  const createProfile = new UserProfile({
    userId,
    persional,
    proffesional,
  });
console.log(createProfile)
  try {
    await createProfile.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      "Something went wrong, could not update profile.",
      500
    );
    return next(error);
  }
  res.status(200).json({ createProfile: createProfile });
};
exports.userProfile = userProfile;
