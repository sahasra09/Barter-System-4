import React,{Component} from 'react'
import {View,Text,TextInput, TouchableOpacity,Alert,StyleSheet} from 'react-native'
import firebase from 'firebase'
import db from '../config'

export default class WelcomeScreen extends Component{

    constructor(){
        super()
        this.state={
            emailId:'',
            password:''
        }
    }

    SignUpOpt=(email,password)=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((response)=>{
            return Alert.alert('user added successfully')
        })
        .catch(function(error){
            var errorCode=error.code
            var errorMessage=error.errorMessage
            return Alert.alert(errorMessage)
        })
    }
    Login=(email,password)=>{
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then((response)=>{
            return alert('Login Sucessful')
        })
        .catch(function(error){
            var errorCode=error.code
            var errorMessage=error.errorMessage
            return alert(errorMessage)
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Barter System</Text>
                <View style={styles.buttonContainer}>
                <TextInput
                    style={styles.loginBox}
                    placeholder='___@gmail.com'
                    keyboardType='email-address'
                    onChangeText={(text)=>{
                        this.setState({
                            emailId:text
                        })
                    }}
                />
                <TextInput
                    style={styles.loginBox}
                    secureTextEntry={true}
                    placeholder='enter your password'
                    onChangeText={(text)=>{
                        this.setState({
                            password:text
                        })
                    }}
                />
                <TouchableOpacity style={[styles.button,{marginBottom:20,marginTop:20}]}
                    onPress={()=>{
                        this.Login(this.state.emailId,this.state.password)
                    }}
                >
                    <Text style={styles.buttontext}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={()=>{this.SignUpOpt(this.state.emailId,this.state.password)}}
                >
                    <Text style={styles.buttontext}>Sign Up</Text>
                </TouchableOpacity>
                </View>
               
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f8be85',
    },
    buttonContainer:{
        flex:1,
        alignItems:'center'
    },
    title:{
        fontSize:65,
        fontWeight:'300',
        paddingBottom:30,
        color:'black',
        fontFamily:'ink free',
        alignSelf:'center'
    },
    loginBox:{
        width:300,
        height:40,
        borderBottomWidth:1.5,
        borderColor:'#ff8a65',
        fontSize:20,
        margin:10,
        paddingLeft:10
    },
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:'#ff9800',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:8,
        },
        shadowOpacity:0.3,
        shadowRadius:10,
        elevation:16

    },
    buttontext:{
        color:'#fff',
        fontWeight:'200',
        fontSize:20
    }
})
