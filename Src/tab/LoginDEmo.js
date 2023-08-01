
import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

function LoginDemo() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Login"
        component={LoginDemo}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
  
}

export default LoginDemo;
