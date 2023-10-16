import React, { useRef } from 'react';
import { View,Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, CommonActions, DrawerActions } from '@react-navigation/native';
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


import Login from '../Authentication/LogIn/Login';
import DataList from './DataScrollList';
import { useDataPoints } from './handlePitchData';
import { useLoginState } from '../Universal_States/universalLoginState';
import Header from '../Components/Header';

export const HomeScreen = ( ) =>
{
  const { updateIsLoggedIn } = useLoginState();
  const { dataPoints, addDataPoint } = useDataPoints();

//Arrays ; will eventually be grabbed from the pitcher instead of a set list.
  const pitchTypes = ['Fastball', 'Slider', 'Curveball', 'Changeup', 'Other'];
  const locationNums = ['1', '2', '3', '4', '5','6','7','8','9'];
  const hitSpots = ['Yes', 'No'];

// for the swipeable bottom sheet
  const bottomSheetRef = useRef(null);
  const renderContent = () => (
    <View style={styles.bottomSheet}>
      <Text>Bottom Sheet Content</Text>
      <TouchableOpacity onPress={() => bottomSheetRef.current.close()}>
        <Text>Close Bottom Sheet</Text>
      </TouchableOpacity>
    </View>
  );
  

    return (
        <View style={styles.container}>
        {updateIsLoggedIn ? (
          // Render the main content when the user is logged in
          <View style ={styles.container}><View style={styles.mainSection}>
              
            </View>
            
            <BottomSheet
            ref={bottomSheetRef}
            index={0}
            snapPoints={['20%', '45%']}
            backgroundComponent={({ style }) => (
              <View style={[style, styles.dataContainer]} />
            )}
            >
            {/* Display the scrollable data list */}
            <DataList data={dataPoints} />
            </BottomSheet>

            </View>
        ) : (
              <Login/> 
        )}
      </View>
    )
    
}

// Bottom Sheet


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    },
    bottomSheet: {
      backgroundColor: 'white',
      padding: 16,
      alignItems: 'center',
    },
    mainSection: {
      justifyContent: 'center',
      top: 0, // Position it at the bottom
      left: 0, // Position it at the left edge
      right: 0, // Position it at the right edge
      padding: 10,
      height: '50%',
    },

  dataContainer:
  {
    position: 'absolute',
    //width: '100%',
    //height: '50%',
    backgroundColor: 'white',
    borderTopLeftRadius: '30%',
    borderTopRightRadius: '30%',
    padding: 10,
    bottom: 0, // Position it at the bottom
    left: 0, // Position it at the left edge
    right: 0, // Position it at the right edge
  },
  
});;
