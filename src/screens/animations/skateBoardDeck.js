import React, {useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {SkateBoardPage} from '../../component';
import {Page} from './constant';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useDerivedValue,
  useAnimatedRef,
} from 'react-native-reanimated';
import Dot from '../../component/dot';
const {width: PAGE_WIDTH, height: PAGE_HEIGHT} = Dimensions.get('window');
export default () => {
  const valueX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      valueX.value = event.contentOffset.x;
    },
  });
  const activeDot = useDerivedValue(() => {
    return Math.round(valueX.value / PAGE_WIDTH);
  });
  const scrollRef = useAnimatedRef();
  const goPress = useCallback(() => {
    if (activeDot.value == Page.length - 1) {
      return;
    }
    scrollRef.current?.scrollTo({
      x: PAGE_WIDTH * (activeDot.value + 1),
    });
  }, [scrollRef]);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        horizontal
        pagingEnabled
        onScroll={scrollHandler}>
        {Page.map((item, index) => {
          return (
            <SkateBoardPage
              key={index.toString()}
              index={index}
              item={item}
              valueX={valueX}
            />
          );
        })}
      </Animated.ScrollView>
      <View style={styles.footer}>
        <View style={[styles.fillCenter, {flexDirection: 'row'}]}>
          {Page.map((_, index) => {
            return (
              <Dot
                key={index.toString()}
                indexVal={index}
                activeDot={activeDot}
              />
            );
          })}
        </View>
        <View style={styles.fillCenter}>
          <Text style={{letterSpacing: 1.5, fontWeight: '500'}}>
            VIEW BOARD
          </Text>
        </View>

        <TouchableOpacity style={styles.fillCenter} onPress={goPress}>
          <Text
            style={{
              backgroundColor: 'green',
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 5,
              overflow: 'hidden',
            }}>
            Go..
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  fillCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
