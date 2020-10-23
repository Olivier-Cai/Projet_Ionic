import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';

export default function Buttons(props){
    return (
      <TouchableOpacity style = {styles.container}
      onPress ={() => props.navigation.navigate(props.screen, {data : props.data? props.data :[] })}>
      {
        props.image && 
        <Image source={props.image} style={{width:40, height:40, marginRight:8, justifyContent:'center'}}/>
      }
        <Text style = {styles.text}>{props.text}</Text>
  </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
        container: {
          flex : 1,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection:"row",
          
        },
        text : {
          color:'black',
          fontWeight:'bold',
        },

        image : {
          position:'absolute',
          left:20,
          opacity:1,
        }
  });