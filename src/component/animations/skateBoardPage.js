import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
const {width: PAGE_WIDTH, height: PAGE_HEIGHT} = Dimensions.get('window');

export default ({item, valueX, index}) => {
  let inputRange = [
    (index - 1) * PAGE_WIDTH,
    index * PAGE_WIDTH,
    (index + 1) * PAGE_WIDTH,
  ];
  const rCircleStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      valueX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP,
    );
    return {transform: [{scale}]};
  });

  const rRedViewStyle = useAnimatedStyle(() => {
    const imgRotate = interpolate(
      valueX.value,
      inputRange,
      [-1, 0, 1],
      Extrapolate.CLAMP,
    );
    return {transform: [{rotate: `${imgRotate * Math.PI}rad`}]};
  });
  const opacity = useAnimatedStyle(() => {
    const imgRotate = interpolate(
      valueX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP,
    );
    return {opacity};
  });
  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <Animated.View style={[styles.circle, rCircleStyle]}>
          <Animated.View style={[styles.scaleView, rRedViewStyle, opacity]} />
        </Animated.View>
      </View>
      <Text style={{paddingTop: 100, fontSize: 17, fontWeight: 'bold'}}>
        {item.city}
      </Text>
      <Text style={{paddingTop: 10}}>{item.discription}</Text>
    </View>
  );
};
const CIRCLE_WIDTH = PAGE_WIDTH * 0.7;
const CIRCLE_HEIGHT = PAGE_HEIGHT * 0.5;

const styles = StyleSheet.create({
  container: {
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: CIRCLE_WIDTH,
    aspectRatio: 1,
    backgroundColor: '#FFF',
    borderRadius: PAGE_WIDTH / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContainer: {
    width: CIRCLE_WIDTH,
    aspectRatio: 1,
  },
  scaleView: {
    height: PAGE_HEIGHT * 0.5,
    width: 100,
    backgroundColor: 'red',
    borderRadius: 50,
  },
});
export {PAGE_WIDTH};
