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
import HomeImage from './../assets/home_port_1.jpg';

const styles = StyleSheet.create({
  container: style.container,
  content: {
    backgroundColor: "#fff"
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
});

export default function Home({ navigation }) {
  const [height, setHeight] = React.useState(700)
  console.log(justAClickAway)
  return (
    <>
      {/* <Header toggleDrawer={navigation.toggleDrawer} /> */}
      {/* <ScrollView >
        <View style={styles.content}>
          <ParallaxCard {...homeHeroCard} />
          <PlainCard {...justAClickAway} />
        </View>
      </ScrollView > */}
      <ParallaxScrollView
        backgroundColor="transparent"
        foregroundClolor="white"
        backgroundScrollSpeed={5}
        parallaxHeaderHeight={650}
        renderForeground={() => (
          <>
            <Text style={styles.title} className="cardTitle">FLY{"\n"}WHENEVER,{"\n"}WHEREVER </Text>
          </>
        )}
        renderFixedHeader={() => <Header />}
        fadeOutForeground={false}
        renderBackground={() => (
          <Image style={{ display: 'flex', width: '100%', height: '100%' }} resizeMode="cover" source={HomeImage} />
        )}>
        <PlainCard {...justAClickAway} />
      
      </ParallaxScrollView>
      
      {/* <ScrollView >

      </ScrollView> */}

    </>
  );
}

