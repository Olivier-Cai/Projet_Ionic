import { useLinkProps, useScrollToTop } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet,ImageBackground, ImageStore } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import Buttons from '../components/Buttons';
import images from '../constants/images';
import ModeleType from '../components/ModeleType'

export default class RestaurantType extends React.Component {
    render(){
        console.log(this.props.route.params.data)
        return <View style = {styles.container}>
                <ModeleType url={this.props.route.params.data.image}  nom={this.props.route.params.data.name}/>
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
      
    }
})