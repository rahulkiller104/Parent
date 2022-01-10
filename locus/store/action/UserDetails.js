import axios from "axios";

export const SET_PROFILE="SET_PROFILE";

const LINK = 'https://modern-snail-75.loca.lt'

export const setUserProfileDetails = (personalData,proffesionalData,skills,certificates) => {
    return async (dispatch,getState) => {
   console.log(getState())

     const link='https://cold-fish-88.loca.lt/api/user/profile'
    
     const data = {
      persional:{
    name: personalData.name,
    dateofbirth: personalData.dateofbirth,
    gender: personalData.gender,
    pan: personalData.pan,
    phonenumber: personalData.phonenumber,
      }
      ,
        userId:'333',
      proffesional:{
        profileset: proffesionalData.profileset,
        profile: proffesionalData.profile,
        destination: proffesionalData.destination,
        currentorg: proffesionalData.currentorg,
        currentctc: proffesionalData.ctc,
        location: proffesionalData.location,
        resume: "???",
        certificates:certificates
      ,
      skills:skills
      }
   
   
   }

console.log(certificates)
console.log(skills)
  console.log('================================');
//   console.log(userProfile)
axios.post(link,data).then(response =>console.log(response.data)).catch(error =>console.log(error))

  console.log('================================');
    }
}





 