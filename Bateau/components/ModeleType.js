import BackgroundImage from "./BackgroundImage";
import React from 'react';
import { Image,StyleSheet, Text, View } from 'react-native';


export default function(props){
   return(
       <View style = {styles.container}>
          <BackgroundImage/>   
          <View >
          <Text style = {styles.title}>{props.nom}</Text>
          </View>
          <View style= {{flex:2, alignItems:"center", paddingTop:20}}>
            <Image style = {styles.image} source = {props.url} ></Image>
          <Text style = {styles.text}><Text style = {styles.titre}>XXXYYYZZZ</Text>{"\n"}{"\n"}{"\n"} Quil est chaud le soleil {"\n"}
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
        textAlign: 'center',
        flexDirection: 'column'
    },

    image: {
      justifyContent:'flex-start',
      width : 200,
      height:200,
    },

    text: {
        fontSize:10,
        fontFamily: 'Noteworthy',
        alignItems:'center'
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
