import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import MainScreen from './Drawer/MainScreen';

const Sidebar = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('MainScreen');
    }, 3000);
  }, []);

  return (
    <View>
      <Text>Sidebar</Text>
    </View>
  );
};

export default Sidebar;
