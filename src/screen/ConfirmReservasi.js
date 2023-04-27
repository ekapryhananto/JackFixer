import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {COLORS} from '../constant';

const ConfirmReservasi = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="close"
        size={30}
        color="black"
        style={{marginTop: 15, marginLeft: 15}}
        onPress={() => navigation.navigate('Home')}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
          height: '100%',
          width: '100%',
        }}>
        <View style={styles.body}>
          <Text style={{color: '#11A84E', fontSize: 24, fontWeight: 'bold'}}>
            Reservasi Berhasil
          </Text>
          <View style={styles.iconconfirm}>
            <Icon name="check" size={75} color="#11A84E" />
          </View>
          <Text style={{textAlign: 'center', fontSize: 20, color: 'black'}}>
            Kami Telah Mengirimkan Kode Reservasi ke Menu Transaksi
          </Text>
        </View>
      </ScrollView>
      <View style={{paddingHorizontal: 22, alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.bottomconfirm}
          onPress={() => navigation.navigate('KodeReservasi')}>
          <Text style={styles.textbottom}>Lihat Kode Reservasi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmReservasi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    paddingHorizontal: 34,
    top: -25,
  },
  iconconfirm: {
    backgroundColor: '#11A84E',
    opacity: 0.4,
    height: 133.33,
    width: 133.33,
    borderRadius: 30,
    marginVertical: 53,
    justifyContent: 'center',
    alignItems: 'center',
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
