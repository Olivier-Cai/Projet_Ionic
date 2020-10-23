import React from 'react';
import { StyleSheet } from 'react-native';
import Home from './screens/Home';
import Products from './screens/Products';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Recettes from './screens/Recettes';
import RecetteDetail from './screens/RecetteDetail';
import Contact from './screens/Contact';
import Coquillages from './screens/Coquillages';
import Crustaces from './screens/Crustaces';
import Poissons from './screens/Poissons';
import Bateaux from './screens/Bateaux';
import BateauDetail from './screens/BateauDetail';
import Restaurants from './screens/Restaurants';
import RestaurantDetail from './screens/RestaurantDetail';
import ProductList from './screens/ProductsLists';

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
        <Stack.Screen name = 'Contact' component = {Contact}/>
        <Stack.Screen name = 'Bateaux' component = {Bateaux}/>
        <Stack.Screen name = 'BateauDetail' component = {BateauDetail}/>
        <Stack.Screen name = 'Restaurants' component = {Restaurants}/>
        <Stack.Screen name = 'RestaurantDetail' component = {RestaurantDetail}/>
        <Stack.Screen name = 'Coquillages' component = {Coquillages}/>
        <Stack.Screen name = 'Crustaces' component = {Crustaces}/>
        <Stack.Screen name = 'Poissons' component = {Poissons}/>
        <Stack.Screen name = 'ProductsLists' component = {ProductList}/>

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
