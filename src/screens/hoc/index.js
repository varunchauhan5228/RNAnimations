import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DhoniScore from './dhoniScore';
import SachinScore from './sachinScore';
const DemoHOC = () => {
  return (
    <View style={styles.container}>
      <DhoniScore />
      <SachinScore />
    </View>
  );
};
export default DemoHOC;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 100,
  },
});
