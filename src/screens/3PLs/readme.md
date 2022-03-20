GoogleLogin Integration using firebase.
==========For iOS==========>
Step1-> npm i @react-native-google-signin/google-signin
Step2-> add pod 'GoogleSignIn', '~> 6.1.0' in pod file.
Step3-> cd ios && pod install
Step4-> Goto firebase consle
Step5-> create project and register app with bundle Identifire name(In Xcode=>General=>Identity=>Bundle Identifire).
Step6-> download config file as GoogleService-Info.plist and paste in where info.plist file available.
Step7-> Add initilization code => checked ObjectiveC => follow and add code in delegate.m file and goto console.
Step8-> Open GoogleService-Info.plist file and copy REVERSED_CLIENT_ID.
Step9-> Open Xcode and go info section => URL Type => and paste REVERSED_CLIENT_ID into URL Schemes.
Step10-> Goto Google developer account => credentials=> and get clientID.
****** Starting Coding *****
Step1-> Follow:- https://github.com/react-native-google-signin/google-signin
Step2-> import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'; 
Step3-> GoogleSignin.configure({
  webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server (needed to verify user ID and offline 
});
Step4-> Use Its signIn function to Google loging.

===========For Android==========>
