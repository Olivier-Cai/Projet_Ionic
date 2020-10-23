import BackgroundImage from "./BackgroundImage";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image,StyleSheet, Text, View ,Button} from 'react-native';


export default function(props){
   return(
       <View style = {styles.container}>
          <BackgroundImage/>   
          <Image style = {styles.image} source = {props.url} ></Image>
          <View >
          <Text style = {styles.nom}>{props.nom}</Text>
          </View>
          <View >
          <Text style = {styles.text}>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}<Text style = {styles.titre}>XXXYYYZZZ</Text>{"\n"}{"\n"}{"\n"} Quil est chaud le soleil {"\n"}
          Quand nous sommes en vacances {"\n"}
          Y'a d'la joie, des hirondelles  {"\n"}
          C est le sud de la France {"\n"}
          Papa bricole au garage {"\n"}
          Maman lit dans la chaise longue {"\n"}
          Dans ce joli paysage {"\n"}
          Moi, je me balade en tongs {"\n"}{"\n"}Que de bonheur! {"\n"}Que du bonheur! </Text>
          </View>
        </View>
   ); 
}


const styles = StyleSheet.create({
    container: {
      flex : 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },

    image: {
      position:'absolute',
      justifyContent:'flex-start',
      top : 110,
      width : 200,
      height:300,
      borderRadius:30,
    },

    nom : {
      fontStyle : 'italic',
      fontFamily : 'Snell Roundhand',
      alignItems: 'center',
      fontSize:35,
      color : 'white',
      fontWeight:'bold',
      top : 30,
    },
    text : {
      marginTop: 260,
      fontStyle : 'italic',
      alignItems: 'center',
      fontSize:12,
      textAlign:'center',
    },

    titre : {
      fontStyle : 'italic',
      alignItems: 'center',
      fontSize:20,
    }
});