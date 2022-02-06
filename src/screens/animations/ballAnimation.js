import React from 'react';
import {Text, View, StyleSheet, Animated, TouchableOpacity} from 'react-native';

export default () => {
  const ballAnimation = new Animated.Value(0);
  const ballAnimationSize = new Animated.Value(50);
  const ballInterPolate = new Animated.Value(0);
  const animationOnBall = () => {
    Animated.timing(ballAnimation, {
      toValue: 100,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(ballAnimation, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    });
  };

  const animationSize = () => {
    Animated.timing(ballAnimationSize, {
      toValue: 200,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(ballAnimationSize, {
        toValue: 50,
        duration: 3000,
        useNativeDriver: false,
      }).start();
    });
  };

  const animationRotate = () => {
    Animated.timing(ballInterPolate, {
      toValue: 180,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(ballInterPolate, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: false,
        bounciness: 50,
      }).start();
    });
  };

  const ballInterPolateVal = ballInterPolate.interpolate({
    inputRange: [0, 90],
    outputRange: ['0deg', '90deg'],
  });
  const ballInterPolateValColor = ballInterPolate.interpolate({
    inputRange: [0, 180],
    outputRange: ['pink', 'brown'],
  });
  const animationRadius = {
    borderRadius: ballAnimation,
  };
  const animationStyleSize = {
    width: ballAnimationSize,
    height: ballAnimationSize,
  };
  const rotateStyle = {
    transform: [
      {
        rotate: ballInterPolateVal,
      },
    ],
    backgroundColor: ballInterPolateValColor,
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => animationOnBall()}>
        <Animated.View style={[styles.ball, animationRadius]}>
          <Text style={styles.ballText}> Animation Ball </Text>
        </Animated.View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => animationSize()}
        style={{paddingVertical: 20}}>
        <Animated.View style={[styles.ball2, animationStyleSize]} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => animationRotate()}
        style={{paddingVertical: 20}}>
        <Animated.View style={[styles.ball3, rotateStyle]} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball: {
    height: 200,
    width: 200,
    borderRadius: 100,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball2: {
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball3: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ballText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
