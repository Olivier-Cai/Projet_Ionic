import BackgroundImage from '../components/BackgroundImage';
import React from 'react';
import { Image,StyleSheet, Text, View } from 'react-native';


export default function(props){
   return(
       <View style = {styles.container}>
          <BackgroundImage/>   
          
          <View>
            <Text style = {styles.title}>Le bateau de Thibault</Text> 
          </View>
          <View style= {{flex:2, alignItems:"center", paddingTop:20}}>
            <Image style = {styles.image} source = {require('../assets/TIG.png') }></Image>
            <Text style = {styles.telephone}>06.63.99.99.78</Text>
            <Text style = {styles.mail}>lebateaudethilbaul@gmail.com</Text>
            <Text style = {styles.facebook}>www.facebook.com/lebateaudethibault</Text>
          </View>
          <View style= {{flex:2, alignItems:"center", paddingTop:70}}>     
            <Text style = {styles.text}>Qu'il est chaud le soleil</Text>
            <Text style = {styles.text}>Quand nous sommes en vacances</Text>
            <Text style = {styles.text}>Y'a d'la joie, des hirondelles</Text>
            <Text style = {styles.text}>C'est le sud de la France</Text>
            <Text style = {styles.text}>Papa bricole au garage</Text>
            <Text style = {styles.text}>Maman lit dans la chaise longue</Text>
            <Text style = {styles.text}>Dans ce joli paysage</Text>
            <Text style = {styles.text}>Moi, je me balade en tongs</Text>
            <Text style = {styles.text}>{"\n"}Que de bonheur!</Text>
            <Text style = {styles.text}>Que de bonheur!</Text> 
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
        width : 150,
        height:200,
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

    text: {
        fontSize:10,
        fontFamily: 'Noteworthy',
        alignItems:'center'
    }
});
