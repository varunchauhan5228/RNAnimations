import React, {memo} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
const ButtonComp = ({buttonText, buttonPressed, btnStyle}) => {
  // console.log('render-button==>', buttonText);
  return (
    <TouchableOpacity onPress={buttonPressed} style={[styles.button, btnStyle]}>
      <Text>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default memo(ButtonComp);

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});
