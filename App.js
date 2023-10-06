// Import(ant)s
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import React, { useState, useEffect } from 'react';
  import { StyleSheet } from 'react-native';
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import 'react-native-gesture-handler';

// Custom screens
  import { SignUp } from './Authentication/SignUp/SignUp';
  import Login from './Authentication/LogIn/Login';
  import { HomeScreen } from './Home/HomeScreen';
  import { ForgotPassword } from './Authentication/ForgotPassword'

// Universal States
  import { UniversalLoginProvider } from './Universal_States/universalLoginState';
  import Navigator from './Navigation/Navigator';


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
      <UniversalLoginProvider>
        <NavigationContainer>

        <Navigator />

      </NavigationContainer>
    </UniversalLoginProvider>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});;