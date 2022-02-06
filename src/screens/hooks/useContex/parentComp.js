import React, {useContext, createContext} from 'react';
import {View, Text} from 'react-native';
import ChildComp from './childComp';
const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};
export const ThemeContext = createContext(themes.light);

const ParentComp = (props) => {
  return (
    <ThemeContext.Provider value={themes.light}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>Parent</Text>
        <ChildComp />
      </View>
    </ThemeContext.Provider>
  );
};

export default ParentComp;
