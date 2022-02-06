import React, {memo} from 'react';
import {View, Text} from 'react-native';

const Count = ({text, value}) => {
  console.log('render-count==>', text);
  return (
    <View>
      <Text>
        {text}:{value}
      </Text>
    </View>
  );
};

export default memo(Count);
