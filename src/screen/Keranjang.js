import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS} from '../constant';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Iconn from 'react-native-vector-icons/dist/Feather';

const Keranjang = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="arrow-back"
          size={22}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            color: COLORS.black,
            marginLeft: 5,
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Keranjang
        </Text>
      </View>
      <View style={styles.body}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 20}}>
          <View style={styles.card}>
            <Image
              source={require('../assets/image/sepatukeranjang.png')}
              style={{marginLeft: 10}}
            />
            <View style={styles.text}>
              <Text style={{color: COLORS.black, fontWeight: 'bold'}}>
                New Balance - Pink Abu - 40
              </Text>
              <Text style={{marginTop: 10}}>Cuci Sepatu</Text>
              <Text style={{marginTop: 10}}>Note : -</Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={{marginTop: 50, width: 130}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Iconn name="plus-square" size={22} color={COLORS.primary} />
                <Text
                  style={{
                    color: COLORS.primary,
                    fontWeight: 'bold',
                    marginLeft: 5,
                  }}>
                  Tambah Barang
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View style={{flex: 1, paddingHorizontal: 22, alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.bottomconfirm}
          onPress={() => navigation.navigate('Summary')}>
          <Text style={styles.textbottom}>Selanjutnya</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Keranjang;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.silver,
  },
  header: {
    height: 56,
    width: '100%',
    backgroundColor: COLORS.white,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 22,
    shadowColor: COLORS.black,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },
  body: {
    paddingHorizontal: 22,
    // paddingTop: 10,
  },
  card: {
    backgroundColor: COLORS.white,
    height: 135,
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    marginLeft: 10,
  },
  bottomconfirm: {
    marginTop: 30,
    backgroundColor: COLORS.primary,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 15,
    bottom: 0,
    position: 'absolute',
    marginBottom: 20,
  },
  textbottom: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
