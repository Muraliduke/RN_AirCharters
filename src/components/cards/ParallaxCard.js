import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { block } from 'react-native-reanimated'
import { isWhiteSpaceLike } from 'typescript'

const styles = StyleSheet.create({
  root: {
    position: "relative"
  },
  imageWrapper: {

  },
  image: {
    display: "flex",
    width: "100%",
  },
  title: {
    position: "absolute",
    bottom: 200,
    right: 0,
    left: 0,
    display: "flex",
    textAlign: "center",
    color: "#fff",
    marginHorizontal: 'auto',
    fontSize: 30,
    padding: 30,
    lineHeight: 60,
    zIndex: 10
  }
})
export default function ParallaxCard(props) {
  return (
    <View style={styles.root} className="plainCard">
      <Text style={styles.title} className="cardTitle">{props.title}</Text>
      <View style={styles.imageWrapper}>
        <Image resizeMode="cover" style={styles.image} source={props.image} />
      </View>
    </View >
  )
}