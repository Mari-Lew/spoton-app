// Imports
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import React, { useState, useEffect } from 'react';
  import {NavigationContainer} from '@react-navigation/native';
  import { View, Image, Text, ImageBackground, TouchableOpacity, Dimensions , TextInput, StyleSheet } from 'react-native';
  import { Login } from './Authentication/LogIn/Login';
  import { SignUp } from './Authentication/SignUp/SignUp';
  import { HomeScreen } from './MainScreen/HomeScreen';
  


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const saveLoggedInState = async (loggedIn) => {
    try {
      await AsyncStorage.setItem('isLoggedIn', loggedIn.toString());
    } catch (error) {
      console.error('Error saving logged-in state:', error);
    }
  };

  const checkLoggedInState = async () => {
    try {
      const loggedInString = await AsyncStorage.getItem('isLoggedIn');
      if (loggedInString !== null) {
        const loggedIn = loggedInString === 'true';
        setIsLoggedIn(loggedIn);
      }
    } catch (error) {
      console.error('Error retrieving logged-in state:', error);
    }
  };

  useEffect(() => {
    checkLoggedInState();
  }, []); // Run once on component mount

  const handleLogin = () => {
    // Perform login logic
    saveLoggedInState(true);
    setIsLoggedIn(true); // Update the state
  };

  const handleLogout = () => {
    // Perform logout logic
    saveLoggedInState(false);
    setIsLoggedIn(false); // Update the state
  };

//----------------------------------------------------------------- Above will be refactored later 


return (
  <NavigationContainer>
    
  </NavigationContainer>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});;