import React, { useState, useRef, useEffect  } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export function ForgotPassword({navigation}) {
// constants to keep track of
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

  const handleResetPassword = () => {
    if (email) {
      setMessage(`Password reset request sent to ${email}`);
    } else {
      setMessage('Please enter your email address');
    }
  };
    
    return (

<View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    button: {
      backgroundColor: 'blue',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    message: {
      marginTop: 20,
      fontSize: 16,
      color: 'green',
    },
  });