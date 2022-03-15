import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const List = [
  {exercise: 'Dashboard', color: '#9FD7F1'},
  {exercise: 'Ball Animation', color: '#F3B000'},
  {exercise: 'InterPolate', color: '#F2988F'},
  {exercise: 'PanGastureHandler', color: '#228B22'},
  {exercise: 'ThemeColor', color: '#F3B000'},
  {exercise: 'SkateboardDeck', color: '#F2988F'},
  {exercise: '_UseMemo', color: '#FF6347'},
  {exercise: '_UseCallBack', color: '#F3B000'},
  {exercise: '_UseContex', color: '#F2988F'},
  {exercise: 'LifeCycleDemo', color: '#FF6347'},
  {exercise: 'DateTime', color: '#228B22'},
  {exercise: 'HOC', color: '#F2988F'},
  {exercise: 'Promise', color: '#9FD7F1'},
  {exercise: 'Welcome', color: '#F2988F'},
  
];

const Animation = (props) => {
  const [indexVal, setIndexVal] = useState('');
  const scrollY = useRef(new Animated.Value(0)).current;
  const SPACE = 2;
  const ITEM_SIZE = 40 + SPACE * 3;
  const renderItem = (items, index) => {
    const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];

    const opicityInputRange = [
      -1,
      0,
      ITEM_SIZE * index,
      ITEM_SIZE * (index + 0.5),
    ];

    const scale = scrollY.interpolate({inputRange, outputRange: [1, 1, 1, 0]});

    const opicity = scrollY.interpolate({
      inputRange: opicityInputRange,
      outputRange: [1, 1, 1, 0],
    });

    const navigate = (index) => {
      if (index === 0) {
        props.navigation.navigate('DashBoard');
      } else if (index === 1) {
        props.navigation.navigate('BallAnimation');
      } else if (index === 2) {
        props.navigation.navigate('InterPolatation');
      } else if (index === 3) {
        props.navigation.navigate('PanGastureHandler');
      } else if (index === 4) {
        props.navigation.navigate('ThemeColor');
      } else if (index === 5) {
        props.navigation.navigate('SkateboardDeck');
      } else if (index === 6) {
        props.navigation.navigate('_UseMemo');
      } else if (index === 7) {
        props.navigation.navigate('_UseCallBack');
      } else if (index === 8) {
        props.navigation.navigate('ParentComp'); // useContex hook
      } else if (index === 9) {
        props.navigation.navigate('MountingPhaseDemo');
      } else if (index === 10) {
        props.navigation.navigate('DateTime');
      } else if (index === 11) {
        props.navigation.navigate('DemoHOC');
      } else if (index === 12) {
        props.navigation.navigate('PromiseDemo');
      } else if (index === 13) {
        props.navigation.navigate('Welcome');
      }
    };
    return (
      <TouchableOpacity onPress={() => navigate(index)}>
        <Animated.View
          style={[styles.card, {transform: [{scale}], opacity: opicity}]}>
          <Text style={[styles.text, {backgroundColor: items.color}]}>
            {items.exercise}
          </Text>
        </Animated.View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Animated.FlatList
          data={List}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true},
          )}
          extraData={List}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item, index}) => renderItem(item, index)}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  card: {marginHorizontal: 10, marginVertical: 5, height: 40},
  text: {
    paddingVertical: 10,
    textAlign: 'center',
  },
});

export default Animation;
