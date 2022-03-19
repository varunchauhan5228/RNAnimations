import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Animation,
  DashBoard,
  BallAnimation,
  InterPolatation,
  PanGastureHandler,
  ThemeColor,
  SkateboardDeck,
  _UseMemo,
  _UseCallBack,
  ParentComp,
  ChildComp,
  MountingPhaseDemo,
  DateTime,
  DemoHOC,
  PromiseDemo,
  Welcome,
  FlatListDemo,
  TextInputField,
} from '../screens/index';
const Stack = createStackNavigator();
function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Animations">
        <Stack.Screen name="Animations" component={Animation} />
        <Stack.Screen name="DashBoard" component={DashBoard} />
        <Stack.Screen name="BallAnimation" component={BallAnimation} />
        <Stack.Screen name="InterPolatation" component={InterPolatation} />
        <Stack.Screen name="PanGastureHandler" component={PanGastureHandler} />
        <Stack.Screen name="ThemeColor" component={ThemeColor} />
        <Stack.Screen name="SkateboardDeck" component={SkateboardDeck} />
        <Stack.Screen name="_UseMemo" component={_UseMemo} />
        <Stack.Screen name="_UseCallBack" component={_UseCallBack} />
        <Stack.Screen name="ParentComp" component={ParentComp} />
        <Stack.Screen name="ChildComp" component={ChildComp} />
        <Stack.Screen name="MountingPhaseDemo" component={MountingPhaseDemo} />
        <Stack.Screen name="DateTime" component={DateTime} />
        <Stack.Screen name="DemoHOC" component={DemoHOC} />
        <Stack.Screen name="PromiseDemo" component={PromiseDemo} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="FlatListDemo" component={FlatListDemo} />
        <Stack.Screen name="TextInputField" component={TextInputField} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;
