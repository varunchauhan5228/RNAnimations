import React, {useState, useCallback} from 'react';
import {View, Text} from 'react-native';
import {Button} from '../../../component';
import {Count} from '../../../component';
import MemoDemo from '../memo';
const _UseCallBack = () => {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);
  const [arrayData, setArrayData] = useState({name:'varuns'});

  const updateAge = useCallback(() => {
    setAge(age + 1);
    // setArrayData({...arrayData})
  }, [age]);

  // const updateAge = () => {
  //   setAge(age + 1);
  // };

  const updateSalary = useCallback(() => {
    setSalary(salary + 1);
  }, [salary]);

  // const updateSalary = () => {
  //   setSalary(salary + 1);
  // };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <MemoDemo arrayData={arrayData}/>
      <Count text={'Age'} value={age} />
      <Button buttonText={'IncrementAge'} buttonPressed={updateAge} />
      <Count text={'Salary'} value={salary} />
      <Button buttonText={'IncrementSalary'} buttonPressed={updateSalary} />
    </View>
  );
};

export default _UseCallBack;
