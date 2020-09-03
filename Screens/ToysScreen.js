import * as React from 'react'
import {View,Text,ScrollView,Image,TouchableOpacity} from 'react-navigation'
import firebase from 'firebase'
import db from '../config'
var image1=require('../assets/toy.jpg')
var image2=require('../assets/toy2.jpg')
import MyHeader from '../components/MyHeader'

export default class ToysScreen extends React.Component{
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
                <Image source={image1}
                       style={styles.image}/>
                <Image source={image2}
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