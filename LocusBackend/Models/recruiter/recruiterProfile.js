const mongoose = require("mongoose");

// const SkillSchema = new mongoose.Schema({
//     name: {
//       type: String,
//       required: true,
//     }
//   });


const JobSchema = new mongoose.Schema({
  position: {
    type: String,
    required: true,
  },
    organization: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
    },
      skills:{
        type: String,
        required: true,
      },

      minExperiance: {
        type: String,
        required: true,
      },
      requirement: {
        type: String,
        required: true,
      },
      lastdate: {
        type: String,
        required: true,
      },
      imageLink: {
        type: String,
        required: true,
      }
})

const RecruiterProfileSchema= new mongoose.Schema({
recruiterId: {type: String, required: true},
jobs:[JobSchema]
})
const RecruiterProfile = mongoose.model("RecruiterProfile", RecruiterProfileSchema);
module.exports = RecruiterProfile