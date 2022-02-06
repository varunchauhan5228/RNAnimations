import React, {useState, useMemo} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import _MemoDemo from '../memo';
import style from './style';
const _UseMemo = () => {
  const [incrementVal1, setIncrement1] = useState(0);
  const [incrementVal2, setIncrement2] = useState(0);

  const incrementFn1 = () => {
    setIncrement1(incrementVal1 + 1);
  };
  const incrementFn2 = () => {
    setIncrement2(incrementVal2 + 1);
  };
  // const isEven = () => {
  //   let i = 0;
  //   while (i < 2000000000) {
  //     i++;
  //   }
  //   return incrementVal1 % 2 === 0;
  // };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return incrementVal1 % 2 === 0;
  }, [incrementVal1]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{isEven ? 'even' : 'odd'}</Text>
      <Text>{incrementVal1}</Text>
      <TouchableOpacity onPress={() => incrementFn1()} style={style.button}>
        <Text style={{color: '#FFF'}}>Button</Text>
      </TouchableOpacity>

      <Text>{incrementVal2}</Text>
      <TouchableOpacity onPress={() => incrementFn2()} style={style.button}>
        <Text>Button</Text>
      </TouchableOpacity>
      {/* <_MemoDemo /> */}
    </View>
  );
};

export default _UseMemo;
