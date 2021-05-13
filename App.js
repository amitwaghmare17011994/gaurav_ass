
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import MyStack from './navigators';
import ScreenTwo from './screens/ScreenTwo';
import ScreenOne from './screens/ScreenOne';
import ScreenThree from './screens/ScreenThree';

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerPosition='left'
        drawerType='slide'
      >
        <Drawer.Screen name="screen1" component={ScreenOne} />
        <Drawer.Screen name="screen2" component={ScreenTwo} />
        <Drawer.Screen name="screen3" component={ScreenThree} />

      </Drawer.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
