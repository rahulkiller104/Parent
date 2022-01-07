import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AIcon from 'react-native-vector-icons/AntDesign';
import JoblistItem from '../components/ITEM/JoblistItem';
import Color from '../Constants/Color';
import {useSelector} from 'react-redux';
const JobList = props => {
  const [search, setsearch] = useState('');
  const state = useSelector(state => state.auth);
  console.log(state);
  return (
    <View style={styles.screen}>
      <View style={styles.topHead}>
        <Text style={styles.jobText}>Job-Lists</Text>
        <TouchableNativeFeedback
          style={styles.topHomeContainer}
          onPress={() => props.navigation.navigate('userdetails')}>
          <Icon name="account-plus" size={25} style={styles.icon}></Icon>
        </TouchableNativeFeedback>
      </View>
      <View style={styles.searchContainer}>
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
            source={require('../assests/edit.png')}
            style={styles.filterIcon}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <JoblistItem props={props} />
        <JoblistItem props={props} />
        <JoblistItem props={props} />
        <JoblistItem props={props} />
        <JoblistItem props={props} />
        <JoblistItem props={props} />
        <JoblistItem props={props} />
        <JoblistItem props={props} />
        <JoblistItem props={props} />
      </ScrollView>
    </View>
  );
};
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
});

export default JobList;
