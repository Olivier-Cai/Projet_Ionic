import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import Buttons from '../components/Buttons';
import {bateaux} from '../constants/Bateaux.js';

export default function Bateau(props){
    return (
        <View style={styles.container}>
          <BackgroundImage/>
          <View>
            <Text style = {styles.title}>Nos bateaux partenaires</Text>
          </View>
          <View style= {{paddingBottom: 100}}>
            <Text style = {styles.description}>Tous les eaux mènent à Thibault.</Text>
            <Text style = {styles.telephone}>06.63.99.99.78 </Text>
            <Text style = {styles.mail}>lebateaudethibault@gmail.com</Text>  
            <Text style = {styles.facebook}>www.facebook.com/lebateaudethibault </Text>
          </View>
          <View style={{flex: 2, flexDirection:'row'}}>
            {bateaux.map((value,index)=>{
              if(index<2){
                return <Buttons
                        key={index}
                        text={value.name}
                        image={value.image_icon}
                        screen={"BateauDetail"}
                        navigation={props.navigation}
                        data={value}>
                        </Buttons>  
              }        
            })
            }
        </View>

        <View style={{flex: 2, flexDirection:'row'}}>
          {bateaux.map((value,index)=>{
            if(index>1 && index<4){
                return <Buttons
                        key={index}
                        text={value.name}
                        image={value.image_icon}
                        screen={"BateauDetail"}
                        navigation={props.navigation}
                        data={value}>
                        </Buttons> 
            }         
          })
          }
        </View>
        
        <View style={{flex: 2, flexDirection:'row', paddingBottom:50}}>
            {bateaux.map((value,index)=>{
                if(index>3){
                    return <Buttons 
                        key={index}
                        text={value.name}
                        image={value.image_icon}
                        screen={"Contact"}
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
})
