  import { StatusBar } from 'expo-status-bar';
  import React, { useState } from 'react';
  import { View, Image, Text, ImageBackground, TouchableOpacity, Dimensions , TextInput, StyleSheet } from 'react-native';
  import LinearGradient from 'react-native-linear-gradient';
  import { buttons } from '../../assets/Styles/buttons';

export function signUp() {
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

    return (



    )
}