import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import style from '../hooks/useMemo/style';
const { height: fullHeight, width: fullWidth } = Dimensions.get('screen');
export default function ShowSliderPage({item, index}) {
  return (
    <View style={[styles.container]}>
      <View style={{flex:8}}>
      <Text>Show</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  container:{
    height: fullHeight,
    width: fullWidth, 
  },
  circle:{
  alignItems:'center',
  height: 15,
  width: 15,
  borderRadius: 10,
  borderWidth: 1,
  marginLeft: 5,
  }
})