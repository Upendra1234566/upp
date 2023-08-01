import React, {useState} from 'react';
import {View, StyleSheet, Image,TouchableOpacity} from 'react-native';
import Home from '../tab/Home';
import Notication from '../tab/Notication';
import Search from '../tab/Search';
import User from '../tab/User';
import Wishlist from '../tab/Wishlits';
//import Header from './Header';

const Homescreen = () => {
  const [SelectedTab, setSelectedTab] = useState(0);

  return (
    <View style={Styles.container}>
      

      {SelectedTab == 0 ? (
        <Home />
      ) : SelectedTab == 1 ? (
        <Search />
      ) : SelectedTab == 2 ? (
        <Wishlist />
      ) : SelectedTab == 3 ? (
        <Notication />
      ) : (
        <User />
      )}

      <View style={Styles.bottomView}>
        <TouchableOpacity
          style={Styles.bottomTab}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            source={
              SelectedTab == 0
                ? require('./images/home_fill.png')
                : require('./images/home.png')
            }
            style={Styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.bottomTab}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            // source={require('./images/search.png')}

            source={
              SelectedTab == 1
                ? require('./images/search.png')
                : require('./images/home.png')
            }
            style={Styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.bottomTab}
          onPress={() => {
            setSelectedTab(2);
          }}>
          <Image
            source={
              SelectedTab == 2
                ? require('./images/wishlist_fill.png')
                : require('./images/wishlist.png')
            }
            style={Styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.bottomTab}
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Image
            source={
              SelectedTab == 3
                ? require('./images/noti_fill.png')
                : require('./images/noti.png')
            }
            style={Styles.bottomTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.bottomTab}
          onPress={() => {
            setSelectedTab(4);
          }}>
          <Image
            source={
              SelectedTab == 4
                ? require('./images/user_fill.png')
                : require('./images/user.png')
            }
            style={Styles.bottomTabIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:`red`, 
  },
  bottomView: {
    position: `absolute`,
    bottom: 0,
    width: `100%`,
    height: 70,
    flexDirection: `row`,
    justifyContent: `space-evenly`,
    alignItems: `center`,
    backgroundColor: `#fff`,
  },
  bottomTab: {
    width: `100%`,
    height: `100%`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  bottomTabIcon: {
    width: 24,
    height: 24,
  },
});

export default Homescreen;
