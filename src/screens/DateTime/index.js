import React, {useEffect, useState, useRef} from 'react';
import {Text, View} from 'react-native';
import moment from 'moment';
import {AddressModal} from '../../component';

const DateTime = () => {
  const [visible, setVisible] = useState(false);
  const [timeSlots, setTimeSlots] = useState([]);
  const [inialtTime, setInitialTime] = useState('');
  let hh = useRef('');
  let mm = useRef('');
  useEffect(() => {
    var d = new window.Date();
    hh.current = d.getHours();
    mm.current = d.getMinutes();
  }, []);

  useEffect(() => {
    let formetTime = (h, m) => {
      let hours = h > 10 ? (m > 30 ? h + 1 : h) : '0' + h;
      let min = m < 30 ? '30' : '00';
      let finalTime = hours + ':' + min;
      return finalTime;
    };
    let x = {
      slotInterval: 30,
      //   openTime: '06:00',
      openTime: formetTime(hh.current, mm.current),
      closeTime: '23:30',
    };
    //Format the time
    let startTime = moment(x.openTime, 'HH:mm');
    //Format the end time and the next day to it
    let endTime = moment(x.closeTime, 'HH:mm');
    let allTimes = [];
    const clock = (times) => {
      switch (times) {
        case '12:00':
          return '12:00';
        case '12:30':
          return '12:30';
        case '13:00':
          return '01:00';
        case '13:30':
          return '01:30';
        case '14:00':
          return '02:00';
        case '14:30':
          return '02:30';
        case '15:00':
          return '03:00';
        case '15:30':
          return '03:30';
        case '16:00':
          return '04:00';
        case '16:30':
          return '04:30';
        case '17:00':
          return '05:00';
        case '17:30':
          return '05:30';
        case '18:00':
          return '06:00';
        case '18:30':
          return '06:30';
        case '19:00':
          return '07:00';
        case '19:30':
          return '07:30';
        case '20:00':
          return '08:00';
        case '20:30':
          return '08:30';
        case '21:00':
          return '09:00';
        case '21:30':
          return '09:30';
        case '22:00':
          return '10:00';
        case '22:30':
          return '10:30';
        case '23:00':
          return '11:00';
        case '23:30':
          return '11:30';
      }
    };
    let timeFormateConversion = (startTime) => {
      let T = startTime.map((item) => {
        let HH = item.split(':');
        if (HH[0] >= 12) {
          return clock(item) + ' pm';
        } else {
          return item + ' am';
        }
      });
      //   console.log('TimeSlots===>', T);
      return T;
    };
    //Loop over the times - only pushes time with 30 minutes interval
    while (startTime < endTime) {
      //Push times
      allTimes.push(startTime.format('HH:mm'));
      //Add interval of 30 minutes
      startTime.add(x.slotInterval, 'minutes');
    }
    let T = timeFormateConversion(allTimes);
    setTimeSlots(T);
  }, []);
  const DateArray = [
    {date: 'Today'},
    {date: '25/1'},
    {date: '26/1'},
    {date: '27/1'},
    {date: '28/1'},
    {date: '29/1'},
    {date: '30/1'},
    {date: '31/1'},
    {date: '1/2'},
    {date: '2/2'},
    {date: '3/2'},
    {date: '4/2'},
    // {date: ''},
  ];
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text onPress={() => setVisible(true)}>Open Address Modal</Text>
      <AddressModal
        {...{visible, DateArray, timeSlots, onPress: () => setVisible(false)}}
      />
    </View>
  );
};

export default DateTime;
