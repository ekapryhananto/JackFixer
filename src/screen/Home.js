import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  Button,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {COLORS, DATA} from '../constant';

const Home = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);

  const SliderItem = ({item}) => {
    return (
      <TouchableOpacity
        // style={styles.card}
        onPress={() => navigation.navigate('Detail')}>
        <View style={styles.card}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              height: 135,
              // backgroundColor: 'red',
            }}>
            <Image
              source={item.img}
              resizeMode="contain"
              style={{
                height: '100%',
                width: 100,
                borderRadius: 15,
                // width: 100,
                // resizeMode: 'contain',
              }}
            />
            <View style={{justifyContent: 'center', marginHorizontal: 15}}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="md-star" size={10} color="#FFC107" />
                <Icon name="md-star" size={10} color="#FFC107" />
                <Icon name="md-star" size={10} color="#FFC107" />
                <Icon name="md-star" size={10} color="#FFC107" />
                <Icon name="md-star-outline" size={10} color="#FFC107" />
              </View>
              <Text> {item.rating}</Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  color: COLORS.black,
                  paddingTop: 5,
                }}>
                {item.title}
              </Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{paddingTop: 5}}>
                {item.address}
              </Text>
              <View
                style={{
                  marginTop: 10,
                  backgroundColor:
                    item.status == 'BUKA' ? '#11A84E1F' : '#E64C3C33',
                  width: 58,
                  height: 21,
                  borderRadius: 20,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: item.status == 'BUKA' ? '#11A84E' : '#EA3D3D',
                  }}>
                  {item.status}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        <View style={{paddingHorizontal: 22, height: 290}}>
          <View style={styles.heading}>
            <Image
              style={{width: 45, height: 45, resizeMode: 'contain'}}
              source={require('../assets/image/fotoprofil.png')}
            />
            <Icon
              name="cart"
              size={25}
              color="black"
              style={styles.iconKeranjang}
              onPress={() => navigation.navigate('Keranjang')}
            />
          </View>
          <Text style={{color: COLORS.darkblue, fontSize: 15}}>
            Hello, Agil!
          </Text>
          <Text style={{color: COLORS.black, fontSize: 25, fontWeight: 'bold'}}>
            Ingin merawat dan perbaiki sepatumu? cari disini
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'space-between',
            }}>
            <TextInput style={styles.search}>
              <Icon name="ios-search" size={25} style={{paddingRight: 20}} />
            </TextInput>
            <Modal
              animationType={'slide'}
              transparent={true}
              visible={showModal}
              onRequestClose={() => {
                console.log('Modal has been closed.');
              }}>
              {/*All views of Modal*/}
              {/*Animation can be slide, slide, none*/}
              <View style={styles.modal}>
                <Text>Filter Search</Text>
                <Button
                  title="OKE"
                  onPress={() => {
                    setShowModal(!showModal);
                  }}
                />
              </View>
            </Modal>
            <TouchableOpacity
              style={styles.filter}
              onPress={() => {
                setShowModal(!showModal);
              }}>
              <Icon name="filter" size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.downpage}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 17,
            }}>
            <View style={styles.kategori}>
              <Image
                source={require('../assets/image/Sepatu.png')}
                style={{height: 45, width: 45}}
              />
              <Text style={{color: COLORS.primary, fontWeight: 'bold'}}>
                Sepatu
              </Text>
            </View>
            <View style={styles.kategori}>
              <Image
                source={require('../assets/image/Jaket.png')}
                style={{height: 45, width: 45}}
              />
              <Text style={{color: COLORS.primary, fontWeight: 'bold'}}>
                Jaket
              </Text>
            </View>
            <View style={styles.kategori}>
              <Image
                source={require('../assets/image/Tas.png')}
                style={{height: 45, width: 45}}
              />
              <Text style={{color: COLORS.primary, fontWeight: 'bold'}}>
                Tas
              </Text>
            </View>
          </View>
          <View style={styles.rekomen}>
            <Text
              style={{fontSize: 16, fontWeight: 'bold', color: COLORS.black}}>
              Rekomendasi Terdekat
            </Text>
            <Text
              style={{fontSize: 16, fontWeight: 'bold', color: COLORS.primary}}>
              View All
            </Text>
          </View>
          {/* <TouchableOpacity onPress={() => navigation.navigate('Detail')}> */}
          <FlatList
            data={DATA}
            renderItem={({item}) => <SliderItem item={item} />}
            // horizontal
            pagingEnabled
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            style={{width: '100%', height: '100%'}}
          />
          {/* </TouchableOpacity> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  heading: {
    flexDirection: 'row',
    marginTop: 56,
    alignItems: 'center',
    // paddingHorizontal: 22,
  },
  iconKeranjang: {
    right: 0,
    position: 'absolute',
  },
  search: {
    width: '100%',
    backgroundColor: COLORS.silver,
    borderRadius: 10,
    width: 275,
  },
  filter: {
    backgroundColor: COLORS.silver,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  modal: {
    width: '80%',
    height: 300,
    backgroundColor: COLORS.silver,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 80,
    marginHorizontal: 40,
  },
  downpage: {
    backgroundColor: COLORS.silver,
    height: '100%',
    width: '100%',
    paddingHorizontal: 22,
  },
  kategori: {
    height: 95,
    width: 95,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  rekomen: {
    marginTop: 27,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: COLORS.white,
    height: 133,
    borderRadius: 15,
    marginTop: 10,
  },
});
