import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
const PromiseDemo = () => {
  const PromiseFn1 = () => {
    return new Promise((myResolve, myReject) => {
      setTimeout(() => {
        myResolve('Successful!!'); // when successful
        myReject('getting Error!!'); // when error
      }, 5000);
    });
  };
  const PromiseFn2 = () => {
    return new Promise((myResolve, myReject) => {
      setTimeout(() => {
        myResolve('Great!!!'); // when successful
        myReject('ohh..hoo its error!!'); // when error
      }, 2000);
    });
  };

  // PromiseFn1().then(
  //   (PromiseFn1Res) => {
  //     console.log('PromiseFn1===>', PromiseFn1Res);
  //     PromiseFn2()
  //       .then(
  //         (res) => console.log('PromiseFn2===>', res),
  //         // (err) => console.log('PromiseFn2Error====>', err),
  //       )
  //       .catch((err) => console.log('PromiseFn2Error====>', err));
  //   },

  //   (err) => {
  //     console.log('PromiseFn1Error====>', err);
  //   },
  // );
  const AsyncAwaitDemo = async () => {
    console.log('AsyncAwaitDemo---Calleed!!!!!');
    const Fn1Res = await PromiseFn1();
    console.log('Fn1Res=====>', Fn1Res);
    const Fn2Res = await PromiseFn2();
    console.log('Fn2Res=====>', Fn2Res);
  };
  AsyncAwaitDemo();

  return (
    <View style={styles.container}>
      <Text>Promise</Text>
    </View>
  );
};
export default PromiseDemo;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
