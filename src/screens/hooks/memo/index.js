import React, {memo} from 'react';
import {View, Text} from 'react-native';
const _MemoDemo = () => {
  console.log('render-Momo====>');
  return (
    <View>
      <Text>Memo Demo</Text>
    </View>
  );
};

export default memo(_MemoDemo);
