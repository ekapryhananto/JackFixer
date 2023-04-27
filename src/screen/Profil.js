import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../constant';
import Logout from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {auth} from '../../firebase';

const Profil = ({navigation}) => {
  const handleLogOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('Login');
      })
      .catch(error => alert(error.message));
  };
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{paddingBottom: 20}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image
            source={require('../assets/image/fotoprofil.png')}
            style={{height: 95, width: 95}}
          />
          <Text
            style={{fontSize: 30, fontWeight: '700', color: COLORS.darkblue}}>
            Agil Bani
          </Text>
          <Text>{auth.currentUser.email}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Editprofil')}>
            <View style={styles.buttonedit}>
              <Text style={{color: COLORS.darkblue, fontWeight: 'bold'}}>
                Edit
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <TouchableOpacity>
            <Text style={styles.textBody}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textBody}>Terms & Condition</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('FAQ')}>
            <Text style={styles.textBody}>FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textBody}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textBody}>Setting</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleLogOut}>
          <View style={styles.logout}>
            <Logout
              name="logout"
              size={22}
              color="#EA3D3D"
              style={{transform: [{rotateY: '180deg'}]}}
            />
            <Text
              style={{
                color: '#EA3D3D',
                fontSize: 20,
                fontWeight: '500',
                marginLeft: 5,
              }}>
              Log out
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Profil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.silver,
  },
  header: {
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 100,
    paddingVertical: 50,
  },
  body: {
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    marginTop: 10,
    paddingHorizontal: 50,
  },
  buttonedit: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F8FF',
    height: 27,
    width: 64,
    borderRadius: 10,
    marginTop: 20,
  },
  textBody: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: '500',
    padding: 18,
  },
  logout: {
    backgroundColor: COLORS.white,
    marginTop: 15,
    marginHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
