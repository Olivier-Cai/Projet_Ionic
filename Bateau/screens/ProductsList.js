import React from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import {product} from '../screens/Products';
import Header from '../components/Header';
import {produits} from '../constants/produits.js';

import Buttons from '../components/Buttons';

export default class ProductList extends React.Component {

render(){

    let products= this.props.route.params.data ? this.props.route.params.data : [];
    return <View style={styles.container}>
    <BackgroundImage/>
    <View style = {styles.title}>
                    <Button title="home" onPress={()=>this.props.navigation.navigate('Home')}/>
     </View>
    <View style = {styles.poissons} >
      {produits.map((value,index)=>{
          if(value.name == this.props.route.params.data.name ){
          return <Buttons style = {{alignItems:'center'}}
                  key={index}
                  text={value.name}
                  image={value.image_icon}
                  data={value}>
                  </Buttons>  
          }
        }        
  )}</View>
  
  </View> 
    }
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

    poissons : {
        flex:1,
        margin:5,
        backgroundColor:'rgba(52,52,52,0.3)',
        borderColor:'black',
        borderWidth:1,
        },
})