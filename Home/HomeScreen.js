import React, {  } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View,KeyboardAvoidingView, Image, Text, ImageBackground, TouchableOpacity, Dimensions , TextInput, StyleSheet } from 'react-native';

export const HomeScreen = ( { navigation }) =>
{
  const isLoggedIn = false;

    return (
        <View style={styles.container}>
        {isLoggedIn ? (
          // Render the main content when the user is logged in
          <Text>"Nothing here yet"</Text>
        ) : (
          // Render the login page when the user is not logged in
            <View>

            </View>
        )}
      </View>
    )
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});;
