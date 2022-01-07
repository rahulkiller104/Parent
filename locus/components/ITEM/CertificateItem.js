import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const CertificateItem = props => {
  return (
    <View style={styles.conatiner}>
      <View>
        <Image
          source={require('../../assests/coursera.png')}
          style={styles.icon}
        />
      </View>
      <View>
        <Text style={styles.text}>{props.course}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  conatiner: {
    marginBottom: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  text: {
    color: 'black',
    fontSize: 12,
    fontWeight: '700',
    marginHorizontal: '1%',
  },
  icon: {
    width: 35,
    height: 35,
  },
});

export default CertificateItem;
