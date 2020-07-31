import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import style from './styles';

const styles = StyleSheet.create({
  container: style.container,
});

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      {/* <Button onPress={() => navigation.navigate('BookNow')} title="Test" /> */}
      <Text>Home Page</Text>
    </View>
  );
}

