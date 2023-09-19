// Imports
  import { StatusBar } from 'expo-status-bar';
  import React from 'react';
  import { View, Image, Text, ImageBackground, TouchableOpacity, Dimensions , TextInput, StyleSheet } from 'react-native';
  import LinearGradient from 'react-native-linear-gradient';
  import { buttons } from './Styles/buttons'

export default function App() {
  // Variables and Such
    const { width, height } = Dimensions.get('window'); // want the dimenstions of the screen width and height
    const [emailInput, setLoginText] = React.useState(''); // State to hold user input
    const [passwordInput, setPasswordText] = React.useState(''); // State to hold user input

    const logIn = () => {
      // Handle the login logic here
      console.log('Login Button Clicked');
    };

    const signUp = () => {
      console.log('Sign Up Button Clicked');
    }

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
{/*LOGIN BUTTON*/}
    <View style={buttons.buttonContainer}>
    <TouchableOpacity style={buttons.buttonStyle} onPress={logIn}>
      <Text style={buttons.text}>Log in</Text>
    </TouchableOpacity>
    <TouchableOpacity style={buttons.buttonStyle} onPress={signUp}>
      <Text style={buttons.text}>Sign Up</Text>
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
});