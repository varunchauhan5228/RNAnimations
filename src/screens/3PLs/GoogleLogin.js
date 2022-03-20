import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useEffect } from 'react';

export default GoogleLogin = () => {
    useEffect(()=>{
      
        GoogleSignin.configure({
           webClientId:'893903621223-skqttt1gdkv6i25c7nosakvcdnd8735r.apps.googleusercontent.com',
           iosClientId:'893903621223-p7gc867m18au92vgdes0p3fjd23egj8r.apps.googleusercontent.com'
          });
    },[])
    const signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          console.log("userInfo====>>",userInfo)
        } catch (error) {
          if (error?.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log("SIGN_IN_CANCELLED====>>",error)
            // user cancelled the login flow
          } else if (error?.code === statusCodes.IN_PROGRESS) {
            console.log("IN_PROGRESS====>>",error)
            // operation (e.g. sign in) is in progress already
          } else if (error?.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log("PLAY_SERVICES_NOT_AVAILABLE====>>",error)
            // play services not available or outdated
          } else {
            console.log("ELSE====>>",error)
            // some other error happened
          }
        }
      };
      const signOut = async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          console.log('Logout called')// Remember to remove the user from your app's state as well
        } catch (error) {
          console.error(error);
        }
      };
  return (
      <>
    <TouchableOpacity onPress={()=>signIn()}>
      <Text>GoogleLogin</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>signOut()}>
      <Text>Logout</Text>
    </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({})