import {StyleSheet, TouchableOpacity, View, Text, Button} from 'react-native';
import Color from '../Constants/Color';
import React from 'react';
import Eliipse2 from '../assestsJSX/LoginOrSignup/Ellipse2';
import Eliipse1 from '../assestsJSX/LoginOrSignup/Ellipse1';
import SearchIcon from '../assestsJSX/LoginOrSignup/JobIcon';
import JobText from '../assestsJSX/LoginOrSignup/JobFinder';
import BoxIcon from '../assestsJSX/LoginOrSignup/BoxIcon';

const LoginOrSignup = props => {
  // console.log(props.navigation);
  // const dispatch = useDispatch();
  return (
    <View style={styles.screen}>
      <View style={styles.mainTop}>
        <View style={styles.ellipse}>
          <Eliipse2 />
        </View>

        <View style={styles.jobIcon}>
          <SearchIcon />
        </View>
        <View style={styles.jobText}>
          <JobText />
        </View>
        <View style={styles.boxIcon}>
          <BoxIcon />
        </View>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.6}
          onPress={() =>
            props.navigation.navigate('login', {candidate: false})
          }>
          <Text style={styles.text}>As a Recrcuiter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.buttonStyle}
          onPress={() => props.navigation.navigate('login', {candidate: true})}>
          <Text style={styles.text}>As a Candidate</Text>
        </TouchableOpacity>
      </View>
      <Eliipse1 />
    </View>
  );
};

export const LoginOrSignUpScreenOptions = navData => {
  return {
    headerTitle: 'Login',
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  buttons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ellipse: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  jobIcon: {
    position: 'absolute',
    left: ' 52%',
    right: '17.22%',
    top: '15.19%',
    bottom: '75.47%',
  },
  boxIcon: {
    position: 'absolute',
    left: ' 60.83%',
    right: '32.22%',
    top: '27.34%',
    bottom: '84.24%',
  },
  jobText: {
    position: 'absolute',
    width: 120,
    height: 29,
    left: 126,
    top: 157,
  },
  buttonStyle: {
    paddingVertical: 13,
    width: '70%',
    backgroundColor: Color.accent,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Color.accent,
    marginBottom: '3%',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: '500',
  },
  mainTop: {
    justifyContent: 'flex-start',
  },
  icon: {
    color: '#ccc',
    fontSize: 24,
    alignSelf: 'center',
  },
});

export default LoginOrSignup;
