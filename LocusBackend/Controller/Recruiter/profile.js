const HttpError = require("../../models/http-error");
const RecruiterProfile = require('../../Models/recruiter/recruiterProfile');

//get the all jobs which has added by recruiter
const recruiterProfile =async(req, res, next) =>{
    const recruiterId=req.headers.authorization.split(" ")[1]; 
    let existingRecruiter;
    try {
      existingRecruiter = await RecruiterProfile.findOne({ recruiterId: recruiterId});

    } catch (err) {
      const error = new HttpError(
        "No recruiter is present",
        500
      );
      return next(error);
    }

   if(!existingRecruiter){
    const error = new HttpError(
        "No jobs added by you",
        401
      );
      return next(error);
   }

    res.json({existingRecruiter: existingRecruiter});
  
}

//add the jobs by recruiter

const addjobs=async(req, res, next)=> {
    const {recruiterId,job}=req.body;
    // console.log(req.body);
    
    let existingRecruiter;
    try {
      existingRecruiter = await RecruiterProfile.findOne({ recruiterId: recruiterId});
    } catch (err) {
      const error = new HttpError(
        "No recruiter is present",
        500
      );
      return next(error);
    }
   existingRecruiter.jobs.push(job); 
console.log(job); 
console.log(existingRecruiter)
 try {  
    await existingRecruiter.save();
  } catch (err) {
      console.log(err);
    const error = new HttpError(
      'Something went wrong, could not add new job',
      500
    );
    return next(error);
  }
 
  res.json({existingRecruiter: existingRecruiter})

}



exports.recruiterProfile= recruiterProfile;
exports.addjobs=addjobs;