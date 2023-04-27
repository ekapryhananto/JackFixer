import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constant';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const FAQ = ({navigation}) => {
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
          FAQ
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{paddingBottom: 20}}
        showsVerticalScrollIndicator={false}></ScrollView>
    </View>
  );
};

export default FAQ;

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
});
