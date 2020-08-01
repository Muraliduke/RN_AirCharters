import React from 'react';
import { View, Button, Text, StyleSheet, Image, ListView, EventEmitter } from 'react-native';
import style from './styles';
import Header from '../components/header';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import image from './../assets/home_1.jpg'
import Animated from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlainCard from '../components/cards/PlainCard';
import { justAClickAway, homeHeroCard } from '../mockData/cardData';
import { ParallaxCard } from '../components/cards';
const styles = StyleSheet.create({
  container: style.container,
  content: {
    backgroundColor: "#fff"
  }
});

export default function Home({ navigation }) {
  const [height, setHeight] = React.useState(700)
  console.log(justAClickAway)
  return (
    <>
      <Header toggleDrawer={navigation.toggleDrawer} />
      <ScrollView >
        <View style={styles.content}>
          <ParallaxCard {...homeHeroCard} />
          <PlainCard {...justAClickAway} />
        </View>
      </ScrollView >
    </>
  );
}

