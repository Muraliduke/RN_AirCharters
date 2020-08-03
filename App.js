import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/Home';
import BookNowScreen from './src/screens/BookNow';
import ContactScreen from './src/screens/Contact';
import FleetScreen from './src/screens/Fleet';
import PartnerScreen from './src/screens/Partner';
import TourScreen from './src/screens/Tours';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const Drawer = createDrawerNavigator();
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#000',
    accent: '#f1c40f',
  },
};
export default function App() {
  return (
    <>
    <PaperProvider theme={theme}>
      <NavigationContainer> 
        <Drawer.Navigator
          drawerStyle={{
            width: '85%',
            paddingTop: 50
          }}
          drawerContentOptions={{
            activeTintColor: "black",
            inactiveTintColor: "gray",
            itemStyle: {
              backgroundColor: "transparent",
              width: '100%'
            },
            labelStyle: {
              fontSize: 22,
            }
          }}
          initialRouteName="HOME">
          <Drawer.Screen name="HOME    " component={HomeScreen} />
          <Drawer.Screen name="BOOK NOW       " component={BookNowScreen} />
          <Drawer.Screen name="PARTNER WITH US   " component={PartnerScreen} />
          <Drawer.Screen name="HELI TOURS  " component={TourScreen} />
          <Drawer.Screen name="FLEET  " component={FleetScreen} />
          <Drawer.Screen name="CONTACT US  " component={ContactScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
    </>
  );
}
