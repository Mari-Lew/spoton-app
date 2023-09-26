// Imports
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import React, { useState, useEffect } from 'react';
  import { StyleSheet } from 'react-native';
  import { SignUp } from './Authentication/SignUp/SignUp';

  


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

//const Stack = createStackNavigator();

return (
  <SignUp/>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});;