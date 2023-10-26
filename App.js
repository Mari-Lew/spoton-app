// Import(ant)s
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import React, { useState, useEffect } from 'react';
  import { StyleSheet } from 'react-native';
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import 'react-native-gesture-handler';
  import { GestureHandlerRootView } from 'react-native-gesture-handler';
  import { getAuth } from 'firebase/auth';
  
// Universal States
  import { UniversalLoginProvider } from './Universal_States/universalLoginState';
  import Navigator from './Navigation/Navigator';
import { initializeApp } from 'firebase/app';


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

// Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

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

  // Firebase
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }

    useEffect(() => {
      //const userSub = getAuth().onAuthStateChanged(onAuthStateChanged);
      checkLoggedInState();
      //return userSub;
    }, []); // Run once on component mount


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