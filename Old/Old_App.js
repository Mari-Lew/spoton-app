// Imports
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
// Variables and Such
  const [emailInput, setLoginText] = React.useState(''); // State to hold user input
  const [passwordInput, setPasswordText] = React.useState(''); // State to hold user input

//Pretty Background
  const GradientBackgroundExample = () => {
    return (
      <LinearGradient
        colors={['#AAAE8E', '#3A606E']} // colors to change
        style={styles.container}
      >
        <Text style={styles.text}>Gradient Background</Text>
      </LinearGradient>
    );
  };



const handleLogin = () => {
  // Handle the login logic here
};

const forgotPassword = () => {

}

return (
  <View style={styles.container}>
    
{/* Logo image [ note: do a better one later ] */}
    <Image
      source={require('./assets/shitLogo.png')}  
      style={styles.image}
    />

{/*EMAIL CONTAINER*/}
      <View style={styles.manyContainerFormat}> 
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        onChangeText={(text) => setInputText(text)}
        value={emailInput}
        underlineColorAndroid="transparent"
      />
    </View>
{/* PASSWORD*/}
    <View style={styles.inputContainer}>
    <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setInputText(text)}
        value={emailInput}
        underlineColorAndroid="transparent"
      />
    </View>

{/* FORGOT PASSWORD*/}
    <TouchableOpacity onPress={forgotPassword}>
      <Text style={styles.clickableText}>Forgot Password?</Text>
    </TouchableOpacity>
    
{/*LOGIN BUTTON*/}
    <TouchableOpacity style={buttons.buttonStyle} onPress={handleLogin}>
      <Text style={buttons.text}>Log in</Text>
    </TouchableOpacity>



{/* SIGN UP */}
  </View>

<StatusBar style="auto" />

  </View>
);
}

//-------------------------------------------------------------------------
const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  //justifyContent: 'center', // Center of the entire app
  marginTop: 100,
  marginLeft: 0,
  
},
baseText: {
  color: '#000000', // text color
  fontSize: 15, // Text size
},

clickableText: {
  color: 'blue', // Text color
 // textDecorationLine: 'underline', // Underline the text
  fontSize: 16,
},

header: StyleSheet.create({
  fontSize: 24,
  marginBottom: 20,
  alignItems: 'center',
}),

input: {
  width: '80%',
  padding: 10,
  borderBottomWidth: 1,
  borderBottomColor: 'transparent',
  margin: 5,
  alignItems: 'center',
},

inputContainer: {
  width: '80%', // Adjust the width of the container
  backgroundColor: '#fff', // Background color for the input container
  borderRadius: 20, // Rounded corners
  borderWidth: 1,
  borderColor: '#ccc',
  marginBottom: 10,
  paddingHorizontal: 10, 
  
},

manyContainerFormat: {
  flexDirection: 'column', // Arrange buttons horizontally
  justifyContent: 'space-between', // Distribute space between buttons
  width: '100%', // Adjust the width of the container
  alignItems: 'center',
},
image: {
  width: 200, // Set the width of the image
  height: 200, // Set the height of the image
  margin: 20
},
});



