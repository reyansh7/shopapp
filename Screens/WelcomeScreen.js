import * as React from 'react'
import {View,Text,StyleSheet,TextInput,TouchableOpacity,ScrollView,KeyboardAvoidingView,Modal} from 'react-native'
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
            confirmPassword:'',
            isModalVisible:false
            
            
        }
    }
    userSignUp = (email,password)=>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((response)=>{
            return Alert.alert("User Added Successfully")
        })
        .catch(function(error){
            // handle errors here.
             var errorCode = error.code;
             var errorMessage = error.message;
             return Alert.alert(errorMessage)
        });
        db.collection('users').add({
            first_name:this.state.firstName,
            last_name:this.state.lastName,
            mobile_number:this.state.contact,
            username:this.state.emailId,
            
        })
    }
    userLogin = (email,password)=>{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(()=>{
            //return Alert.alert("Successfully Login")
            this.props.navigation.navigate('Home')
        })
        .catch((error)=>{
            // handle errors here.
             var errorCode = error.code;
             var errorMessage = error.message;
             return Alert.alert(errorMessage)
        });
    }
    showModal = ()=>{
        return(
            <Modal
            animationType='fade'
            transparent={true}
            visible={this.state.isModalVisible}>
           <View style={styles.modalContainer}>
               <ScrollView style={{width:'100%'}}>
                   <KeyboardAvoidingView style={styles.keyboardStyle}>
                       <Text style={styles.modalTitle}>Registeration</Text>
                       <TextInput
                       style={styles.formTextInput}
                       placeholder={'firstName'}
                       maxLength={10}
                       onChangeText={(text)=>{
                           this.setState({
                            firstName:text
                           })
                       }}/>
                       <TextInput
                       style={styles.formTextInput}
                       placeholder={'lastName'}
                       maxLength={8}
                       onChangeText={(text)=>{
                           this.setState({
                            lastName:text
                           })
                       }}/>
                       <TextInput
                       style={styles.formTextInput}
                       placeholder={'contact'}
                       maxLength={10}
                       keyboardType={"numeric"}
                       onChangeText={(text)=>{
                           this.setState({
                            contact:text
                           })
                       }}/>
                       <TextInput
                       style={styles.formTextInput}
                       placeholder={'email'}
                       keyboardType={'email-address'}
                       onChangeText={(text)=>{
                           this.setState({
                            emailId:text
                           })
                       }}/>
                       <TextInput
                       style={styles.formTextInput}
                       placeholder={'password'}
                       secureTextEntry={true}
                       onChangeText={(text)=>{
                           this.setState({
                            password:text
                           })
                       }}/>
                       <TextInput
                       style={styles.formTextInput}
                       placeholder={'confirmPassword'}
                       secureTextEntry={true}
                       onChangeText={(text)=>{
                           this.setState({
                            confirmPassword:text
                           })
                       }}/>
                       <View style={styles.modalBackButton}>
                       <TouchableOpacity style={styles.registerButton}
                       onPress={()=>{
                        this.userSignUp(this.state.emailId,this.state.password,this.state.confirmPassword)
                       }}>
                        <Text style={styles.registerButtonText}>Register</Text>
                       </TouchableOpacity>
                       </View>
                       <View style={styles.modalBackButton}>
                           <TouchableOpacity style={styles.cancelButton}
                           onPress={()=>{
                               this.setState({
                                   isModalVisible:false
                               })
                           }}>
                               <Text style={{color:'red'}}>Cancel</Text>
                           </TouchableOpacity>
                       </View>
                   </KeyboardAvoidingView>
               </ScrollView>
           </View>
            </Modal>
        )
    }
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        {this.showModal()}
                    </View>
                    <TextInput style={styles.inputBox}
                    placeholder={'emailId'}
                    onChangeText={(text)=>{
                        this.setState({
                            emailId:text
                        })
                    }}
                    />
                    <TextInput style={styles.inputBox}
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
                <TouchableOpacity style={styles.button}
                onPress={()=>{
                    this.setState({
                        isModalVisible:true
                    })
                    
                }}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity style={{
                         marginTop:10,      
                         backgroundColor:'green',
                         paddingHorizontal:50,
                         paddingVertical:10}}>
                        <Text style={styles.buttonText}
                        onPress={()=>{
                            this.props.navigation.navigate('TopTab')
                        }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    inputbox:{
        marginLeft:50,
        marginTop:10,
        width:'80%',
        height:14,
        textAlign:'center',
        borderRadius:10,
        backgroundColor:'black'

    },
    buttonText:{

    },
    button:{
        marginTop:-250,
        backgroundColor:'red',
        paddingHorizontal:50,
        paddingVertical:10
    },
    modalContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:330,
        marginLeft:170        
    },
    keyboardStyle:{

    },
    formTextInput:{

    },
    modalBackButton:{

    },
    registerButton:{

    },
    registerButtonText:{

    },
    cancelButton:{

    }

})