import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import { getRessources } from '../services/apirest';
import Buttons from '../components/Buttons';
import { recipes } from '../constants/recipes';

export default class Recettes extends React.Component{
    state = {
        data : []
    }

    componentDidMount(){
        getRessources("recettes").then(response=>{
            this.setState({data: response})
        });
    }

    render(){
        return  <View style={styles.container}>
                    <BackgroundImage/>
                    <View>
                        <Text style={styles.title}>Nos recettes</Text>
                    </View>
                    <View style={{paddingBottom:100}}>
                        <Text style={styles.description}>Toutes les recettes du bateau de Thibault.</Text>
                        <Text style={styles.telephone}>06.63.99.99.78</Text>
                        <Text style = {styles.mail}>lebateaudethilbaul@gmail.com</Text>
                        <Text style = {styles.facebook}>www.facebook.com/lebateaudethibault</Text>
                    </View>
                    <View>
                        <View style={styles.row}>
                            {recipes.map((value,index)=>{
                                if(index<2){
                                    return (
                                        <Buttons key={index}
                                            text={value.icon_name}
                                            image={value.image_icon}
                                            screen= {"RecetteDetail"}
                                            navigation = {this.props.navigation}
                                            data= {value}/>
                                    )}
                            })
                            }
                        </View>
                        <View style={styles.row}>
                            {recipes.map((value,index)=>{
                                if(index>1 && index<4){
                                    return (
                                        <Buttons key={index}
                                            text={value.icon_name}
                                            image={value.image_icon}
                                            screen= {"RecetteDetail"}
                                            navigation = {this.props.navigation}
                                            data={value}/>
                                    )}
                            })
                            }
                        </View>
                        <View style={styles.row}>
                            {recipes.map((value,index)=>{
                                if(index>3){
                                    return (
                                        <Buttons key={index}
                                            text={value.icon_name}
                                            image={value.image_icon}
                                            screen= {"RecetteDetail"}
                                            navigation = {this.props.navigation}
                                            data={value}/>
                                    )}
                            })
                            }
                        </View>
                    </View>
                    {/* <View style={{flex:1, flexDirection:'row', paddingTop:100}}>
                        <Buttons text = 'Homard'
                            image = {images.homardicon.uri}
                            screen = 'RecetteDetail'/>
                        <Buttons text = 'St Jacques'
                            image = {images.stjacquesicon.uri}
                            screen = 'RecetteDetail'/>
                    </View>
                    <View style={{flex:1, flexDirection:'row'}}>
                        <Buttons text = 'Bar'
                            image = {images.baricon.uri}
                            screen = 'RecetteDetail'/>
                        <Buttons text = 'Tourteau'
                            image = {images.tourteau.uri}
                            screen = 'RecetteDetail'/>
                    </View>
                    <View style={{flex:1, flexDirection:'row', paddingBottom: 50}}>
                        <Buttons text = 'Recette'
                            image = {images.poulpe.uri}
                            screen = 'RecetteDetail'/>
                        <Buttons text = 'Recette'
                            image = {images.poulpe.uri}
                            screen = 'RecetteDetail'/>
                    </View> */}
                </View>
    }
}

const styles = StyleSheet.create({
    container: {
      flex : 1,
      textAlign: 'center',
    },
    button: {
        flex : 1,
        flexDirection:'row',
        margin : 2,
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
      row : {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"row",
        margin:2,
        backgroundColor:'rgba(52,52,52,0.3)',
        borderColor:'black',
        borderWidth:1,
        },
  })
/* ajouter image
  <Image 
    style={{height:150, width:150}}
  source={require('../assets/barRecette.png')}/>
  */