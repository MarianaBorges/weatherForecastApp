import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Seach } from '../screens/Seach';
import { Details } from '../screens/Details';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppStackRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false}} >
            <Screen name='Home' component={Home}/>
            <Screen name='Seach' component={Seach}/>
            <Screen name='Details' component={Details}/>
        </Navigator>
    )
}