import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constant';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Circle from 'react-native-vector-icons/dist/FontAwesome';

const KodeReservasi = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}>
        <View style={styles.header}>
          <Icon
            name="arrow-back"
            size={22}
            color="black"
            onPress={() => navigation.navigate('Transaction')}
          />
        </View>
        <View style={styles.koderef}>
          <Text>20 Desember 2020 09:00</Text>
          <Text
            style={{
              color: COLORS.black,
              fontSize: 36,
              fontWeight: 'bold',
              marginTop: 56,
            }}>
            CS122001
          </Text>
          <Text style={{color: COLORS.black, fontSize: 18}}>
            Kode Reservasi
          </Text>
          <Text style={{marginTop: 40, fontSize: 18, textAlign: 'center'}}>
            Sebutkan Kode Reservasi saat tiba di outlet
          </Text>
        </View>
        <Text style={{color: COLORS.black, marginLeft: 10, marginTop: 18}}>
          Barang
        </Text>
        <View style={styles.barang}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../assets/image/sepatukeranjang.png')} />
              <View style={{marginLeft: 10}}>
                <Text style={{color: COLORS.black, fontWeight: 'bold'}}>
                  New Balance - Pink Abu - 40
                </Text>
                <Text style={{marginTop: 10}}>Cuci Sepatu</Text>
                <Text style={{marginTop: 10}}>Note : -</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={{color: COLORS.black, marginLeft: 10, marginTop: 18}}>
          status Pesanan
        </Text>
        <View style={styles.status}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.circle}>
              <Circle name="circle" size={22} color="#BB2427" />
            </View>
            <View style={{flexDirection: 'column', marginLeft: 10}}>
              <Text style={{color: COLORS.black}}>Telah Reservasi</Text>
              <Text>20 Desember 2020</Text>
            </View>
            <Text style={{right: 0, position: 'absolute'}}>09:00</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default KodeReservasi;

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
    elevation: 3,
  },
  koderef: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingVertical: 16,
    paddingHorizontal: 69,
  },
  barang: {
    marginTop: 10,
    backgroundColor: COLORS.white,
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  status: {
    marginTop: 10,
    backgroundColor: COLORS.white,
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  circle: {
    // backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
    height: 22,
    width: 20,
    borderRadius: 20,
    shadowColor: '#BB2427',
    shadowOffset: {
      height: 5,
      // width: 2,
    },
    shadowOpacity: 1,
    elevation: 5,
  },
});
