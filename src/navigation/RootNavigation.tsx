import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import PlaceToVisitDetails from '../screens/PlaceToVisitDetails';
import Gallery from '../screens/Gallery';

export type HomeStackParamList = {
  Home: undefined;
  Details: {item: any};
  Gallery: {images: string[]};
};
const Stack = createNativeStackNavigator<HomeStackParamList>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={PlaceToVisitDetails} />
        <Stack.Screen name="Gallery" component={Gallery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
