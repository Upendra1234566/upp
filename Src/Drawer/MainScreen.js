import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Homescreen from './HomeScreen';
import Screen2 from '../Screen2';
import Data from './Data';

const Drawer = createDrawerNavigator();

function MainScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeScreen"
        component={Homescreen}
        options={{headerShown: false}}
      />
      {/* <Drawer.Screen
        name="Screen2"
        component={Screen2}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Data"
        component={Data}
        options={{headerShown: false}}
      /> */}
    </Drawer.Navigator>
  );
}

export default MainScreen;
