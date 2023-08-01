import react, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../Drawer/Header';

const Home = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProduts();
  }, []);

  const getProduts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  };

  return (
    <View style={Styles.container}>
      <Header
        leftIcon={{
            uri: 'https://cdn-icons-png.flaticon.com/512/2415/2415292.png',
        }}
        rightIcon={{
         
          uri: 'https://cdn-icons-png.flaticon.com/512/3239/3239958.png',
        }}
        title={'UPENDRA'}
        onClickleftIcon={() => {
          
          navigation.openDrawer();
        }}
      />
      

      <FlatList
        data={products}
        renderItem={({item, index}) => {
          return (
            <View style={Styles.Productsitem}>
              <Image source={{uri: item.image}} style={Styles.ImagesProducts} />
              <View>
                <Text style={Styles.name}>
                  {item.title.length > 30
                    ? item.title.substring(0, 26) + '...'
                    : item.title}
                </Text>

                <Text style={Styles.descr}>
                  {item.description.length > 30
                    ? item.description.substring(0, 30) + '...'
                    : item.description}
                </Text>
                <Text style={Styles.prz}>{'$' + item.price}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  Productsitem: {
    width: Dimensions.get('window').width,
    height: 100,
    marginTop: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: `row`,
  },
  ImagesProducts: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 17,
    fontWeight: '600',
    marginLeft: 20,
  },
  descr: {
    marginLeft: 20,
  },
  prz: {
    color: 'green',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
  },
});

export default Home;
