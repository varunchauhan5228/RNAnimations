import React, { createRef, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CustomInput } from '../../component'

export default TextInputField = () => {
    const [value, setValue]= useState({
        firstName:'',
        lastName:'',
        email:''
    });

    const inputRef = {
        firstNameRef: createRef(),
        lastNameRef: createRef(),
        emailRef: createRef(),
      };

    return (
        <View style={styles.container}>
            <CustomInput
                ref={inputRef.firstNameRef}
                lebal="First Name"
                placeholder={"Enter First Name.."}
                onChangeText={(text) => setValue({...value, firstName: text})}
                value={value.firstName}
                autoFocus={true}
                onSubmitEditing={()=>
                    inputRef.lastNameRef.current.focus()
                }
            />
            <CustomInput
                ref={inputRef.lastNameRef}
                lebal="Last Name"
                placeholder={"Enter Last Name.."}
                onChangeText={(text) => setValue({...value, lastName: text})}
                value={value.lastName}
                autoFocus={false}
                onSubmitEditing={()=>
                    inputRef.emailRef.current.focus()
                }
                
            />
            <CustomInput
                ref={inputRef.emailRef}
                lebal="Email Address"
                placeholder={"Enter Email Address.."}
                onChangeText={(text) => setValue({...value, email: text})}
                value={value.email}
                autoFocus={false}
                onSubmitEditing={()=>
                    inputRef.firstNameRef.current.focus()
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    }
})