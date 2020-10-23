import BackgroundImage from '../components/BackgroundImage';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image,StyleSheet, Text, View } from 'react-native';


export default function(props){
   return(
       <View style = {styles.container}>
          <BackgroundImage/>   
          <Image style = {styles.image} source = {require('../assets/TIG.png') }></Image>
          <View >
          <Text style = {styles.title}>Le bateau de Thibault</Text>
          </View>
          <View >
          <Text style = {styles.text}>{"\n"}{"\n"}<Text>06.63.99.99.78{"\n"}lebateaudethibault@gmail.com{"\n"}www.facebook/lebateaudethibault</Text>{"\n"}{"\n"}{"\n"} Quil est chaud le soleil {"\n"}
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
        top : 150,
        width : 200,
        height:250,
      },

      button: {
        flex : 1,
        flexDirection:'row',
        margin : 2,
    },
    title : {
        flex: 1,
        paddingTop: 30,
        fontSize: 30,
        justifyContent: 'flex-start',
        color:'#FFFFFF',
        fontFamily: 'Snell Roundhand',
        fontWeight: 'bold',
        fontStyle: 'italic'
      },
      description : {
        flex : 1,
        marginTop: 50,
        fontFamily: 'Noteworthy',
        fontWeight: 'bold',
        fontSize: 12,
        fontStyle: 'italic'
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
      row : {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"row",
        margin:2,
        backgroundColor:'rgba(52,52,52,0.3)',
        borderColor:'black',
        borderWidth:1,
        },
});