import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const Splashscreen = ({navigation, route}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('AuthNavigation');
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/image/Splash.png')}
        style={styles.img}
      />
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});
