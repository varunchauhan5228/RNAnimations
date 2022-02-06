import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ShowScoreHOC from './demoHOC';
const DhoniScore = ({run, hitRun}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={hitRun} style={styles.buttonStyle}>
        <Text>Dhoni's Scores </Text>
      </TouchableOpacity>
      <Text> : {run}</Text>
    </View>
  );
};
export default ShowScoreHOC(DhoniScore);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  buttonStyle: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'orange',
    borderRadius: 10,
  },
});
