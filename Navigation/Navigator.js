import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../Authentication/LogIn/Login';
import { SignUp } from '../Authentication/SignUp/SignUp';
import { HomeScreen } from '../Home/HomeScreen';

const StackNavigator = createStackNavigator();

const Navigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Login"
          component={Login}
        />
        
        <Stack.Screen
          name="SignUp"
          component={SignUp}
        />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Navigator;