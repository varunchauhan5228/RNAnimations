import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {useSharedValue} from 'react-native-reanimated';
import {Page} from '../../component';

const WORDS = ['Whats', 'up', 'mobile', 'dev?'];
export default () => {
  let positionX = useSharedValue(0);
  const handleScroll = (event) => {
    positionX.value = event.nativeEvent.contentOffset.x;
  };
  return (
    <Animated.ScrollView
      pagingEnabled
      horizontal
      onScroll={handleScroll}
      scrollEventThrottle={16}
      style={styles.container}>
      {WORDS.map((item, index) => {
        return (
          <Page key={index} title={item} index={index} positionX={positionX} />
        );
      })}
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
