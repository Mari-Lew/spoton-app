import React, {  } from 'react';
import { View, Text } from 'react-native';
import { Login } from './Authentication/LogIn/Login';
import { NavigationContainer } from '@react-navigation/native';
import App from '../App';

export function HomeScreen ( { navigation })
{
    return (
        <View style={App.styles.container}>
        {App.isLoggedIn ? (
          // Render the main content when the user is logged in
          <Text>"Nothing here yet"</Text>
        ) : (
          // Render the login page when the user is not logged in
            <Login onLogin={handleLogin} />
            //<SignUp />
        )}
      </View>
    )
}