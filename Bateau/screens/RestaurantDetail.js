import React from 'react';
import { View, StyleSheet } from 'react-native';
import ModeleType from '../components/ModeleType'

export default class RestaurantDetail extends React.Component {
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
        textAlign: 'center',
        flexDirection: 'column'
    }
})
