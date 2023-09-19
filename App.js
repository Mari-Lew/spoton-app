// Imports
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import { View, Image, Text, ImageBackground, TouchableOpacity, Dimensions , TextInput, StyleSheet } from 'react-native';
  import { Login } from './Authentication/LogIn/Login';


export default function App() {
  const saveLoggedInState = async (loggedIn) => {
    try {
      await AsyncStorage.setItem('isLoggedIn', loggedIn.toString());
    } catch (error) {
      console.error('Error saving logged-in state:', error);
    }
  };

  // Log the user in
const handleLogin = () => {
  // Perform login logic
  saveLoggedInState(true);
};

// Log the user out
const handleLogout = () => {
  // Perform logout logic
  saveLoggedInState(false);
};

const checkLoggedInState = async () => {
  try {
    const loggedInString = await AsyncStorage.getItem('isLoggedIn');
    if (loggedInString !== null) {
      const loggedIn = loggedInString === 'true';
      // Use 'loggedIn' to determine the user's logged-in state
      return loggedIn;
    }
  } catch (error) {
    console.error('Error retrieving logged-in state:', error);
  }
  return false; // Default to not logged in
};

//----------------------------------------------------------------- Above will be refactored later 
const isLoggedIn = false; //= checkLoggedInState();



return (<View style={{ flex: 1 }}>
  {/* Conditional rendering based on isLoggedIn */}
  {isLoggedIn ? (
    // Render the main content when the user is logged in
    <View style={flex= 1}/>
  ) : (
    // Render the login page when the user is not logged in
    <Login style={flex= 1} />
  )}
</View>
)


};