import * as React from 'react'
import {Text,View,StyleSheet} from 'react-native'

export default class MyHeader extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:0.5,
        background='orange'
    },
    text:{
        fontSize:30,
        fontWeight:'bold',
        color:'red'
    }
})