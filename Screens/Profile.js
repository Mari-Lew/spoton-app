import * as React from 'react';
import { View,Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function ProfileScreen() {
   return (
<View style={styles.screenContainer}>

<View style={styles.topHalf}><Text style={{fontSize:16,fontWeight:'700'}}>Profile Screen</Text></View>

<ScrollView style={styles.bottomHalf}>
   <Text>"My Pitchers"</Text>
</ScrollView>
</View>

   );
 }

 const styles = StyleSheet.create(
   {
      screenContainer: {
         flex: 1,
         width: '100%',
         height: '100%'
      },

      topHalf: {
         position: 'absolute',
         width: '100%',
         height: '25%',
         backgroundColor: 'lightgrey',
         padding: 10,
         top: 0,
         left: 0, 
         right: 0, // Position it at the right edge
      },
      
      bottomHalf: {
         position: 'absolute',
         width: '100%',
         height: '75%',
         backgroundColor: 'lightblue',
         padding: 10,
         bottom: 0,
         left: 0, 
         right: 0, // Position it at the right edge
      }
   }
 )