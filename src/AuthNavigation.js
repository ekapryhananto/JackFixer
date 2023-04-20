import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screen/Login';
import Register from './screen/Register';
import Home from './screen/Home';
import BottomNav from './BottomNav';
import Detail from './screen/Detail';
import FormPemesanan from './screen/FormPemesanan';

const Stack = createStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={BottomNav} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="FormPemesanan" component={FormPemesanan} />
    </Stack.Navigator>
  );
}
