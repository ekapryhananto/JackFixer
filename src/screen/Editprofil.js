import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../constant';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Pen from 'react-native-vector-icons/dist/FontAwesome5';
import {auth} from '../../firebase';

const Editprofil = ({navigation}) => {
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
          Edit Profil
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{paddingBottom: 20}}
        showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView
          behavior="padding"
          enabled
          keyboardVerticalOffset={-500}>
          <View style={styles.fotoprofil}>
            <Image
              source={require('../assets/image/fotoprofil.png')}
              style={{height: 95, width: 95}}
            />
            <TouchableOpacity style={{flexDirection: 'row', marginTop: 20}}>
              <Pen name="pen" size={20} color="#3A4BE0" />
              <Text style={{fontSize: 18, color: '#3A4BE0', marginLeft: 8}}>
                Edit Foto
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.form}>
            <Text style={{color: 'red', fontWeight: 'bold', marginTop: 15}}>
              Nama
            </Text>
            <TextInput
              placeholder="Agil Bani"
              // value={nama}
              // onChangeText={text => setNama(text)}
              style={styles.textinput}
            />
            <Text style={{color: 'red', fontWeight: 'bold', marginTop: 15}}>
              Email
            </Text>
            <TextInput
              placeholder={auth.currentUser.email}
              keyboardType="email-address"
              // value={auth.currentUser.email}
              // onChangeText={text => setEmail(text)}
              style={styles.textinput}
            />
            <Text style={{color: 'red', fontWeight: 'bold', marginTop: 15}}>
              No hp
            </Text>
            <TextInput
              placeholder="08124564879"
              // value={password}
              // onChangeText={text => setPassword(text)}
              secureTextEntry={true}
              style={styles.textinput}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 22,
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <TouchableOpacity
          style={styles.bottomconfirm}
          onPress={() => navigation.goBack()}>
          <Text style={styles.textbottom}>Simpan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Editprofil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
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
  fotoprofil: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 31,
  },
  form: {
    paddingHorizontal: 22,
    paddingTop: 55,
  },
  textinput: {
    marginTop: 15,
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#F6F8FF',
    paddingHorizontal: 10,
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
  },
  textbottom: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
