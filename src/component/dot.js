import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
export default ({indexVal, activeDot}) => {
  const rDotStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: activeDot.value === indexVal ? 'black' : '#FFF',
    };
  });
  return <Animated.View style={[styles.pagination, rDotStyle]} />;
};
const styles = StyleSheet.create({
  pagination: {
    height: 20,
    width: 20,
    marginLeft: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
});
