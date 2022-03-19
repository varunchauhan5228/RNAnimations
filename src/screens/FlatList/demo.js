import React,{useState, useCallback} from 'react'
import { StyleSheet, Text, View , FlatList, TouchableOpacity} from 'react-native'
import {Button} from '../../component';

export default  FlatListDemo =() =>{
    const [data, setData] = useState([{name:'varun'}])

    const updatePerticulerList = (index) =>{
        let dub = [...data]
        dub[index].name = 'Anand J'
        setData(dub);
    }
    const renderDataFn = (item, index) =>{
       
        return(
            <TouchableOpacity
             onPress={()=>updatePerticulerList(index)}
             style={styles.renderDataStyle}>
                <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    const addMoreList = useCallback(()=>{
        setData([...data, {name:'varun'+1}])
    },[data])
  return (
    <View style={styles.container}>
     <FlatList
      data={data}
    //   extraData={data}
      keyExtractor={(_, index)=>index.toString()}
      renderItem={({item, index})=>renderDataFn(item, index)}
      contentContainerStyle={{}}
      />
      <Button
       buttonText={'Press To Update List'} 
       buttonPressed={()=>addMoreList()} 
       btnStyle={{alignItems: 'center', backgroundColor :'skyblue'}}
       />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    renderDataStyle: {
        borderColor:'grey',
        borderWidth:1,
        marginHorizontal: 10,
        borderRadius: 5,
        marginVertical: 5,
    },
    text: {
        paddingLeft: 10,
        paddingVertical: 10
    }
})