import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Products from './screens/Products';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Recettes from './screens/Recettes';
import RecetteDetail from './screens/RecetteDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{
        headerShown: false,
      }}>
        <Stack.Screen name = 'Home' component = { Home }/>
        <Stack.Screen name = 'Products' component = {Products}/>
        <Stack.Screen name = 'Recettes' component = {Recettes}/>
        <Stack.Screen name = 'RecetteDetail' component = {RecetteDetail}/>
      </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texte2 : {
    flex : 1,
    backgroundColor : 'red',
  },
  title : {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor : 'white',
    fontWeight:'italic',
  },
  buttons : {
    flex : 2,
    backgroundColor : 'green',
  }
});
