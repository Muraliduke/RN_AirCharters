import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import style from '../styles';
import Header from '../../components/header';
import Footer from '../../components/footer'
import { ScrollView } from 'react-native-gesture-handler';
import FleetCard from './FleetCard';
import mockData from './mockData'

const styles = StyleSheet.create({
  container: style.container,
});

export default function Fleet({ navigation }) {
  return (
    <ScrollView>
      <Header />
      <View style={styles.container}>
        {/* <Button onPress={() => navigation.navigate('BookNow')} title="Test" /> */}
        {/* <Text>Fleet Page</Text> */}
        <Text style={{fontSize: 32,color:'rgb(112, 112, 112)',marginTop: 100}}>A jet for every mission</Text>
      </View>
      {
        mockData.map((data, i) => (
          <FleetCard 
            key={i} 
            data={data}/>
        ))
      }
      {/* <FleetCard/> */}
      
      <Footer/>
    </ScrollView>
  );
}

