import * as React from 'react'
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import firebase from 'firebase'
import db from '../config'

export default class WelcomeScreen extends React.Component{
    constructor(){
        super()
        this.state={
            userId:'',
            emailId:'',
            contact:'',
            password:'',
            confirmPassword:''
            
        }
    }
    render(){
        return(
            <View>
                <View>
                    <TextInput style={styles.inputBox}
                    placeholder={'emailId'}
                    onChangeText={(text)=>{
                        this.setState({
                            emailId:text
                        })
                    }}
                    />
                    <TextInput style={styles.buttonText}
                    placeholder={'password'}
                    secureTextEntry={true}
                    maxLength={10}
                    onChangeText={(text)=>{
                        this.setState=({
                            password:text
                        })
                    }}
                    />
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity style={styles.button}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}