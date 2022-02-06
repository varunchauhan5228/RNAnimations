import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Animated, {
  event,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';
const SIZE = 80;
const CIRCLE_RADIUS = SIZE * 2;
const PanGastureHandler = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const PanGestureEvent = useAnimatedGestureHandler({
    onStart: (event, contex) => {
      contex.translateX = translateX.value;
      contex.translateY = translateX.value;
    },
    onActive: (event, contex) => {
      translateX.value = event.translationX + contex.translateX;
      translateY.value = event.translationY + contex.translateY;
    },
    onEnd: () => {
      const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);
      if (distance < CIRCLE_RADIUS + SIZE / 2) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    },
  });
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  });
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <PanGestureHandler onGestureEvent={PanGestureEvent}>
          <Animated.View style={[styles.square, rStyle]} />
        </PanGestureHandler>
      </View>
    </View>
  );
};
export default PanGastureHandler;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    height: SIZE,
    width: SIZE,
    backgroundColor: 'rgba(0,0,256,0.4)',
    borderRadius: 20,
  },
  circle: {
    height: CIRCLE_RADIUS * 2,
    width: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
    borderWidth: 3,
    borderColor: 'rgba(0,0,256,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
