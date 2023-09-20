import React, { useState, useRef  } from 'react';
import { View, Image, Text, ImageBackground, TouchableOpacity, Dimensions , TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { buttons } from '../../assets/Styles/buttons';
import { constants } from '../../assets/constants';


export function SignUp({ navigation }) {
// Variables and such
  const [emailInput, setNewEmail] = useState(''); // State to hold the email the user will sign up with
  const [passwordInput, setNewPassword] = useState(''); // State to hold password for the user
  const [confirmPasswordInput, setPasswordConfirmation] = useState(''); // State to hold password for the user to check

// State handlers
  const handleNewEmailState = (text) => {
    setNewEmail(text)
  }
  const handleNewPasswordState = (text) => {
    setNewPassword(text)
  }
  const handleNewPasswordConfirmState = (text) => {
    setPasswordConfirmation(text)
  }

// set up UI

return(
  <View style={styles.container}>
    
    <ImageBackground
    source={require('../../assets/temp_background.jpg')} 
    style={styles.background}
    resizeMode="cover"
  ></ImageBackground>


  </View>
  
)}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    
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

})