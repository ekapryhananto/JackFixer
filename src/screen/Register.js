import {
  Dimensions,
  Image,
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
import {auth} from '../../firebase';

const Register = ({navigation, route}) => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Register for ', user.email);
      })
      .catch(error => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        {/* component yang digunakan untuk mengatur agar keyboard tidak menutupi */}
        <KeyboardAvoidingView
          behavior="padding"
          enabled
          keyboardVerticalOffset={-500}>
          <Image
            source={require('../assets/image/imagesign.png')}
            style={styles.imageback}
          />
          <View style={styles.form}>
            <Text style={styles.tittle}>Welcome,</Text>
            <Text style={styles.tittle}>Please Register</Text>
            <Text style={{color: 'red', fontWeight: 'bold', marginTop: 15}}>
              Nama
            </Text>
            <TextInput
              placeholder="Enter Your Name"
              value={nama}
              onChangeText={text => setNama(text)}
              style={styles.textinput}
            />
            <Text style={{color: 'red', fontWeight: 'bold', marginTop: 15}}>
              Email
            </Text>
            <TextInput
              placeholder="Youremail@mail.com"
              keyboardType="email-address"
              value={email}
              onChangeText={text => setEmail(text)}
              style={styles.textinput}
            />
            <Text style={{color: 'red', fontWeight: 'bold', marginTop: 15}}>
              Password
            </Text>
            <TextInput
              placeholder="Enter password"
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
              style={styles.textinput}
            />
            <Text style={{color: 'red', fontWeight: 'bold', marginTop: 15}}>
              Confirm Password
            </Text>
            <TextInput
              placeholder="Re-entered password"
              secureTextEntry={true}
              style={styles.textinput}
            />
            <View style={styles.bottomform}>
              <TouchableOpacity>
                <Image
                  source={require('../assets/image/gmail.png')}
                  style={{width: 20, height: 20, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../assets/image/fb.png')}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: 'contain',
                    marginHorizontal: 15,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../assets/image/twitter.png')}
                  style={{width: 20, height: 20, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.bottomconfirm}
              onPress={handleRegister}>
              <Text style={styles.textbottom}>Register</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
              <Text style={styles.textfooter}>Have An Account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.textregister}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imageback: {
    width: Dimensions.get('window').width, //atur agar lebar gambar adalah selebar layar device
    height: 317,
  },
  form: {
    width: '100%',
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    paddingHorizontal: 20,
    paddingTop: 38,
    marginTop: -20,
  },
  tittle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  textinput: {
    marginTop: 15,
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#F6F8FF',
    paddingHorizontal: 10,
  },
  bottomform: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  Registersos: {
    flexDirection: 'row',
    // alignItems: 'center',
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
  footer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
  textfooter: {
    fontSize: 12,
    color: '#717171',
  },
  textregister: {
    ontSize: 14,
    color: COLORS.primary,
    marginLeft: 5,
  },
});
