import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const buttons = StyleSheet.create({
    buttonStyle: {
      backgroundColor: '#fff', // background color
      borderRadius: 80, // Rounded corners
      paddingVertical: 16, // Vertical padding
      paddingHorizontal: 92, // Horizontal padding
      margin: 15,
      alignItems: 'center', // Center text horizontally
      justifyContent: 'center', // Center text vertically
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 3
    },
    buttonContainer: {
      flexDirection: 'column', // Arrange buttons horizontally
      justifyContent: 'space-between', // Distribute space between buttons
      width: '95%', // Adjust the width of the container
    },
    
    text: {
      color: '#000000', // text color
      fontSize: 20, // Text size
    }
    })
    //----------- Login stuff below until refactor --------------------------------- 
    const LoginButton = ({ onPress }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={buttons.text}>Log In</Text>
      </TouchableOpacity>
    );
    };
    
    //----------- SignUp stuff below until refactor --------------------------------- 
    const SignUpButton = ({ onPress }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={buttons.text}>Sign Up</Text>
      </TouchableOpacity>
    );
    };