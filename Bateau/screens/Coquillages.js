import React from 'react';
import { View, StyleSheet,Button } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import Buttons from '../components/Buttons';
import {produits} from '../constants/produits.js';
import images from '../constants/images';

export default function Coquillages(props){
    return (
        <View style={styles.container}>
          <BackgroundImage/>
          <View style = {styles.title}>
                    <Button title="home" onPress={()=>props.navigation.navigate('Home')}/>
          </View>
          <View style = {styles.coquillages} >
            {produits.map((value,index)=>{
              if(value.category==1){
                return <Buttons style = {{alignItems:'center'}}
                        key={index}
                        text={value.name}
                        image = {images.ancre.uri}
                        screen={"ProductsList"}
                        navigation={props.navigation}
                        data={value}>
                        </Buttons>  
              }        
        })}</View>
        
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
    title : {
        flex: 0.07,
        justifyContent: 'flex-start',
      },
    
    coquillages : {
      flex : 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin:5,
      backgroundColor:'rgba(52,52,52,0.3)',
      borderColor:'black',
      borderWidth:1,
      },

    
  });
