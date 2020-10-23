import React from 'react';
import { Text, View, StyleSheet,ImageBackground, ImageStore } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import Buttons from '../components/Buttons';
import images from '../constants/Images';

export default function Home(props){
    return (
        <View style={styles.container}>
          <BackgroundImage/>
          <View>
            <Text style={styles.title}>Le bateau de Thibault</Text>
          </View>
          <View>
            <Text style = {styles.description}>Vente en direct de notre bateau{'\n'}Produits selon la saison, Livraisons sur Paris</Text>
            <Text style = {styles.telephone}>06.63.99.99.78</Text>
            <Text style = {styles.mail}>lebateaudethilbaul@gmail.com</Text>
            <Text style = {styles.facebook}>www.facebook.com/lebateaudethibault</Text>
          </View>
          <View style={{ flex: 2, flexDirection: 'row', paddingTop:100}}>
            <Buttons text = 'Produits et Promotions'
              image = {images.poisson.uri}
              screen = 'Products'
              navigation = {props.navigation}/>
          </View>
          <View style={{ flex: 2, flexDirection: 'row'}}>
            <Buttons text = 'Bateaux'
              image = {images.ancre.uri}
              screen = 'Bateaux'
              navigation = {props.navigation}/> 
            <Buttons text = 'Restaurants'
              image = {images.restaurant.uri}
              screen = 'Restaurants'
              navigation = {props.navigation}/>
          </View>
          <View style={{ flex: 2, flexDirection: 'row', paddingBottom:50}}>
            <Buttons text = 'Recettes'
              image = {images.recette.uri}
              screen = 'Recettes'
              navigation = {props.navigation}/>
            <Buttons text = 'Contact'
              image = {images.tourteau.uri}
              screen = 'Contact'
              navigation = {props.navigation}/> 
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex : 1,
      textAlign: 'center',
      flexDirection: 'column'
    },
    description : {
      flex : 1,
      paddingTop: 30,
      fontFamily: 'Noteworthy',
      fontWeight: 'bold',
      fontSize: 12,
      fontStyle: 'italic',
    },
    telephone : {
      flex : 1,
      fontSize:12,
      fontFamily: 'Noteworthy'
    },
    mail : {
      flex : 1,
      fontSize:12,
      fontFamily: 'Noteworthy',
      fontStyle: 'italic'
    },
    facebook : {
      flex : 1,
      fontSize:12,
      fontFamily: 'Noteworthy',
      fontStyle: 'italic'
    },
    title : {
      flex: 1,
      marginTop: 40,
      fontSize: 30,
      justifyContent: 'flex-start',
      color:'#FFFFFF',
      fontFamily: 'Snell Roundhand',
      fontWeight: 'bold',
      fontStyle: 'italic'
    }
  });


  
