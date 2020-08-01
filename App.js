import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/Home';
import BookNowScreen from './src/screens/BookNow';
import ContactScreen from './src/screens/Contact';
import FleetScreen from './src/screens/Fleet';
import PartnerScreen from './src/screens/Partner';
import TourScreen from './src/screens/Tours';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home " component={HomeScreen} />
          <Drawer.Screen name="BookNow  " component={BookNowScreen} />
          <Drawer.Screen name="Contacts  " component={ContactScreen} />
          <Drawer.Screen name="Fleets  " component={FleetScreen} />
          <Drawer.Screen name="Partner  " component={PartnerScreen} />
          <Drawer.Screen name="Tours  " component={TourScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
