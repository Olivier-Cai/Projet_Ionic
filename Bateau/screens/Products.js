import React from 'react';
import { Button,StyleSheet, Text, View } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import Buttons from '../components/Buttons';
import images from '../constants/Images';

export default class Products extends React.Component{

    state = {
        data : require("../constants/products.json"),
    }

    render() {
       return  <View style = {styles.container}>
                    <BackgroundImage/>
                <View>
                    <Button title="home" onPress={()=>this.props.navigation.navigate('Home')}/>
                </View>
                <View> 
                    <Text style = {styles.title}>Choisissez vos produits</Text>
                </View>
                <View style={{ flex: 2, flexDirection: 'column'}}>
                    <View>
                        <Buttons text = 'Poissons' 
                        screen = 'Poissons'
                        navigation={this.props.navigation}
                        image = {images.poisson.uri} 
                        data={this.state.data}> 
                        </Buttons>
                    </View>
                    <View>
                        <Buttons text = 'Coquillages' 
                        screen = 'Coquillages'
                        navigation={this.props.navigation}
                        image = {images.ancre.uri} 
                        data={this.state.data}> 
                        </Buttons>
                    </View>
                    <View>
                        <Buttons text = 'Crustacés' 
                        screen = 'Crustaces'
                        navigation={this.props.navigation}
                        image = {images.tourteau.uri} 
                        data={this.state.data}> 
                        </Buttons>
                    </View>
                    <View>
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
        textAlign: 'center',
        flexDirection: 'column'
    },
    title : {
        flex : 1,
        fontFamily: 'Noteworthy',
        fontSize: 15,
        fontStyle: 'italic',
    }
  })
