import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

export default function BackgroundImage(){
       return (
        <ImageBackground source ={require ('../assets/background.png') } style={styles.image}  resizeMode='cover'></ImageBackground>
       );
}

const styles = StyleSheet.create({
    image: {
        position : 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        
      },
});
