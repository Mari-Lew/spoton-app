import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { Login } from '../Authentication/LogIn/Login';
import { ForgotPassword } from '../Authentication/ForgotPassword';
import { SignUp } from '../Authentication/SignUp/SignUp';
import { HomeScreen } from '../Home/HomeScreen';
import SideMenuNavigator from './SideMenu/SideMenuNavigator';

const StackNavigator = createNativeStackNavigator();

const Navigator = () => {
    return (
      <StackNavigator.Navigator>

        <StackNavigator.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <StackNavigator.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />

        <StackNavigator.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />

        <StackNavigator.Screen
          name="Home"
          component={SideMenuNavigator}
          options={{ headerShown: false }}
        />

        </StackNavigator.Navigator>
    );
  }
  

  /**
   * 
        <StackNavigator.Screen
          name="DrawerNavigator"
          component={SideMenuNavigator}
        />
   */

  export default Navigator;