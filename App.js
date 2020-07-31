import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/Home';
import BookNowScreen from './screens/BookNow';
import ContactScreen from './screens/Contact';
import FleetScreen from './screens/Fleet';
import PartnerScreen from './screens/Partner';
import TourScreen from './screens/Tours';

import {View, Text} from 'react-native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <View>
        <Text>AIR CHARTERS INDIA</Text>
      </View>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="BookNow" component={BookNowScreen} />
          <Drawer.Screen name="Contacts" component={ContactScreen} />
          <Drawer.Screen name="Fleets" component={FleetScreen} />
          <Drawer.Screen name="Partner" component={PartnerScreen} />
          <Drawer.Screen name="Tours" component={TourScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
