import { StyleSheet, Text, View } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import React from 'react';
import ModeleType from '../components/ModeleType';

export default class RecetteDetail extends React.Component{
    state = {
        data : []
    }


    render(){
        return  <View style={styles.container}>
                    <BackgroundImage/>
                    <ModeleType url={this.props.route.params.data.image}  nom={this.props.route.params.data.name}/>
                </View>
    }
}

const styles = StyleSheet.create({
    container: {
      flex : 1,
      textAlign: 'center',
    },
})
