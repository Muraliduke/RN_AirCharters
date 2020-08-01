import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import style from './styles'
import Header from '../components/header';

const styles = StyleSheet.create({
  container: style.container,
});

export default function BookNow({ navigation }) {
  return (
    <>
      <Header />
      <View style={styles.container}>
        {/* <Button onPress={() => navigation.navigate('Home')} title="Go back home" /> */}
        <Text>Book Now Page</Text>
      </View>
    </>
  );
}
