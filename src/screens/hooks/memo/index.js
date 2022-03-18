import React, {memo} from 'react';
import {View, Text} from 'react-native';
const _MemoDemo = ({arrayData}) => {
  console.log('render-Momo====>');
  return (
    <View>
      <Text>Memo Demo : {arrayData.name}</Text>
    </View>
  );
};

export default memo(_MemoDemo);
