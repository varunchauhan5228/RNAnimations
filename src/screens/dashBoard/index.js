import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View, FlatList, Dimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {dashboardAsyncAction} from '../../redux/actions/actionOne';

export default () => {
  const dispatch = useDispatch();
  const dashBoardState = useSelector((state) => {
    return state.DashBoardReducer;
  });
  const {data} = dashBoardState;
  useEffect(() => {
    dashboardAsyncAction(dispatch);
  }, []);
  const renderItem = (item, index) => {
    return (
      <View
        style={{
          // flex: 1,
          backgroundColor: 'pink',
          paddingVertical: 15,
          marginVertical: 5,
          marginHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'grey',
          borderWidth: 1,
          borderRadius: 5,
        }}>
        <Text>{item.title}</Text>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
      }}>
      <FlatList
        data={data}
        extraData={data}
        renderItem={({item, index}) => renderItem(item, index)}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};
