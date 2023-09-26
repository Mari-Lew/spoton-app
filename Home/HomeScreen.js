import React, {  } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View,KeyboardAvoidingView, Image, Text, ImageBackground, TouchableOpacity, Dimensions , TextInput, StyleSheet } from 'react-native';
import { UniversalLoginProvider, useLoginState } from '../Universal_States/universalLoginState';
import Login from '../Authentication/LogIn/Login';

export const HomeScreen = ( { navigation }) =>
{
  const { isLoggedIn } = useLoginState();

    return (
        <View style={styles.container}>
        {isLoggedIn ? (
          // Render the main content when the user is logged in
          <Text>"Nothing here yet"</Text>
        ) : (
          // Render the login page when the user is not logged in
              <Login />
        )}
      </View>
    )
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});;
