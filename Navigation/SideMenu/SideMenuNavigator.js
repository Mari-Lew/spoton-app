import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';

//Screens
import ProfileScreen from '../../Screens/Profile';
import SettingsScreen from '../../Screens/Settings';
import DrawerItems from '../../Constants/DrawerItems';

//Aesthetics
import { AntDesign, Ionicons, MaterialCommunityIcons  } from '@expo/vector-icons';

const DrawerNavigator = createDrawerNavigator();

const SideMenuNavigator = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator.Navigator 
            drawerType="front"
            initialRouteName='Home'
            drawerContent={(props) => <SideMenuContent {...props} />}>
            {
                DrawerItems.map( drawer => <DrawerNavigator.Screen
                    key={ drawer.name }
                    name={ drawer.name }
                    options={
                        {
                            drawerIcon: ({ focused, color, size }) => {
                                let iconName;
                                if (drawer.iconType === 'AntDesign') {
                                    iconName = 'user';
                                } else if (drawer.iconType === 'Ionicons') {
                                    iconName = 'settings';
                                }
                                return (
                                    <drawer.iconType name={iconName} size={size} color={color} />
                                );
                        }
                    }
                    }
                     />
                     
                )
            }
            </DrawerNavigator.Navigator>
        </NavigationContainer>
    );
}

export default SideMenuNavigator;