import React from 'react';
import AppContainer from './src/navigation/index';
import store, {persistor} from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);
// const { performance } = require('perf_hooks');
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
