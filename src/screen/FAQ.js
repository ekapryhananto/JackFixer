import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, DATAFAQ} from '../constant';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const FAQ = ({navigation}) => {
  const DataFAQ = ({item}) => {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
      <View style={styles.faq}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: COLORS.black, fontSize: 18, fontWeight: '500'}}>
            {item.question}
          </Text>
          <TouchableOpacity onPress={() => setShowAnswer(!showAnswer)}>
            <Icon name="chevron-down" size={22} color={COLORS.black} />
          </TouchableOpacity>
        </View>
        {showAnswer && (
          <View style={{paddingVertical: 10}}>
            <Text style={{fontSize: 18, fontWeight: '500'}}>{item.answer}</Text>
          </View>
        )}
      </View>
    );
  };

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
        showsVerticalScrollIndicator={false}>
        <FlatList
          data={DATAFAQ}
          renderItem={({item}) => <DataFAQ item={item} />}
        />
      </ScrollView>
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
  faq: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
    paddingVertical: 15,
    margin: 10,
  },
});
