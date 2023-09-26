import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../Authentication/LogIn/Login';
import { SignUp } from '../Authentication/SignUp/SignUp';

const Stack = createStackNavigator();

const Navigator =() => {
    return (
      <NavigationContainer>
        
      </NavigationContainer>
    );
  }
  
  export default Navigator;