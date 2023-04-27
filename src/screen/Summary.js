import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {COLORS} from '../constant';

const Summary = ({navigation}) => {
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
          Summary
        </Text>
      </View>
      <View style={styles.body}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 20}}>
          <View style={styles.card}>
            <Text style={{fontSize: 18, marginBottom: 10}}>Data Customer</Text>
            <Text style={{fontSize: 18, color: COLORS.black}}>
              Agil Bani (0813763476)
            </Text>
            <Text style={{fontSize: 18, color: COLORS.black}}>
              Jl. Perumnas, Condong catur, Sleman, Yogyakarta
            </Text>
            <Text style={{fontSize: 18, color: COLORS.black}}>
              gantengdoang@dipanggang.com
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={{fontSize: 18, marginBottom: 10}}>
              Alamat Outlet Tujuan
            </Text>
            <Text style={{fontSize: 18, color: COLORS.black}}>
              Jack Repair - Seturan (027-343457)
            </Text>
            <Text style={{fontSize: 18, color: COLORS.black}}>
              Jl. Affandi No 18, Sleman, Yogyakarta
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={{fontSize: 18, marginBottom: 10}}>Barang</Text>
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
        </ScrollView>
      </View>
      <View style={{flex: 1, paddingHorizontal: 22, alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.bottomconfirm}
          onPress={() => navigation.navigate('ConfirmReservasi')}>
          <Text style={styles.textbottom}>Reservasi Sekarang</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Summary;

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
  body: {},
  card: {
    backgroundColor: COLORS.white,
    // height: 175,
    paddingVertical: 22,
    justifyContent: 'center',
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 22,
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
