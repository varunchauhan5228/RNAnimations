import React, {useState} from 'react';
import {Text, View, StyleSheet, Switch, Dimensions} from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

export default () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const progress = useDerivedValue(() => {
    return isEnabled ? withTiming(0) : withTiming(1);
  }, [isEnabled]);
  const rStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.backgroundColor, Colors.dark.backgroundColor],
    );
    return {backgroundColor};
  });
  const rCircleStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.circle, Colors.dark.circle],
    );
    return {backgroundColor};
  });
  const rTextStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.text, Colors.dark.text],
    );
    return {color};
  });
  return (
    <Animated.View style={[styles.container, rStyle]}>
      <Animated.Text style={[styles.textStyle, rTextStyle]}>
        Theme
      </Animated.Text>
      <Animated.View style={[styles.circle, rCircleStyle]}>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </Animated.View>
    </Animated.View>
  );
};
const SIZE = Dimensions.get('window').width * 0.7;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: SIZE,
    height: SIZE,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZE / 2,
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
  },
  textStyle: {
    fontSize: 40,
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: 12,
  },
});

const Colors = {
  dark: {
    backgroundColor: '#1E1E1E',
    circle: '#252525',
    text: '#F8F8F8',
  },
  light: {
    backgroundColor: '#F8F8F8',
    circle: '#FFF',
    text: '#1E1E1E',
  },
};
