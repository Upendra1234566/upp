import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Seacrw from "./Searcw";
import Massaner from "./Massaner";
import Screen4 from "../Screen4";

const Bottom = createBottomTabNavigator();

function BottomTab() {
  return (
    <Bottom.Navigator>
      <Bottom.Screen name="Seacrw" component={Seacrw}  options={{headerShown: false}} />
      <Bottom.Screen name="Massaner" component={Massaner} options={{headerShown: false}} />
      <Bottom.Screen name="Screen4" component={Screen4} options={{headerShown: false}} />
    </Bottom.Navigator>
  );
}
export default BottomTab; 