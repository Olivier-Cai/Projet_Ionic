import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

export default function Buttons(props){
    return (
    <TouchableOpacity style = {styles.container}
        onPress ={() => props.navigation.navigate(props.screen, {data : props.data? props.data :[] })}>
        {
          props.image && 
          <Image source={props.image} style={{width:50, height:50, marginRight:10, justifyContent:'center'}}/>
        }
          <Text style = {styles.text}>{props.text}</Text>
    </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
        container: {
          flex : 1,
          padding: 10,
          alignItems: 'center',
          backgroundColor: 'rgba(66,66,66,0.5)',
          margin: 5,
          borderWidth: 1,
          borderColor: '#000',
          flexDirection: 'row',
        },
        text : {
          color: '#FFF',
        }
  });
