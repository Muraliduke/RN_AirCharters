import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import style from '../styles';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Img from '../../components/ImageWithBlockText'
import { ScrollView } from 'react-native-gesture-handler';
import data from './mockTours';
import TourForm from './TourForm';

const styles = StyleSheet.create({
  container: style.container,
  whiteBg: {
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  img :{
    width: '90%'
  },
  optn: {
    fontWeight: 'bold',
    fontSize: 16
  },
  val: {
    fontSize: 16
  }
});

export default function Tours({navigation}) {
  return (
    <ScrollView >
        <Header />
        <View style={styles.whiteBg}>
            <View style={{marginTop: 100,marginBottom: 100}}>
              <Text style={styles.heading}>HELICOPTER TOURS ACROSS INDIA</Text>
            </View>

            <View style={{flex: 1, alignItems: 'center', backgroundColor: '#fff'}}>
              <Image style={styles.img} source={require('../../assets/tours_1.jpg')}/>
            </View>

            <View >
              <Img caption='lowerBtm' captionText='Chardham Tours'>
                  <Image
                      style={style.imgStyle}
                      source={require('../../assets/tours_2.jpg')}
                  /> 
              </Img>
            </View>

            <View >
              {data.map((d, i)=> (
                  <View style={{display: 'flex',flexWrap: 'wrap',  flexDirection: 'row', marginTop: 10,marginLeft: 15}}>
                    <Text style={styles.optn}>OPTION {i+1} -</Text>
                    <Text style={styles.val}>{d}</Text>
                  </View>
              ))}
            </View>

            <TourForm/>

        </View>

        <View style={styles.whiteBg}>
            <Footer/>
        </View>
    </ScrollView>
  );
}

