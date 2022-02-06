import React, {useState} from 'react';
import {Text, View, Dimensions, StyleSheet} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
const {width, height} = Dimensions.get('window');
export default ({index, title, positionX}) => {
  const SIZE = width * 0.7;
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      positionX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP,
    );
    const borderRadius = interpolate(
      positionX.value,
      inputRange,
      [0, SIZE / 2, 0],
      Extrapolate.CLAMP,
    );
    return {borderRadius, transform: [{scale}]};
  });

  const TextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(positionX.value, inputRange, [
      height / 2,
      0,
      -height / 2,
    ]);
    const opacity = interpolate(positionX.value, inputRange, [-2, 1, -2]);
    return {opacity, transform: [{translateY}]};
  });
  return (
    <View
      keys={index}
      style={[
        styles.pageContainer,
        {backgroundColor: `rgba(0,0,256,0.${index + 2})`},
      ]}>
      <Animated.View style={[styles.square, rStyle]}>
        <Animated.View style={[{position: 'absolute'}, TextStyle]}>
          <Text style={[styles.text]}>{title}</Text>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    height: height,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    height: 250,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,256,0.4)',
  },
  text: {
    fontSize: 60,
    color: '#FFF',
    textTransform: 'uppercase',
    fontWeight: '700',
  },
});
