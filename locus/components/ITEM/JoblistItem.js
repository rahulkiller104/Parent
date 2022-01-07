import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Color from '../../Constants/Color';

const JoblistItem = props => {
  return (
    <View style={styles.itemBox}>
      <View style={styles.imageConatiner}>
        <Image
          source={require('../../assests/Google.png')}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.mainText}>Google LLC</Text>
        <Text>Senior UI/UX Designer</Text>
      </View>
      <TouchableOpacity
        style={styles.arrow}
        onPress={() => props.props.navigation.navigate('jobdetails')}>
        <Icon name="arrow-right" size={25}></Icon>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemBox: {
    flexDirection: 'row',
    backgroundColor: 'rgba(92, 97, 103, 0.2)',
    width: '90%',
    paddingHorizontal: '3%',
    paddingVertical: '5%',
    marginHorizontal: '5%',
    borderRadius: 5,
    justifyContent: 'space-between',
    marginVertical: '2%',
  },
  imageConatiner: {
    width: 40,
    height: 40,
    backgroundColor: Color.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: 30,
    height: 30,
  },
  mainText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
  },
  arrow: {
    width: 40,
    height: 30,
    backgroundColor: 'rgba(92, 97, 103, 0.2)',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '1%',
    borderRadius: 5,
  },
});
export default JoblistItem;
