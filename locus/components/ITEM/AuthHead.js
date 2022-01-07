import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import TopEllipse from '../../assestsJSX/SignUp/TopEllipse';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Color from '../../Constants/Color';

const AuthHead = props => {
  // console.log(props.props);
  return (
    <View style={styles.topHead}>
      <TouchableOpacity
        onPress={() => props.props.navigation.navigate('afterauthscreen')}
        style={styles.topHomeContainer}>
        <Icon name="home" size={25} color="#273B4A"></Icon>
      </TouchableOpacity>
      <View style={styles.topEllipse}>
        <TopEllipse forgot={props.forgot} />
        <TouchableOpacity
          onPress={() => props.props.navigation.goBack()}
          style={styles.backContainer}>
          <Icon
            name="arrow-left"
            size={25}
            style={props.forgot ? styles.iconforgot : styles.icon}></Icon>
          <Text style={props.forgot ? styles.backTextforgot : styles.backText}>
            Back
          </Text>
        </TouchableOpacity>
        <View style={styles.registerTextContainer}>
          <Text style={styles.registerText}>{props.text}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topHead: {
    flexDirection: 'row',
  },
  topEllipse: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 1,
  },
  registerText: {
    fontSize: 25,
    fontWeight: '700',
    color: Color.white,
  },
  registerTextContainer: {
    marginRight: '5%',
  },
  icon: {
    color: Color.white,
  },
  iconforgot: {
    color: 'black',
  },
  backContainer: {
    flexDirection: 'row',
    marginTop: '-39%',
    marginRight: '10%',
    marginBottom: '2%',
  },
  backText: {
    fontSize: 14,
    fontWeight: '700',
    zIndex: 200,
    color: Color.white,
  },
  backTextforgot: {
    fontSize: 14,
    fontWeight: '700',
    zIndex: 200,
    color: 'black',
  },
  topHomeContainer: {
    margin: '5%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Color.accent,
    backgroundColor: '#E1E6EE',
    width: '10%',
    height: '30%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default AuthHead;
