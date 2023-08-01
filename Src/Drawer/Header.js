import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const Header = ({
  title,
  leftIcon,
  rightIcon,
  onClickleftIcon,
  onClickRightIcon,
}) => {
  return (
    <View style={Styles.header}>
      <TouchableOpacity
        style={Styles.btn}
        onPress={() => {
          onClickleftIcon();
        }}>
        <Image source={leftIcon} style={Styles.icon} />
      </TouchableOpacity>
      <Text style={{color: `#ffff`}}>{title}</Text>
      <TouchableOpacity style={Styles.btn}>
        <Image source={rightIcon} style={Styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  header: {
    width: width,
    height: 60,
    justifyContent: `space-between`,
    flexDirection: `row`,
    alignItems: 'center',
    backgroundColor: '#0786DAFD',
    paddingLeft: 15,
    paddingRight: 15,
  },
  btn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
});

const {width, height} = Dimensions.get('screen');

export default Header;
