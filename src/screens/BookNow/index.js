import React from 'react';
import {ScrollView,View, Text, Button, Image, StyleSheet} from 'react-native';
import style from '../styles'
import Header from '../../components/header';
import BookForm from './BookForm';
import Footer from '../../components/footer';
import Address from '../../components/Address';

const styles = StyleSheet.create({
  container: style.container,
  imgStyle: {
    width: '90%',
    paddingTop: 100,
    marginTop: 100,
    marginBottom: 40
  },
  bookNw: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'PTSans-Bold',
    fontSize: 52
  },
  center: {
    textAlign: 'center',
  },
  content: {
    padding: 10
  },
  ff: {fontFamily: 'sans-serif'},
  req: {
    color: 'rgba(112,112,112,.5)'
  },
  
});


export default function  BookNow({navigation}) {
  return (
    <ScrollView >
      <Header />
      {/* <Button onPress={() => navigation.navigate('Home')} title="Go back home" /> */}
      {/* <Text>Book Now Page</Text> */}
      <View style={styles.container}>
        <Image
          style={styles.imgStyle}
          source={require('../../assets/book_1.jpg')}
        />
      </View>
      
      <View style={{backgroundColor: '#fff'}}>
            <View style={styles.container}>
              <Text style={[styles.bookNw,styles.ff]}>Book Now</Text>
              <Text style={[styles.center,styles.ff, styles.req]}>
                Alternatively email us your requirements to
              </Text>
              <Text style={[styles.center,styles.ff, styles.req]}>
                  fly@airchartersindia.in
              </Text>
            </View>
            
            <View style={{backgroundColor: '#fff'}}>
                <View style={{paddingLeft: 25 ,marginTop: 100}}>
                  <Text>Route</Text>
                </View>
                
                <View >
                  <BookForm/>
                </View>
            </View>

            <View style={styles.container}>
              <Text style={[ styles.content,styles.ff]}>If you are looking to book flights within the next 24 hours kindly get in touch with us directly, we will do our very best to assist you with your requirements.
              </Text>
              <Text style={[styles.content, styles.ff, {fontFamily: 'JosefinSans-ExtraLight'}]}>
                Please Note:- International Flights are subject to approvals from the airspace of over flying countries and availability of customs at the destination air field. 
              </Text>
            </View>

            <View style={styles.container}>
              <Image
                style={styles.imgStyle}
                source={require('../../assets/book_2.jpg')}
              />
            </View>

            <View style={styles.container}>
              <Text style={[styles.center, styles.content]}>
              (c) AIR CHARTERS INDIA 2020
              </Text>
              <Text style={[styles.center, styles.content, styles.ff, {fontFamily:'JosefinSans-ExtraLight'}]}>  AIR CHARTERS INDIA IS A WHOLLY OWNED SUBSIDIARY OF AIKAA VENTURES PVT LTD 
              </Text>
            </View>

            <Address/>
      </View>

      <Footer/>

    </ScrollView>

    
  );
}
