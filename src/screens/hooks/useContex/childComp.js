import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {ThemeContext} from './parentComp';
const ChildComp = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text>Child Comp</Text>
      <Text>Forground: {theme.foreground}</Text>
      <Text>Background: {theme.background}</Text>
    </View>
  );
};

export default ChildComp;
