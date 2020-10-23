import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { Button,StyleSheet, Text, View } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import { getRessources } from '../services/apirest';
import Buttons from '../components/Buttons';
import images from '../constants/images';

export default class Products extends React.Component{

    state = {
        data : require("../constants/products.json"),
    }

    componentDidMount(){
        //getRessources("products").then(response=>{
            //console.log(response)
         //   this.setState({data: response})
        //});
    }

    render() {
       return  <View style = {styles.container}>
                    <BackgroundImage/>
                <View style = {styles.home}>
                    <Button title="home" onPress={()=>this.props.navigation.navigate('Home')}/>
                </View>
                <View style = {styles.title}> 
                    <Text style = {{fontFamily:'Snell Roundhand',fontSize : 20,fontWeight:'bold'}}>Choisissez vos produits</Text>
                </View>
                <View style = {styles.mainbutton}>
                    <View style = {styles.buttonN}>
                        <Buttons text = 'Poissons' 
                        screen = 'Poissons'
                        navigation={this.props.navigation}
                        image = {images.poisson.uri} 
                        data={this.state.data}> 
                        </Buttons>
                    </View>
                    <View style = {styles.buttonN}>
                        <Buttons text = 'Coquillages' 
                        screen = 'Coquillages'
                        navigation={this.props.navigation}
                        image = {images.ancre.uri} 
                        data={this.state.data}> 
                        </Buttons>
                    </View>
                    <View style = {styles.buttonN}>
                        <Buttons text = 'Crustacés' 
                        screen = 'Crustaces'
                        navigation={this.props.navigation}
                        image = {images.tourteau.uri} 
                        data={this.state.data}> 
                        </Buttons>
                    </View>
                    <View style = {styles.buttonN}>
                        <Buttons text = 'Promotions' 
                        screen = 'Products'
                        navigation={this.props.navigation}
                        image = {images.poulpe.uri} 
                        data={this.state.data}> 
                        </Buttons>
                    </View>

                </View>
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
        flex: 0.05,
        justifyContent: 'flex-start',
         alignItems: 'center',
         textAlign: 'center',
      }, 
      home : {
        flex: 0.07,
        justifyContent: 'flex-start',
         alignItems: 'stretch',
         textAlign: 'center',
      },
      mainbutton : {
        flex : 1,
        margin:0,
        marginBottom:50, 
        
      },
      buttonN : {
        flex : 1,
        backgroundColor:'rgba(52,52,52,0.3)',
        margin : 5,
        borderColor:'black',
        borderWidth:1,
      },
  })