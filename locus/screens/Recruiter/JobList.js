import React, {useState,useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AIcon from 'react-native-vector-icons/AntDesign';
import JoblistItem from '../../components/ITEM/JoblistItem';
import Color from '../../Constants/Color';
import SwipeScreenHead from '../../components/ITEM/SwipeScreenHead';
import {useSelector} from 'react-redux';
import Input from '../../components/UI/inputWithLabel'
import axios from 'axios';
const URL='https://cold-fish-88.loca.lt/api/recruiter/profile'
const POSTURL="https://cold-fish-88.loca.lt/api/recruiter/addjob"

const JobList = props => {
  const userId= useSelector(state => state.auth.userId);
  console.log("USERID",userId);
  const[jobs, setjobs]= useState()
  const [showModal, setshowModal] = useState(false);
  const [loading, setloading]= useState(false);
  


  const [position, setposition] = useState('')
  const [organization, setorganization] = useState('')
  const [location, setlocation] = useState('')
  const [minExperiance, setminExperiance] = useState('')
  const [skills, setskills] = useState('')
  const [requirement, setrequirement] = useState('')
  const [lastdate, setlastdate]= useState('')
  const [imageLink, setimageLink] = useState('https')
        // position:'',
        // organization:'',
        // location:'',
        // minExperience: '',
        // skills: '',
        // requireMent: '',
        // lastdate: '',
        // imagelink:'https/ooi/oiuo'
  
  // const jobInputChangeHandler = useCallback(
  //   (inputIdentifier, value, isValid) => {
  //     // console.log(formState);
      
  //     dispatchjobState({
  //       type: REDUCER_UPDATE,
  //       value: value,
  //       isValid: isValid,
  //       input: inputIdentifier,
  //     });
  //   },
  //   [dispatchjobState],
  // );

useEffect(() => {
  axios.get(URL , { headers: {"Authorization" : `Bearer ${userId}`} })
  .then(res => {
  // console.log(res.data.existingRecruiter.jobs)
  setjobs(res.data.existingRecruiter.jobs)
},[loading])

  .catch((error) => {
    console.log(error)
  });
},[])

  const onJobsumbitHandler=()=>{
    setloading(true);
    const db={
    recruiterId:userId,
    job:{
      position,
      organization,
      location,
      skills,
      minExperiance,
      requirement,
      lastdate,
      imageLink,
    }
    }
    axios.patch(POSTURL , db)
    .then(res => {
      setjobs(res.data.existingRecruiter.jobs)
  })
    .catch((error) => {
      console.log(error)
    }).
    finally(() => {
      setloading(false)
      setshowModal(!showModal)})

  console.log('SUBMITß') 
    console.log(db)
    
  }
  return (
    <View style={styles.screen}>
      {/* <View style={styles.topHead}>
        <Text style={styles.jobText}>Job-Lists</Text>
        <TouchableNativeFeedback
          style={styles.topHomeContainer}
          onPress={() => props.navigation.navigate('userdetails')}>
          <Icon name="account-plus" size={25} style={styles.icon}></Icon>
        </TouchableNativeFeedback>
      </View> */}
      {/* <View style={styles.searchContainer}>
        <TextInput
          value={search}
          placeholder="Search"
          keyboardType="default"
          returnKeyType="next"
          initailValue=""
          onChangeText={text => setsearch(text)}
          style={styles.search}
        />
        <TouchableOpacity style={styles.filter}>
          <Image
            source={require('../../assests/edit.png')}
            style={styles.filterIcon}
          />
        </TouchableOpacity>
      </View> */}
      <SwipeScreenHead onClick={()=>props.navigation.navigate('message')}/>
      <ScrollView style={styles.joblistContainer}>
       {jobs&&jobs.map((job,index)=>  <JoblistItem props={props} job={job} key={index} />)}
      </ScrollView>
      <View style={styles.add}>
      <Modal
          animationType="fade"
          transparent={true}
          visible={showModal}
          onRequestClose={() => setshowModal(!showModal)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ScrollView>
            
              <Input
                id="position"
                label="Position"
                required
                placeholder="Name of the Posistion"
                errorText="Please enter a Valid Posistion Name"
                initialValue=""
                onInputChange={(inputIdentifier, value, isValid)=>setposition(value)}
              />
                  {/* position:'',
        organization:'',
        location:'',
        minExperience: '',
        skills: '',
        requireMent: '',
        imagelink:'https/ooi/oiuo' */}
              <Input
                id="organization"
                label="Organization"
                required
                placeholder="organization like Udemy"
                errorText="Please enter a Valid organization."
                initialValue=""
                onInputChange={(inputIdentifier, value, isValid)=>setorganization(value)}
              />
              <Input
                id="location"
                label="Location"
                required
                placeholder="organization like Udemy"
                errorText="Please enter a Valid organization."
                initialValue=""
                onInputChange={(inputIdentifier, value, isValid)=>setlocation(value)}
              />
               <Input
                id="skills"
                label="Skills"
                required
                placeholder="organization like Udemy"
                errorText="Please enter a Valid organization."
                initialValue=""
                onInputChange={(inputIdentifier, value, isValid)=>setskills(value)}
              />
              <Input
                id="minExperience"
                label="minExperience"
                required
                placeholder="minExperience like 12/2/2000"
                errorText="Please enter a Valid minExperience."
                initialValue=""
                onInputChange={(inputIdentifier, value, isValid)=>setminExperiance(value)}
              />
           
                <Input
                id="lastdate"
                label="lastdate"
                required
                placeholder="lastdate like 12/2/2000"
                errorText="Please enter a Valid lastdate."
                initialValue=""
                onInputChange={(inputIdentifier, value, isValid)=>setlastdate(value)}
              />
              <Input
                id=" imagelink"
                label="Compant Logo"
                required
                placeholder="url of Logo"
                errorText="Please enter a Valid url."
                initialValue=""
                onInputChange={(inputIdentifier, value, isValid)=>setimageLink(value)}
              />
                 <Input
                id="requireMent"
                label="requireMent"
                required
                placeholder="candidate should be master..."
                errorText="Please enter a Valid requireMent."
                initialValue=""
                multiline
                onInputChange={(inputIdentifier, value, isValid)=>setrequirement(value)}
              />
              </ScrollView>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.buttonaddStyle}
                onPress={onJobsumbitHandler}>
              {loading?<ActivityIndicator />:  <Text style={styles.texts}>Add Job</Text>}
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      <TouchableOpacity
            activeOpacity={0.8}
            style={styles.buttonStyle}
           onPress={() => setshowModal(!showModal)}
            >
             <Icon name='plus' size={30} color={Color.white} />
          </TouchableOpacity>
          </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {flex: 1},
  topHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '3%',
  },
  backContainer: {
    flexDirection: 'row',
    marginRight: '1%',
    marginBottom: '2%',
  },
  backText: {
    fontSize: 14,
    zIndex: 200,
    color: 'black',
  },
  icon: {
    color: 'black',
  },
  jobText: {
    fontSize: 25,
    fontWeight: '700',
    color: 'black',
  },
  topHomeContainer: {
    borderRadius: 5,

    backgroundColor: '#E1E6EE',

    borderColor: '#E1E6EE',
    borderWidth: 7,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
  },
  search: {
    width: '80%',
    marginHorizontal: '4%',
    borderColor: 'rgba(92, 97, 103, 0.7)',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: '5%',
  },
  icons: {
    marginTop: '5%',
    marginLeft: '1%',
  },
  filter: {
    marginTop: '4%',
  },
  filterIcon: {
    width: 25,
    height: 21,
  },
  joblistContainer:{
    marginTop: '5%'
  },
  buttonStyle: {
    borderWidth: 1,
    borderColor: Color.primary,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 10,
    right: '40%',
    height: 70,
    backgroundColor: Color.primary,
    borderRadius: 100,
    
  },
  buttonaddStyle: {
    paddingVertical: 10,
    width: '100%',
    backgroundColor: Color.primary,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Color.primary,
    alignItems: 'center',
    marginTop: '10%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '95%',
  },
  texts: {
    color: Color.white,
  }
 
});

export default JobList;
