import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import style from './styles';
import Header from '../components/header';

const styles = StyleSheet.create({
  container: style.container,
});

export default function Tours({navigation}) {
  return (
    <View style={styles.container}>
      <Header />
      {/* <Button onPress={() => navigation.navigate('BookNow')} title="Test" /> */}
      <Text>Tours Page</Text>
    </View>
  );
}

