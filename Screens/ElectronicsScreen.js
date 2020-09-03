import * as React from 'react'
import {View,Text,ScrollView,Image,TouchableOpacity} from 'react-navigation'
import firebase from 'firebase'
import db from '../config'
var electronics = require('../assets/Electronics')
import MyHeader from '../components/MyHeader'

export default class ElectronicsScreen extends React.Component{
    constructor(){
        super()
        this.state={
            buttonState:normal
        }
    }
    render(){
        return(
            <ScrollView style={styles.container}>
                <MyHeader/>
                <Image source={electronics}
                style={styles.image}/>           
                <TouchableOpacity 
                 onPress={()=>{
                     this.props.navigation.navigate('Home')
                     this.setState({buttonState:''})
                 }}>
                     <Text>Add To Cart</Text>
                 </TouchableOpacity>
                 <TouchableOpacity>
                     <Text>Back</Text>
                 </TouchableOpacity>     
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white'
    },
    image:{
        width:100,
        height:100,
    }
    
})