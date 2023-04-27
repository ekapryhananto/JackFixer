import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../constant';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {CheckBox} from 'react-native-elements';
const FormPemesanan = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);

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
          Formulir Pemesanan
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}>
        <KeyboardAvoidingView enable keyboardVerticalOffset={-500}>
          <View style={{paddingHorizontal: 22}}>
            <Text style={styles.tittleInput}>Merek</Text>
            <TextInput
              placeholder="Masukan Merk Barang"
              style={styles.textInput}
            />
            <Text style={styles.tittleInput}>Warna</Text>
            <TextInput
              placeholder="Warna Barang, cth : Merah - Putih "
              style={styles.textInput}
            />
            <Text style={styles.tittleInput}>Ukuran</Text>
            <TextInput
              placeholder="Cth : S, M, L / 39,40"
              style={styles.textInput}
            />
            <Text style={styles.tittleInput}>Photo</Text>
            <TouchableOpacity style={styles.inputImg}>
              <Icon
                name="ios-camera-outline"
                size={22}
                color={COLORS.primary}
                style={{marginTop: 20}}
              />
              <Text style={{color: COLORS.primary, paddingTop: 10}}>
                Add Photo
              </Text>
            </TouchableOpacity>
            <CheckBox
              title="Ganti Sol Sepatu"
              checked={isSelected}
              onPress={() => setSelection(!isSelected)}
              checkedColor={COLORS.primary}
              // style={styles.checkBox}
            />
            <CheckBox
              title="Jahit Sepatu"
              checked={isSelected}
              onPress={() => setSelection(!isSelected)}
              checkedColor={COLORS.primary}
              // style={styles.checkBox}
            />
            <CheckBox
              title="Repaint Sepatu"
              checked={isSelected}
              onPress={() => setSelection(!isSelected)}
              checkedColor={COLORS.primary}
              // style={styles.checkBox}
            />
            <CheckBox
              title="Cuci Sepatu"
              checked={isSelected}
              onPress={() => setSelection(!isSelected)}
              checkedColor={COLORS.primary}
              // style={styles.checkBox}
            />
            <Text style={styles.tittleInput}>Catatan</Text>
            <TextInput
              placeholder="Cth : ingin ganti sol baru"
              style={styles.catatan}
            />
            <TouchableOpacity
              style={styles.bottomconfirm}
              onPress={() => navigation.navigate('Keranjang')}>
              <Text style={styles.textbottom}>Masukkan Keranjang</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default FormPemesanan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  header: {
    height: 56,
    width: '100%',
    backgroundColor: COLORS.white,
    // justifyContent: 'center',
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
  tittleInput: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 25,
  },
  textInput: {
    backgroundColor: COLORS.silver,
    // position: 'absolute',
    width: '100%',
    height: 45,
    marginTop: 11,
    paddingLeft: 10,
    borderRadius: 10,
  },
  inputImg: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    height: 84,
    width: 84,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 14,
    marginBottom: 40,
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  catatan: {
    backgroundColor: COLORS.silver,
    // position: 'absolute',
    width: '100%',
    height: 100,
    marginTop: 11,
    paddingLeft: 10,
    borderRadius: 10,
  },
  bottomconfirm: {
    marginTop: 30,
    backgroundColor: COLORS.primary,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 15,
  },
  textbottom: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
