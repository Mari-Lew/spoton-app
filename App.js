// Imports
  import { StatusBar } from 'expo-status-bar';
  import React, { useState } from 'react';
  import { View, Image, Text, ImageBackground, TouchableOpacity, Dimensions , TextInput, StyleSheet } from 'react-native';
  import LinearGradient from 'react-native-linear-gradient';
  import { buttons } from './Styles/buttons'

export default function App() {
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
      source={require('./assets/temp_background.jpg')} 
      style={styles.background}
      resizeMode="cover"
    >
    { /**/}

    <View style={styles.overlay}>
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


    </View>  
  </View> 
  </ImageBackground>
        
      </View> 
      ) }

//-------------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1, // Makes the image cover the entire screen
    resizeMode: 'cover', // Resizes the image to cover the container
    
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // You can add a semi-transparent overlay if needed
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
    width: '100%'
  },
});