import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screen/Login';
import Register from './screen/Register';
import Home from './screen/Home';
import BottomNav from './BottomNav';
import Detail from './screen/Detail';
import FormPemesanan from './screen/FormPemesanan';
import Keranjang from './screen/Keranjang';
import Summary from './screen/Summary';
import ConfirmReservasi from './screen/ConfirmReservasi';
import KodeReservasi from './screen/KodeReservasi';
import Editprofil from './screen/Editprofil';
import FAQ from './screen/FAQ';

const Stack = createStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={BottomNav} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="FormPemesanan" component={FormPemesanan} />
      <Stack.Screen name="Keranjang" component={Keranjang} />
      <Stack.Screen name="Summary" component={Summary} />
      <Stack.Screen name="ConfirmReservasi" component={ConfirmReservasi} />
      <Stack.Screen name="KodeReservasi" component={KodeReservasi} />
      <Stack.Screen name="Editprofil" component={Editprofil} />
      <Stack.Screen name="FAQ" component={FAQ} />
    </Stack.Navigator>
  );
}
