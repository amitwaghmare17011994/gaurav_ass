import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import ScreenOne from '../screens/ScreenOne';
import ScreenThree from '../screens/ScreenThree';
import ScreenTwo from '../screens/ScreenTwo';
const Stack = createStackNavigator();


const MyStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="screen1" component={ScreenOne} />
            <Stack.Screen name="screen2" component={ScreenTwo} />
            <Stack.Screen name="screen3" component={ScreenThree} />

        </Stack.Navigator>
    )
}

export default MyStack