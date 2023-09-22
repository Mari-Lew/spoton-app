import React, { useState, useRef, useEffect  } from 'react';
import { View, Image, Text, ImageBackground, TouchableOpacity, Dimensions , TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { buttons } from '../../assets/Styles/buttons';
import { constants } from '../../assets/constants';
import Dropdown from './Dropdown';


export const SignUp = ({ navigation }) => {
// Variables and such
  const [emailInput, setNewEmail] = useState(''); // State to hold the email the user will sign up with
  const [phoneInput, setNewPNumber] = useState(''); // State to hold the email the user will sign up with
  const [passwordInput, setNewPassword] = useState(''); // State to hold password for the user
  const [confirmPasswordInput, setPasswordConfirmation] = useState(''); // State to hold password for the user to check

  const emailInputRef = useRef(null); // ref for the email input
  const passwordInputRef = useRef(null); // ref for the password input
  const passwordConfirmInputRef = useRef(null); // ref for the password input
  const phoneInputRef = useRef(null); // ref for the password input

// State handlers
  const handleNewEmailState = (text) => {
    setNewEmail(text)
  }
  const handleNewPNumberState = (text) => {
    setNewPNumber(text)
  }
  const handleNewPasswordState = (text) => {
    setNewPassword(text)
  }
  const handleNewPasswordConfirmState = (text) => {
    setPasswordConfirmation(text)
  }

  //Sign up logic
  const signUpFun = () => {
    // Handle the login logic here.
    // will need to check if credentials are correct but for now, just setting it to true for testing
    
    console.log('Email: ', emailInput);
    console.log('Password: ', passwordInput);
  };

//Dropdown Handling
  const dropdownItems = [
    { label: 'Parent', value: 'parent' },
    { label: 'Coach', value: 'coach' },
    { label: 'Director', value: 'director' },
  ]
  const [selectedItem, setSelectedItem] = useState(dropdownItems[0]);

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

// set up UI

return(
  <View style={styles.container}>
    
    <ImageBackground
    source={require('../../assets/temp_background.jpg')} 
    style={styles.background}
    resizeMode="cover"
  >
  <View style={styles.overlay}>
    <View style={styles.informationBox}>
    <View>
  <Text style={styles.label}>Email</Text>

  <TextInput
            style={styles.input}
            placeholder= { constants.enterEmail }
            onChangeText={handleNewEmailState}
            value={emailInput}
            underlineColorAndroid="transparent"
            placeholderTextColor="white"
            color="white"
            ref={emailInputRef} 
            onSubmitEditing={() => phoneInputRef.current.focus()}
    />

  </View>

  <View style= {styles.break}/>

  <View>
  <Text style={styles.label}>{constants.phoneNumber}</Text>

  <TextInput
            style={styles.input}
            placeholder= { constants.enterPhoneNumber }
            onChangeText={handleNewPNumberState}
            value={phoneInput}
            keyboardType="numeric"
            returnKeyType="done"
            underlineColorAndroid="transparent"
            placeholderTextColor="white"
            color="white"
            ref={phoneInputRef} 
            onSubmitEditing={() => passwordInputRef.current.focus()}
    />

  </View>

  <View style= {styles.break}/>

  <View>
  <Text style={styles.label}>Enter Password</Text>

  <TextInput
            style={styles.input}
            placeholder= { constants.enterNewPassword }
            onChangeText={handleNewPasswordState}
            value={passwordInput}
            underlineColorAndroid="transparent"
            placeholderTextColor="white"
            color="white"
            ref={passwordInputRef} 
            onSubmitEditing={() => passwordConfirmInputRef.current.focus()}
    />

  </View>

  <View style= {styles.break}/>

  <View>
  <Text style={styles.label}> {constants.confirmPassword}</Text>

  <TextInput
            style={styles.input}
            placeholder= { constants.confirmPassword }
            onChangeText={handleNewPasswordState}
            value={confirmPasswordInput}
            underlineColorAndroid="transparent"
            placeholderTextColor="white"
            color="white"
            ref={passwordConfirmInputRef} 
            //donSubmitEditing={() => passwordInputRef.current.focus()}
    />

  </View>

  <View style= {styles.break}/>

<View>

<Text style={styles.label}> {constants.iAmA}</Text>
<Dropdown style= {styles.dropDown} items={dropdownItems} selectedItem={selectedItem} onSelect={handleSelect} />

</View>

  <View style= {styles.break}/>

<View>
<TouchableOpacity style={buttons.buttonStyle} onPress={signUpFun}>
            <Text style={buttons.text}>{constants.signUp}</Text>
          </TouchableOpacity>
</View>
    </View>
  </View>
  </ImageBackground>
  </View>
  
)}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    
  },
  background: {
    flex: 1, // Makes the image cover the entire screen
    resizeMode: 'cover', // Resizes the image to cover the container
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // You can add a semi-transparent overlay if needed
    //backgroundColor: 'grey',
    justifyContent: 'flex-start',
    flexDirection: 'column'
    
  },
  informationBox:
  {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    marginTop: '40%',
    alignContent: 'center',
    paddingLeft: '10%',
    paddingRight: '5%'

  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left',
    marginLeft: 20,
    color: 'white'
  },
  input: {
    width: '90%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20
  },
  keyboardAvoid:
{ 
  flex:5,
  width: '100%',
},
break:
{
  margin: 5
},


})