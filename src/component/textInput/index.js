import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native'
import React,{forwardRef} from 'react'

const CustomInput = ({
    placeholder,
    lebal,
    onChangeText,
    value,
    autoFocus,
    onSubmitEditing,
},ref) => {
    return (
        <View>
            <Text style={styles.text}>{lebal}</Text>
            <View style={styles.Input}>
                <TextInput
                    ref={ref}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    value={value}
                    returnKeyType='done'
                    autoFocus={autoFocus}
                    onSubmitEditing={onSubmitEditing}
                />
            </View>
        </View>
    )
}
export default forwardRef(CustomInput)

const styles = StyleSheet.create({
    Input: {
        justifyContent: 'center',
        height: 40,
        width: Dimensions.get('window').width - 20,
        borderColor: 'grey',
        borderWidth: 1.5,
        borderRadius: 5,
        paddingLeft: 5,
    },
    text: {
        paddingVertical: 5
    }
})