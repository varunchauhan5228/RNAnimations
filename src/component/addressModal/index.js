import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Animated,
} from 'react-native';

const AddressModal = ({visible, onPress, DateArray, timeSlots}) => {
  const scrollRef = useRef(0);
  const scrollTimeRef = useRef(0);
  const scrollY = useRef(new Animated.Value(0)).current;
  const yellowRef = useRef(new Animated.Value(0)).current;
  // const [indexVal, setIndexVal] = useState(0)

  const TimeRender = (item, index) => {
    return (
      <TouchableOpacity style={{paddingVertical: 10}}>
        <Text style={{opacity: 1}}>{item}</Text>
      </TouchableOpacity>
    );
  };
  const DateRender = (item, index) => {
    const opicity = scrollY.interpolate({
      inputRange: [-1, 0, 35 * index, 35 * (index + 1)],
      outputRange: [1, 1, 1, 1],
    });

    return (
      <TouchableOpacity
        onPress={() => onScrollUp(item, index)}
        key={index.toString()}
        style={{paddingVertical: 10}}>
        <Animated.Text style={[{opacity: opicity}]}>{item.date}</Animated.Text>
      </TouchableOpacity>
    );
  };
  const onScrollUp = (item, index) => {
    scrollRef.current?.scrollToIndex({
      index: index,
      animated: true,
      viewOffset: 1,
      viewPosition: 0.45,
    });
  };
  const hangleTimeList = (e) => {
    scrollTimeRef.current?.scrollToIndex({
      index: 0,
      viewPosition: e.nativeEvent.contentOffset.y,
      animated: true,
    });
  };
  useEffect(() => {
    scrollY.addListener((v) => {
      if (scrollRef?.current) {
        console.log('v.value===>', v.value);
        scrollRef.current.scrollToOffset({
          offset: v.value,
          animated: false,
        });
      }
    });
  }, [scrollY]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => alert('clicked')}>
      <View style={styles.container}>
        <View onPress={onPress} style={styles.innerContainer}>
          <View style={styles.addressUI}>
            <Text style={styles.textStyle} onPress={onPress}>
              Address
            </Text>
            <View style={styles.category}>
              <View
                style={{
                  paddingVertical: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'flex-end',
                }}>
                <Text style={styles.headersText}>Date</Text>
                <Text style={styles.headersText}>From</Text>
                <Text style={styles.headersText}>Till</Text>
              </View>
            </View>
            <View style={styles.FlatListDataContainer}>
              <View
                style={{
                  width: '33.33%',
                  //   backgroundColor: 'red',
                  alignItems: 'center',
                }}>
                {/* <ScrollView ref={scrollRef} scrollEventThrottle={0}>
                  {DateArray.map((item, index) => DateRender(item, index))}
                </ScrollView> */}
                <Animated.FlatList
                  ref={scrollRef}
                  showsVerticalScrollIndicator={false}
                  data={DateArray}
                  extraData={DateArray}
                  bounces={false}
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={({item, index}) => DateRender(item, index)}
                  scrollEventThrottle={16}
                  //   scrollIndicatorInsets={{right: 1}}
                  onScroll={Animated.event(
                    [
                      {
                        nativeEvent: {
                          contentOffset: {
                            y: scrollY,
                          },
                        },
                      },
                    ],
                    {useNativeDriver: true},
                  )}
                  contentContainerStyle={{
                    paddingTop: '50%',
                    paddingBottom: '65%',
                  }}
                />
              </View>
              <View
                style={{
                  width: '33.33%',
                  //   backgroundColor: 'green',
                  alignItems: 'center',
                }}>
                <FlatList
                  ref={scrollTimeRef}
                  showsVerticalScrollIndicator={false}
                  data={timeSlots}
                  extraData={timeSlots}
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={({item, index}) => TimeRender(item, index)}
                  decelerationRate={0}
                  snapToInterval={600}
                  snapToAlignment={'center'}
                  scrollEventThrottle={1}
                  contentContainerStyle={{
                    paddingTop: '50%',
                    paddingBottom: '65%',
                  }}
                />
              </View>
              <View
                style={{
                  width: '33.33%',
                  alignItems: 'center',
                }}>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={DateArray}
                  extraData={DateArray}
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={({item, index}) => {
                    return (
                      <View style={{paddingVertical: 10}}>
                        <Text>{item.date}</Text>
                      </View>
                    );
                  }}
                  contentContainerStyle={{
                    paddingTop: '50%',
                    paddingBottom: '65%',
                  }}
                />
              </View>

              <Animated.View
                ref={yellowRef}
                style={{
                  // backgroundColor: 'yellow',
                  position: 'absolute',
                  height: 31,
                  width: '100%',
                  top: '37.5%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0.5,
                }}>
                {/* <Text> hello</Text> */}
              </Animated.View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default AddressModal;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    // height: '0%',
    backgroundColor: 'grey',
    justifyContent: 'flex-end',
  },
  addressUI: {
    // height: Dimensions.get('window').height * 0.6,
    maxHeight: '50%',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingVertical: 20,
    alignItems: 'center',
    // paddingHorizontal: 20,
  },
  textStyle: {fontSize: 20},
  headersText: {fontSize: 18},
  category: {
    borderTopColor: 'grey',
    borderTopWidth: 1,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width: '100%',
    marginTop: 10,
  },
  FlatListDataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: '60%',
    // backgroundColor:'red'
    // backgroundColor: 'red',
  },
});
