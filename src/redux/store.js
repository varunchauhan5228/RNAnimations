import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DashBoardReducer} from './reducers';

const persistConfig = {
  key: 'Root@1',
  storage: AsyncStorage,
};

const appReducer = combineReducers({
  DashBoardReducer,
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const understandThunkFn = () => {
  // console.log('store====>', store);
  return (next) => {
    // console.log('next====>', next);
    return (action) => {
      const result = next(action);
      return result;
    };
  };
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
// let store = createStore(rootReducer, applyMiddleware(understandThunkFn));
let store = createStore(persistedReducer, applyMiddleware(understandThunkFn));
export const persistor = persistStore(store);
export default store;
