import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createNew } from 'typescript';

const styles = StyleSheet.create({
  root: {
    padding: 10
  },
  title: {
    textAlign: "center",
    fontFamily: "sans serif",
    fontSize: 24,
    marginVertical: 20
  },
  content: {
    fontFamily: "sans serif",
    textAlign: "center",
    marginBottom: 20
  },
  action: {
    width: 150,
    display: 'flex',
    flexBasis: 'auto',
    margin: 'auto',
    position: "relative",
    borderColor: 'gray',
    borderWidth: 2,
    padding: 20,
    backgroundColor: "#fff"
  },
  actionWrapper: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  actionText: {
    textAlign: "center",
    width: '100%'
  }
})

export default function PlainCard(props) {
  return (
    <View style={styles.root} className="plainCard">
      <Text style={styles.title} className="cardTitle">{props.title}</Text>
      {
        props.textContent && props.textContent.map(content => (
          <Text key={content.text} style={styles.content} className={"cardContent " + (content.className || '')}>{content.text}</Text>
        ))
      }
      <View style={styles.actionWrapper}>
        <TouchableOpacity style={styles.action} className="cardAction"><Text style={styles.actionText}>{props.actionText}</Text></TouchableOpacity>
      </View>
    </View >
  )
}