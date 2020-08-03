import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as cardStyles from './styles'

export default function PlainCard(props) {
  const variant = props.variant || "imageCard"
  const styles = StyleSheet.create(cardStyles[variant])
  return (
    <View style={styles.root}>
      {
        props.image && <Image style={styles.image} source={props.image} />
      }
      {props.title && <Text style={styles.title} className="cardTitle">{props.title}</Text>}
      {
        props.textContent && props.textContent.map(content => (
          <Text key={content.text} style={styles[(content.textStyle || '') + 'text']} className={"cardContent " + content.textStyle}>{content.text}</Text>
        ))
      }
      {
        props.actionText && <View style={styles.actionWrapper}>
          <TouchableOpacity style={styles.action} className="cardAction"><Text style={styles.actionText}>{props.actionText}</Text></TouchableOpacity>
        </View>
      }
    </View >
  )
}