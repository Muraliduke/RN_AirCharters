import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    top: 0,
    left: 0,
    zIndex: 10000,
    width: '100%',
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: '#fafafa'
  },
  headerText: {
    fontSize: 18,
    display: "flex",
    textAlign: "center"
  }
})

export default function Header() {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Icon
          name="bars"
          onPress={() => { }}
        >
        </Icon>
        <Text style={styles.headerText}>AIR CHARTERS INDIA</Text>
      </View>
    </SafeAreaView>
  )
}