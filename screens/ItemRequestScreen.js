import React,{Component} from 'react'
import {View,Text, KeyboardAvoidingView, TextInput,TouchableOpacity,StyleSheet,Alert} from 'react-native'
import MyHeader from '../components/Header'
import firebase from 'firebase'
import db from '../config'

export default class BookRequestScreen extends Component{

    constructor(){
        super()
        this.state={
            userId:firebase.auth().currentUser.email,
            itemName:'',
            reasonToRequest:''
        }
    }
    idCreation(){
        return Math.random().toString(36).substring(7);
    }
    addRequest=(itemName,reasonToRequest)=>{
        var userId=this.state.userId
        var randomRequestId=this.idCreation()
        db.collection('requests').add({
            "user_id":userId,
            "item_name":this.state.itemName,
            "reason_to_request":this.state.reasonToRequest,
            "request_id":randomRequestId
        })
        this.setState({
            itemName:'',
            reasonToRequest:''
        })
        return(
            Alert.alert("Item requested Successfully")
        )
    }
    render(){
        return(
            <View style={{flex:1}}>
                <MyHeader title="Request Item"/>
                <KeyboardAvoidingView style={styles.keyBoardStyle}>
                    <TextInput style={styles.formTextInput}
                        placeholder={"Enter Item name"}
                        onChangeText={(text)=>{
                            this.setState({
                                itemName:text
                            })
                        }}
                        value={this.state.bookName}
                    />

                    <TextInput style={[styles.formTextInput,{height:300}]}
                        multiline
                        numberOfLines={8}
                        placeholder={"Why do you need this item?"}
                        onChangeText={(text)=>{
                            this.setState({
                                reasonToRequest:text
                            })
                        }}
                        value={this.state.reasonToRequest}
                    />
                    <TouchableOpacity style={styles.button}
                        onPress={()=>{this.addRequest()}}
                    >
                        <Text>Request</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
  )