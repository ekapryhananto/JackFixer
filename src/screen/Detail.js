import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, DATA} from '../constant';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const Detail = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}>
        <Image
          source={require('../assets/image/gejayan.png')}
          style={{
            height: 316,
            width: '100%',
          }}
        />
        <View style={styles.body}>
          <View style={styles.isi}>
            <Text
              style={{fontSize: 20, fontWeight: 'bold', color: COLORS.black}}>
              Jack Repair Seturan
            </Text>
            <View style={{flexDirection: 'row', marginTop: 3}}>
              <Icon
                name="md-star"
                size={13}
                color="#FFC107"
                style={{marginRight: 2}}
              />
              <Icon
                name="md-star"
                size={13}
                color="#FFC107"
                style={{marginHorizontal: 2}}
              />
              <Icon
                name="md-star"
                size={13}
                color="#FFC107"
                style={{marginHorizontal: 2}}
              />
              <Icon
                name="md-star"
                size={13}
                color="#FFC107"
                style={{marginHorizontal: 2}}
              />
              <Icon
                name="md-star-outline"
                size={13}
                color="#FFC107"
                style={{marginLeft: 2}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 13,
                //   justifyContent: 'space-between',
              }}>
              <Icon
                name="ios-location-sharp"
                size={20}
                color={COLORS.primary}
              />
              <Text style={{width: 230, marginLeft: 5}}>
                Jalan Affandi (Gejayan), No.15, Sleman Yogyakarta, 55384
              </Text>
              <TouchableOpacity style={{right: 0, position: 'absolute'}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: COLORS.lightblue,
                  }}>
                  Lihat Maps
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 13,
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#11A84E1F',
                  width: 58,
                  height: 21,
                  borderRadius: 20,
                  alignItems: 'center',
                }}>
                <Text style={{fontWeight: 'bold', color: '#11A84E'}}>BUKA</Text>
              </View>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: COLORS.black,
                  marginLeft: 10,
                }}>
                09:00 - 21:00
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 1,
            width: '100%',
            backgroundColor: COLORS.silver,
            marginTop: 15,
          }}
        />
        <View style={styles.isi}>
          <Text style={{color: COLORS.black, fontSize: 18}}>Deskripsi</Text>
          <Text style={{paddingTop: 10}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
            gravida mattis arcu interdum lectus egestas scelerisque. Blandit
            porttitor diam viverra amet nulla sodales aliquet est. Donec enim
            turpis rhoncus quis integer. Ullamcorper morbi donec tristique
            condimentum ornare imperdiet facilisi pretium molestie.
          </Text>
          <Text style={{color: COLORS.black, fontSize: 16, marginTop: 10}}>
            Range Biaya
          </Text>
          <Text style={{fontSize: 16, marginTop: 5}}>Rp 20.000 - 80.000</Text>
          <TouchableOpacity
            style={styles.botton}
            onPress={() => navigation.navigate('FormPemesanan')}>
            <Text
              style={{color: COLORS.white, fontSize: 16, fontWeight: 'bold'}}>
              Repair Disini
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  body: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    marginTop: -20,
  },
  isi: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  botton: {
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    width: 335,
    borderRadius: 10,
    marginTop: 35,
  },
});
