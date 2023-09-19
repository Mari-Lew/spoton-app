import { StatusBar } from 'expo-status-bar';
  import React, { useState } from 'react';
  import { View, Image, Text, ImageBackground, TouchableOpacity, Dimensions , TextInput, StyleSheet } from 'react-native';
  import LinearGradient from 'react-native-linear-gradient';
  import { buttons } from '../../assets/Styles/buttons';


export function Login() {
  // Variables and Such
  const { width, height } = Dimensions.get('window'); // want the dimenstions of the screen width and height
  const [emailInput, setEmailText] = useState(''); // State to hold user input
  const [passwordInput, setPasswordText] = useState(''); // State to hold user input


const handleEmailState = (text) => {
  setEmailText(text)
}
const handlePasswordState = (text) => {
  setPasswordText(text)
}

  const logIn = () => {
    // Handle the login logic here
    console.log('Email: ', emailInput);
    console.log('Password: ', passwordInput);
  };


return (
  <View style={styles.container}>
{ /* Background image - change when I can get my own */}
     <ImageBackground
    source={require('../../assets/temp_background.jpg')} 
    style={styles.background}
    resizeMode="cover"
  >
  { /**/}

  <View style={styles.overlay}>
    <View>
    { /*Thing will go here to break up the dead space */}

    </View>

  {/*EMAIL INPUT*/}
  <View style={buttons.buttonContainer}>
  
  <TextInput
      style={styles.input}
      placeholder="Enter Email"
      onChangeText={handleEmailState}
      value={emailInput}
      underlineColorAndroid="transparent"
      placeholderTextColor="white"
      color="white"
    />

<TextInput
      style={styles.input}
      placeholder="Enter Password"
      secureTextEntry={true}
      onChangeText={handlePasswordState}
      value={passwordInput}
      underlineColorAndroid="transparent"
      placeholderTextColor="white"
      color="white"
    />

  <TouchableOpacity style={buttons.buttonStyle} onPress={logIn}>
    <Text style={buttons.text}>LOGIN</Text>
  </TouchableOpacity>

  <View style={styles.verticalText}>
    <Text
    style={styles.whiteText}>Don't have an account? </Text>
    <TouchableOpacity
    ><Text style={styles.whiteText}>Sign Up Now!</Text></TouchableOpacity>
  </View>

  <View style={styles.forgotPassword}>
    <TouchableOpacity>
      <Text
      style={styles.whiteText}>Forgot Password?</Text>
    </TouchableOpacity>
  </View>

  </View>  
</View> 
</ImageBackground>
      
    </View> 
    ) }

//-------------------------------------------------------------------------
const styles = StyleSheet.create({
container: {
  flex: 1,
  resizeMode: 'cover',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  
},
whiteText: {
  color: 'white', // Set the color property to 'white'
  fontSize: 15,
},
background: {
  flex: 1, // Makes the image cover the entire screen
  resizeMode: 'cover', // Resizes the image to cover the container
},
overlay: {
  flex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.6)', // You can add a semi-transparent overlay if needed
  justifyContent: 'center',
  alignItems: 'center',
  
},
input: {
  width: '70%',
  padding: 10,
  borderWidth: 1,
  borderRadius: 100,
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  borderColor: 'rgba(255, 255, 255, 0.5)',
  margin: 10,
  alignItems: 'center',
  textAlign: 'center',
  fontSize: 20
},

verticalText: {
  flexDirection: 'row',
  width: '100%',
  color: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: 10
  
},
forgotPassword:
{
  width: '100%',
  height:'60%',
  color: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  bottom: 1,
  paddingBottom:50
}});
  
  export default Login;