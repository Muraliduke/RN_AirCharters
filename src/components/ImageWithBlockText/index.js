import React from 'react'
import { View, Text,Image, StyleSheet } from 'react-native'
import style from '../../screens/styles'
const styles = StyleSheet.create({
    container: style.container,
    caption: {
    // borderWidth: 2,
    padding: 5,
    backgroundColor: "white",
    // borderRadius: 4,
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 30
    },
    btmCaption: {
        position: 'absolute',
        bottom: 35,
        left: 35
    }
    
  });
export default function IWBT(props) {
    
    return (
        <View style={styles.container}>
            {props.children}
            <View style={[styles.caption, props.caption ? styles.btmCaption : null]}>
                <Text style={[styles.boldText]}>{props.captionText}</Text>
            </View>
      </View>
    )
} 

