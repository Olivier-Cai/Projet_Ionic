import { useLinkProps } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet,ImageBackground, ImageStore } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import Buttons from '../components/Buttons';
import images from '../constants/images';

export default function Home(props){
    return (
        <View style={styles.container}>
          <BackgroundImage/>
          <View style = {styles.title}>
            <Text style = {{fontFamily:'Snell Roundhand',color:'#fff',  fontSize : 30,fontWeight:'bold', fontStyle:'italic'}}>Le bateau de Thibault</Text>
          </View>
          <View style = {styles.texte2}>
            <Text style ={{fontWeight:'bold',fontSize:15,fontStyle:'italic'}}>
              Vente en direct de notre bateau 
            </Text>
            <Text style ={{fontWeight:'bold',fontSize:15,fontStyle:'italic'}}>
              Produits selon la saison, Livraisons sur Paris
            </Text>
            <Text style ={{fontWeight:'normal',fontStyle:'italic',fontSize:10}}>
              06.63.99.99.78 
            </Text>
            <Text style ={{fontWeight:'normal',fontStyle:'italic',fontSize:10}}>
              lebateaudethibault@gmail.com
            </Text>  
            <Text style ={{fontWeight:'normal',fontStyle:'italic',fontSize:10}}>
              www.facebook.com/lebateaudethibault 
            </Text>
            <StatusBar style="auto" />
          </View>
          <View style = {styles.mainbutton}>
            <View style = {styles.buttonN}>
                <Buttons text = 'Produits et Promotions' 
                screen = 'Products'
                navigation = {props.navigation}
                image = {images.poisson.uri} > 
  
                </Buttons>
            </View>
            <View style = {styles.buttons}>
              <View style = {styles.buttonN}>
                <Buttons text = 'Bateaux' 
                screen = 'Bateau'
                navigation = {props.navigation}
                image = {images.ancre.uri}> 
                </Buttons>
              </View>
              <View style = {styles.buttonN}>
                <Buttons text = 'Restaurants' 
                screen = 'Restaurants'
                navigation = {props.navigation}
                image = {images.restaurant.uri}> 
                </Buttons>
              </View>
              </View>
            <View style = {styles.buttons}>
              <View style = {styles.buttonN}>
                <Buttons text = 'Recettes' 
                screen = 'Recettes'
                navigation = {props.navigation}
                image = {images.recette.uri}> 
                </Buttons>
              </View>
              <View style = {styles.buttonN}>
                <Buttons text = 'Contact' 
                screen = 'Contact'
                navigation = {props.navigation}
                image = {images.tourteau.uri}> 
                </Buttons>
              </View>
            </View>
          </View>
          </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex : 1,
      flexDirection : 'column',
      alignItems: 'stretch',
      textAlign: 'center',
      justifyContent: 'center',
      
    },
    texte2 : {
      flex : 1,
      alignItems: 'center',
    },
    title : {
      flex: 1,
      justifyContent: 'flex-start',
      marginTop: 75,
      fontStyle : 'italic',
      fontFamily : 'Snell Roundhand, cursive',
      alignItems: 'center',
    },

    mainbutton : {
      flex : 2,
      margin:5,
      marginBottom:50, 
      
    },

    buttons: {
      flex : 1,
      flexDirection:'row',
      margin : 2,
      
    },
    buttonN : {
      flex : 1,
      backgroundColor:'rgba(52,52,52,0.3)',
      margin : 3,
      borderColor:'black',
      borderWidth:1,
    },

  });


  