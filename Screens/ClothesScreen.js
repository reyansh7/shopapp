import * as React from 'react'
import {View,Text,Image,ScrollView,TouchableOpacity} from 'react-navigation'
import firebase from 'firebase'
import db from '../config'
import MyHeader from '../components/MyHeader'
var cloth=require('../assets/cloth.jpg')
var clothes=require('../assets/clothes.jpg')

export default class ClothesScreen extends React.Component{
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
                <Image source={cloth}
                 style={styles.image}/>
                <Image source={clothes}
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