import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';


function signUpButton() {
    const SignUpButton = ({ onPress }) => {
        return (
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={buttons.text}>Sign Up</Text>
          </TouchableOpacity>
        );
      };

      return signUpButton;
}