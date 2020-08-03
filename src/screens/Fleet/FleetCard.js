import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Img from '../../components/ImageWithBlockText';
// import style from '../styles'
const styles = StyleSheet.create({
    fleet: {
        color: 'rgba(112, 112, 112, 0.5)',
        fontSize: 13,
        fontWeight: 'bold',
        marginTop: 10,

    }
  });
export default function FleetCard(props) {
    return (
        <View style={{backgroundColor: '#fff'}}>
            {props.data.imgDetails}
            <View style={{marginLeft: 35}}>
            <Text style={styles.fleet}>Max Seating : {props.data.seating}</Text>

            <Text style={styles.fleet}>Range : {props.data.range}</Text>

            <Text style={styles.fleet}>Speed : {props.data.speed}</Text>
            </View>
        </View>
    )
}
