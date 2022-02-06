import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ShowScoreHOC from './demoHOC';
const SachinScore = ({run, hitRun}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={hitRun} style={styles.buttonStyle}>
        <Text>Sachin's Score </Text>
      </TouchableOpacity>
      <Text> : {run}</Text>
    </View>
  );
};
export default ShowScoreHOC(SachinScore);
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
