import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import style from '../styles';
import Header from '../../components/header';
import Footer from '../../components/footer'
import Img from '../../components/ImageWithBlockText';
import PartnerForm from './PartnerForm'
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: style.container,
  captn: {
    color: 'rgba(0,0,0,.5)',
    fontSize: 13,
    margin: 25
  },
  contactUs: {
    fontSize: 28,
    marginTop: 70,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default function Partners({ navigation }) {
  return (
    <ScrollView>
      <Header />
      
      {/* Image Area  Starts*/}
      <View >
        <Img caption='lowerBtm' captionText='Partner With US'>
            <Image
                style={style.imgStyle}
                source={require('../../assets/partner_1.jpg')}
            /> 
        </Img>
      </View>
      {/* Image Area  Ends*/}

      {/* Image Captions  Starts*/}
      <View style={styles.container}>
        <Text style={styles.captn}>
          Air Charters India is one of the pioneers in Private Aviation Fleet Aggregator in South Asia. We invite Aircraft Owners & Operators to associate with us and provide you an opportunity to grow your business multi fold with access to a larger global clientele. We provide our partners with access to cutting edge technology such as app based instant bookings and empty leg fulfillment. Get in touch with us today !
        </Text>
      </View>
      {/* Image Captions  Ends*/}

      <View style={styles.container}>
        <Text style={styles.contactUs}>Contact Us</Text>
      </View>
      <PartnerForm/>
     
      <View style={{backgroundColor: '#fff'}}>
        <Footer/>
      </View>
    </ScrollView>
  );
}

