import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Products from './screens/Products';
import Restaurants from './screens/Restaurants';
import ProductsList from './screens/ProductsList';
import RestaurantType from './screens/RestaurantType';
import Poissons from './screens/Poissons';
import Coquillages from './screens/Coquillages';
import Crustaces from './screens/Crustaces';
import Recettes from './screens/Recettes';
import RecetteDetail from './screens/RecetteDetail';
import Contact from './screens/Contact';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Bateau from './screens/Bateau';

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions = {{
        headerShown: false,
      }}>
        <Stack.Screen name  = 'Home' component = {Home}/>
        <Stack.Screen name  = 'Contact' component = {Contact}/>
        <Stack.Screen name  = 'Products' component = {Products}/>
        <Stack.Screen name  = 'Restaurants' component = {Restaurants}/>
        <Stack.Screen name  = 'ProductsList' component = {ProductsList}/>
        <Stack.Screen name  = 'RestaurantType' component = {RestaurantType}/>
        <Stack.Screen name  = 'RecetteDetail' component = {RecetteDetail}/>
        <Stack.Screen name  = 'Poissons' component = {Poissons}/>
        <Stack.Screen name  = 'Coquillages' component = {Coquillages}/>
        <Stack.Screen name  = 'Crustaces' component = {Crustaces}/>
        <Stack.Screen name  = 'Bateau' component = {Bateau}/>
        <Stack.Screen name  = 'Recettes' component = {Recettes}/>
      </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
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
    fontWeight: 'italic'
  },
  buttons : {
    flex : 2,
    backgroundColor : 'green',
  }
});
