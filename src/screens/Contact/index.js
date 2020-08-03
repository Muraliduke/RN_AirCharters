import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import style from '../styles';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { ScrollView } from 'react-native-gesture-handler';
import ContactForm from './ContactForm';
import Address from '../../components/Address'

const styles = StyleSheet.create({
  container: style.container,
  ffStans: {
    fontFamily: 'JosefinSans-ExtraLight'
  }
});

export default function Contact({ navigation }) {
  return (
    <>
      <Header />
        <ScrollView>
              <View style={{marginTop: 100, marginLeft: 15}}>
                  <Text style={[styles.ffStans , {fontSize: 32, display: 'flex', flexDirection: 'row', flex: 1}]}>Contacts Us</Text>

              </View>


              <ContactForm/>

              <Address/>

          <Footer/>

        </ScrollView>
    </>
  );
}

