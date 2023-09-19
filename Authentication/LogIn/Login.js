import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';


function loginButton() {
  const LoginButton = ({ onPress }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={buttons.text}>Log In</Text>
      </TouchableOpacity>
    );
  };

  return LoginButton

 
}
  
  export default loginButton;