import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../constant';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const Transaction = ({navigation}) => {
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
          Transaction
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}>
        <View style={styles.body}>
          <View style={styles.card}>
            <TouchableOpacity
              onPress={() => navigation.navigate('KodeReservasi')}>
              <Text>20 Desember 2020</Text>
              <Text
                style={{fontWeight: '500', color: COLORS.black, marginTop: 13}}>
                New Balance - Pink Abu - 40
              </Text>
              <Text style={{color: COLORS.black}}>Cuci Sepatu</Text>
              <View style={{flexDirection: 'row', marginTop: 13}}>
                <Text style={{color: COLORS.black}}>Kode Reservasi : </Text>
                <Text style={{color: COLORS.black, fontWeight: 'bold'}}>
                  CS201201
                </Text>
                <View style={styles.status}>
                  <Text style={{color: '#FFC107'}}>Reserved</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Transaction;

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
    paddingHorizontal: 15,
  },
  card: {
    marginTop: 10,
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
  },
  status: {
    right: 0,
    position: 'absolute',
    backgroundColor: '#F29C1F29',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});
