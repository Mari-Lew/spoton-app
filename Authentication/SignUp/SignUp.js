import React, { useState, useRef  } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';
import { buttons } from '../../assets/Styles/buttons';
import { constants } from '../../assets/constants';
import Dropdown from './Dropdown';

export const SignUp = ({ navigation }) => {
// Variables and such
  const [emailInput, setNewEmail] = useState(''); // State to hold the email the user will sign up with
  const [passwordInput, setNewPassword] = useState(''); // State to hold password for the user
  const [confirmPasswordInput, setPasswordConfirmation] = useState(''); // State to hold password for the user to check

  const emailInputRef = useRef(null); // ref for the email input
  const passwordInputRef = useRef(null); // ref for the password input
  const passwordConfirmInputRef = useRef(null); // ref for the password input
  const [showPassword, setShowPassword] = useState(false);

  const [isValidEmail, setIsValidEmail] = useState(true); // if the user input a correct email
  const [isValidPasswordFormat, setIsValidPasswordFormat] = useState(true); // if the password meets requirements
  const [passwordsMatch, setIsValidPasswordsMatch] = useState(true); // if the passwords matched when re-entered
  const [hasEightChars, setHasEightChars] = useState(true);
  const [hasOneUppercase, setHasOneUpperCase] = useState(true);
  const [hasOneNum, sethasOneNum] = useState(true);
  const [hasOneSpecial, sethasOneSpecial] = useState(true);

  const [UserSelectedItem, setUserSelectedItem] = useState(true); // if they selected an item from the drop down

// State handlers
  const handleNewEmailState = (text) => {
    setNewEmail(text);
    setIsValidEmail(validEmailCheck(text));
  }

  const handleNewPasswordState = (text) => {
    setNewPassword(text);

    setHasEightChars(text.length >= 8);
    setHasOneUpperCase(/[A-Z]/.test(text));
    sethasOneNum(/\d/.test(text));
    sethasOneSpecial(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~ ]/.test(text));

    setIsValidPasswordFormat(isValidPassword(text));
  }

  const handleNewPasswordConfirmState = (text) => {
    setPasswordConfirmation(text)
  }

  //Validation Checking
    /**
     * validEmailCheck
     * This function checks if the user is inputting a valid email pattern in.
     * Does not check if the email is a legitimate email.
     * 
     * @param {*} input 
     * @returns true if the input is a valid email pattern
     */
    const validEmailCheck = (input) =>
    {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,4}$/i;

      //console.log('Valid email check returns: ' + emailRegex.test(input));
      return emailRegex.test(input);
    }

    /**
     * isValidPassword
     * @param {*} input 
     */
    const isValidPassword = (input) =>
    {
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&-_])[A-Za-z\d@#$!%*?&-_]{8,}$/;

      return passwordRegex.test(input);

    }

    const validatePasswordConfirmation = (input) => {
      setIsValidPasswordsMatch(input === passwordInput);
    };

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

  //Sign up logic
  const signUpFun = () => {
    if (!isValidEmail || !isValidPasswordFormat || !passwordsMatch) {
      console.log('Please correct the form errors');
      return;
    }

    console.log('Email: ', emailInput);
    console.log('Password: ', passwordInput);
    //console.log('Password Confirm: ', confirmPasswordInput);
    //console.log('I am a:', selectedItem.value);

    //console.log('Valid email?', isValidEmail);
  };

//Dropdown Handling
  const dropdownItems = [
    { label: 'Parent', value: 'parent' },
    { label: 'Coach', value: 'coach' },
    { label: 'Director', value: 'director' },
  ]
  const [selectedItem, setSelectedItem] = useState(dropdownItems[null]);

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
  <Text style={styles.label}>{constants.email}</Text>
  

  {!isValidEmail && (
        <Text style={styles.errorLabel}>{constants.inputValEmail}</Text>
      )}

  <TextInput
            style={[styles.input, 
              !isValidEmail && styles.inputERROR,
              isValidPasswordFormat && passwordInput.length > 0 && styles.inputValid]}
            placeholder= { constants.enterEmail }
            onChangeText={handleNewEmailState}
            value={emailInput}
            underlineColorAndroid="transparent"
            placeholderTextColor="white"
            color="white"
            ref={emailInputRef} 
            onSubmitEditing={() => passwordInputRef.current.focus()}
    />

  </View>

  <View style= {styles.break}/>

  <View>
  <Text style={styles.label}>{constants.enterPassword}</Text>

  {!hasEightChars && (
        <Text style={styles.errorLabel}>{"At least 8 characters required"}</Text>
      )}
  {!hasOneNum && (
        <Text style={styles.errorLabel}>{"At least 1 number required"}</Text>
      )}
  {!hasOneUppercase && (
        <Text style={styles.errorLabel}>{"At least 1 uppercase letter required"}</Text>
      )}
  {!hasOneSpecial && (
        <Text style={styles.errorLabel}>{"At least 1 special character required. Accepted: @#$!%*?&-_ "}</Text>
      )}

<View style={styles.inputContainer}>
<TextInput
            secureTextEntry={!showPassword}
            style={[styles.input, !isValidPasswordFormat && styles.inputERROR]}
            width= "80%"
            placeholder= { constants.enterNewPassword }
            onChangeText={handleNewPasswordState}
            value={passwordInput}
            underlineColorAndroid="transparent"
            placeholderTextColor="white"
            color="white"
            ref={passwordInputRef} 
            onSubmitEditing={() => passwordConfirmInputRef.current.focus()}
    />
    <TouchableOpacity onPress={togglePasswordVisibility}>
        <FontAwesome
          name={showPassword ? 'eye-slash' : 'eye'}
          size={24}
          color="gray"
          margin="10%"
        />
      </TouchableOpacity>
</View>

  </View>

  <View style = {styles.smallBreak}></View>

  <Text style={styles.nonBoldSmalllabel}>{constants.passRequirements}</Text>

  <View style= {styles.break}/>

  <View>
  <Text style={styles.label}> {constants.confirmPassword}</Text>

  <TextInput
            style={styles.input}
            placeholder= { constants.confirmPassword }
            onChangeText={handleNewPasswordConfirmState}
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
<Dropdown 
style= {styles.dropDown}
items={dropdownItems} 
selectedItem={selectedItem} 
onSelect={handleSelect} />

</View>

  <View style= {styles.break}/>

<View>
<TouchableOpacity style={buttons.buttonStyle} onPress={signUpFun}>
            <Text style={buttons.text}>{constants.signUp}</Text>
          </TouchableOpacity>
</View>

<View style= {styles.break}/>

</View>
<View style={styles.divider}/>

<View style={{ marginTop: 10 }}>
  <TouchableOpacity onPress={signUpFun}>
    <Text style={styles.nonBoldSmalllabel}>Back to Log in</Text>
  </TouchableOpacity>
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
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // You can add a semi-transparent overlay if needed
    //backgroundColor: 'grey',
    justifyContent: 'flex-start',
    flexDirection: 'column'
    
  },
  informationBox:
  {
    width: '100%',
    justifyContent: 'flex-start',
    marginTop: '35%',
    alignContent: 'center',
    paddingLeft: '5%'

  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left',
    marginLeft: 20,
    color: 'white'
  },
  nonBoldSmalllabel: {
    fontSize: 15,
    textAlign: 'center',
    marginLeft: '5%',
    paddingRight: '10%',
    color: 'white',
  },
  errorLabel: {
    fontSize: 15,
    marginBottom: 5,
    textAlign: 'left',
    marginLeft: 20,
    color: 'red'
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
  inputERROR: {
    width: '90%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
    borderColor: 'rgba(255, 0, 0, 0.5)',
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
  margin: 10
},
smallBreak:
{
  margin: 5
},
divider: {
  height: 1, // Set the height of the divider
  width: '90%',
  backgroundColor: 'white', // Set the color of the divider
  justifyContent: 'center',
  alignSelf: 'center'
},
inputContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 10,
},
})
