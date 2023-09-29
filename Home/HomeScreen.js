import React, {  } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View,KeyboardAvoidingView, Image, Text, ImageBackground, TouchableOpacity, Dimensions , TextInput, StyleSheet } from 'react-native';
import { UniversalLoginProvider, useLoginState, updateIsLoggedIn } from '../Universal_States/universalLoginState';
import { useNavigation, CommonActions } from '@react-navigation/native';
import Login from '../Authentication/LogIn/Login';
import DataList from './DataScrollList';
import { useDataPoints, addDataPoint } from './handlePitchData';

export const HomeScreen = ( ) =>
{
  const { updateIsLoggedIn } = useLoginState();
  const navigation = useNavigation();
  const { dataPoints, addDataPoint } = useDataPoints();

//Arrays ; will eventually be grabbed from the pitcher instead of a set list.
  const pitchTypes = ['Fastball', 'Slider', 'Curveball', 'Changeup', 'Other'];
  const locationNums = ['1', '2', '3', '4', '5','6','7','8','9'];
  const hitSpots = ['Yes', 'No'];
  

  const logOut = () => {
    // for when the user Logs out
    updateIsLoggedIn(false);
    
    // reset the navigation stack
    navigation.dispatch(
      CommonActions.reset(
        {
          index: 0, // Index of the home screen
          routes: [{ name: 'Login' }],
        }
      )
    )
  };

    return (
        <View style={styles.container}>
        {updateIsLoggedIn ? (
          // Render the main content when the user is logged in
          <View style ={styles.container}>
            
            <View style={styles.mainSection}>
              <TouchableOpacity  onPress={logOut}> 
            <Text style={styles.nonBoldSmalllabel}>Log Out</Text>
            </TouchableOpacity>
            </View>
            
            <View style={styles.dataContainer}>
            {/* Display the scrollable data list */}
            <DataList data={dataPoints} />
            </View>

            </View>
        ) : (
              <Login/> 
        )}
      </View>
    )
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    },
    mainSection: {
      justifyContent: 'center',
      top: 0, // Position it at the bottom
      left: 0, // Position it at the left edge
      right: 0, // Position it at the right edge
      padding: 10,
      height: '50%',
      backgroundColor: 'lightblue'
    },

  dataContainer:
  {
    position: 'absolute',
    width: '100%',
    height: '50%',
    backgroundColor: 'white',
    borderTopLeftRadius: '30%',
    borderTopRightRadius: '30%',
    padding: 10,
    bottom: 0, // Position it at the bottom
    left: 0, // Position it at the left edge
    right: 0, // Position it at the right edge
  }
});;
