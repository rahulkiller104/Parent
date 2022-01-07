const mongoose = require("mongoose");

const PersonalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dateofbirth: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  pan: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
    required: true,
  },
});

const SkillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  star: {
    type: Number,
    default: 0,
  },
});

const CertificateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imagelink: {
    type: String,
    required: true,
  },
  orgname: {
    type: String,
    required: true,
  },
  issuedate: {
    type: String,
    required: true,
  },
  expireydate: {
    type: String,
    required: true,
  },
  credentiallink: {
    type: String,
    required: true,
  },
});

const ProfessionalSchema = new mongoose.Schema({
  profileset: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  currentorg: {
    type: String,
    required: true,
  },
  currentctc: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },

  resume: {
    type: String,
    required: true,
  },

  skills: [SkillSchema],
  certificates: [CertificateSchema],
});

const ProfileSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  persional: PersonalSchema,
  proffesional: ProfessionalSchema,
});

const UserProfile = mongoose.model("UserProfile", ProfileSchema);

module.exports = UserProfile;
