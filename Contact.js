import { useLinkProps } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { Image, Text, View, StyleSheet,ImageBackground } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import { getRessources } from '../services/apirest';

export default function Contact(){

      return (
        <View style={styles.container}>
          <BackgroundImage/>
          <View >
            <Text style = {styles.title}>Le bateau de Thibault</Text>
          </View>
          <View >
              
              <Image style ={styles.text2} source={require('../assets/TIG.png')} style = {styles.img}/>
              <Text  style ={styles.text2} style={{flex : 1,alignItems: 'center',marginBottom: 5,fontSize:25,fontStyle:'italic',marginTop:5,fontFamily:'gadudgi'}}  >
              06.63.99.99.78
              </Text>
              <Text  style ={styles.text2} style={{flex : 1,alignItems: 'center',marginBottom: 5,fontSize:15,fontStyle:'italic',marginTop:5,fontFamily:'gadudgi'}}  >
              lebateaudethibault@gmail.com
              </Text>  
              <Text style ={styles.text2} style={{flex : 1,alignItems: 'center',marginBottom: 5,fontSize:15,fontStyle:'italic',marginTop:5,fontFamily:'gadudgi'}} >
              www.facebook.com/lebateaudethibault 
              </Text>
      
            <StatusBar style="auto" />
          </View>
          <View style={{paddingTop:30}}>
          <Text style ={styles.text3} style={{flex : 1,alignItems: 'center',fontSize:10,fontStyle:'italic',fontFamily:'algerian'}}>qu'il est chaud le soleil</Text>
          <Text style ={styles.text3} style={{flex : 1,alignItems: 'center',fontSize:10,fontStyle:'italic',fontFamily:'algerian'}}>quand nous sommes en vacances</Text>
          <Text style ={styles.text3} style={{flex : 1,alignItems: 'center',fontSize:10,fontStyle:'italic',fontFamily:'algerian'}}>Y'a de la joie, des hirondelles</Text>
          <Text style ={styles.text3} style={{flex : 1,alignItems: 'center',fontSize:10,fontStyle:'italic',fontFamily:'algerian'}}>c'est le sud de la France</Text>
          <Text style ={styles.text3} style={{flex : 1,alignItems: 'center',fontSize:10,fontStyle:'italic',fontFamily:'algerian'}} >Papa bricole au garage</Text>
          <Text style ={styles.text3} style={{flex : 1,alignItems: 'center',fontSize:10,fontStyle:'italic',fontFamily:'algerian'}}>Maman lit dans la chaise longue</Text>
          <Text style ={styles.text3} style={{flex : 1,alignItems: 'center',fontSize:10,fontStyle:'italic',fontFamily:'algerian'}}>Dans ce joli paysage</Text>
          <Text style ={styles.text3} style={{flex : 1,alignItems: 'center',fontSize:10,fontStyle:'italic',fontFamily:'algerian'}}>Moi, je me balade en tongs</Text>
      
          <Text style ={styles.text3} style={{flex : 1,alignItems: 'center',fontSize:10,fontStyle:'italic',fontFamily:'algerian'}}>que de bonheur!</Text>
          <Text style ={styles.text3} style={{flex : 1,alignItems: 'center',fontSize:10,fontStyle:'italic',fontFamily:'algerian'}}>que de bonheur!</Text>
      
      
          </View>
      
        </View>
       
      
      );
    

    
   
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    textAlign: 'center',
    
  },
  texte2 : {
    flex : 1,
    alignItems: 'center',
    marginBottom: 25,
    fontWeight:'bold',
    fontSize:15,
    fontStyle:'italic',
    marginTop:5,
  },
  text3 : {
  
  },

  title : {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 30,
    fontStyle : 'italic',
    fontFamily : 'Snell Roundhand, cursive',
    alignItems: 'center',
    color:'white',
    fontSize:30,
    marginBottom:50,
  },

  img :{
    height:150,
    width:150,
    left:180,
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

