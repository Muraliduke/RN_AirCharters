import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import style from './styles';
import Header from '../components/header';

const styles = StyleSheet.create({
  container: style.container,
});

export default function Partners({ navigation }) {
  return (
    <>
      <Header />
      <View style={styles.container}>
        {/* <Bu
      tton onPress={() => navigation.navigate('BookNow')} title="Test" /> */}
        <Text>Partners Page</Text>
      </View>
    </>
  );
}

