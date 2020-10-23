import React from 'react';
import { View, StyleSheet,Button } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import {produits} from '../constants/produits.js';
import Buttons from '../components/Buttons';

export default class ProductList extends React.Component {

render(){

    let products= this.props.route.params.data ? this.props.route.params.data : [];
    return <View style={styles.container}>
    <BackgroundImage/>
    <View>
        <Button title="home" onPress={()=>this.props.navigation.navigate('Home')}/>
     </View>
    <View>
        {produits.map((value,index)=>{
            if(value.name == this.props.route.params.data.name ){
                return <Buttons
                    key={index}
                    text={value.name}
                    image={value.image_icon}
                    data={value}>
                    </Buttons>  
            }
        })
        }
    </View>
  </View> 
    }
}

const styles = StyleSheet.create({
    container: {
      flex : 1,
      textAlign: 'center',
      flexDirection: 'column'
    }
})
