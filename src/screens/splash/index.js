import React, { useRef , useState} from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ShowSliderPage from './showSliderPage'
import { Page } from '../animations/constant';

export default function Welcome() {
    const scrollRef = useRef();
    const [value, setValue] = useState(0);
    const handleScroll = (event)=>{
        setValue(parseInt(event.nativeEvent.contentOffset.x/Dimensions.get('window').width))
    }
    
    return (
        <View style={{ flex: 1 }}>
            <ScrollView 
            ref={scrollRef} 
            horizontal={true}
            scrollEventThrottle={16}
             pagingEnabled 
             onScroll={handleScroll}>
                {Page.map((item, index) => {
                    return (
                        <View style={{ backgroundColor: index == 0 ? 'red' : index === 1 ? 'green' : 'pink' }}>
                            <ShowSliderPage {...{ item, index }} />
                        </View>
                    )
                })}
            </ScrollView>
            <View style={{ position: 'absolute', bottom: 50, alignItems: 'center', left: '42%', flexDirection: 'row' }}>
                {Page.map((item, index) => <View key={index.toString()} style={[index != value ?styles.circle : styles.circle2]} />)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    circle: {
        alignItems: 'center',
        height: 15,
        width: 15,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: 'center', marginLeft: 5
    },
    circle2: {
        alignItems: 'center',
        height: 15,
        width: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginLeft: 5,
        backgroundColor:'#FFF'
    }
})