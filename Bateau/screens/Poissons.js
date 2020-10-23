import React from 'react';
import { View, StyleSheet,Button } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import Buttons from '../components/Buttons';
import {produits} from '../constants/produits.js';
import images from '../constants/Images';

export default function Poissons(props){
    return (
        <View style={styles.container}>
          <BackgroundImage/>
          <View>
                <Button title="home" onPress={()=>props.navigation.navigate('Home')}/>
          </View>
          <View style={{flexDirection:'column'}}>
            {produits.map((value,index)=>{
              if(value.category==0){
                return <Buttons
                        key={index}
                        text={value.name}
                        image = {images.poisson.uri}
                        screen={"ProductsLists"}
                        navigation={props.navigation}
                        data={value}>
                        </Buttons>  
              }        
            })
            }
        </View>
    </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        textAlign: 'center',
        flexDirection: 'column'
    }
});
