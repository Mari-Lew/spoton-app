import React, {  } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View,KeyboardAvoidingView, Image, Text, ImageBackground, TouchableOpacity, Dimensions , TextInput, StyleSheet } from 'react-native';
import { UniversalLoginProvider, useLoginState, updateIsLoggedIn } from '../Universal_States/universalLoginState';
import { useNavigation, CommonActions } from '@react-navigation/native';
import Login from '../Authentication/LogIn/Login';

export const HomeScreen = ( ) =>
{
  const { updateIsLoggedIn } = useLoginState();
  const navigation = useNavigation();

  const logOut = () => {
    // for when the user Logs out
    updateIsLoggedIn(false);
    
    // reset the navigation stack
    navigation.dispatch(
      CommonActions.reset(
        {
          index: 0, // Index of the home screen
          routes: [{ name: 'Login' }],
        }
      )
    )
  };

    return (
        <View style={styles.container}>
        {updateIsLoggedIn ? (
          // Render the main content when the user is logged in
          <View style ={styles.container}>
            <TouchableOpacity  onPress={logOut}> 
            <Text style={styles.nonBoldSmalllabel}>Log Out</Text>
            
            </TouchableOpacity>
            </View>
        ) : (
              <Login/> // User isnt logged in. Render the login screen
        )}
      </View>
    )
    
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  flex: 1,
  resizeMode: 'cover',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  },
});;
