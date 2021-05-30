import React,{Component} from 'react'
import {View,Text, TouchableOpacity, FlatList,StyleSheet} from 'react-native'
import MyHeader from '../components/Header'
import db from '../config'
import {ListItem} from 'react-native-elements'
export default class BookDonateScreen extends Component{
    constructor(){
        super()
        this.state={
            requestedItemssList:[]
        }
        this.requestRef=null
    }
    getRequestedItemsList=()=>{
        this.requestRef=db.collection("requests")
        .onSnapshot((snapshot)=>{
            var requestedItemsList=snapshot.docs.map(document=>document.data())
            this.setState({
                requestedItemssList:requestedItemsList
            })
               
            
        })
    }
    componentDidMount(){
        this.getRequestedItemsList()
    }
    componentWillUnmount(){
        this.requestRef()
    }
    keyExtractor=(item,index)=>index.toString()
    renderItem = ({ item }) => (
        <ListItem bottomDivider>
          <ListItem.Content>
          <View style = {{flexDirection:'row'}}>
              <View>
                <ListItem.Title>{"Item: "+item.item_name}</ListItem.Title>
                <ListItem.Subtitle>{"Reason: "+item.reason_to_request}</ListItem.Subtitle>
              </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={{color:'#ffff'}}>View</Text>
                </TouchableOpacity>
            </View>
                
            
          </ListItem.Content>
        </ListItem>
      )
    render(){
        return(
            <View style={{flex:1}}>
                <MyHeader title="Donate Items"/>
                <View style={{flex:1}}>
                    {
                        this.state.requestedItemssList.length===0
                        ?(

                            <View style={styles.subContainer}>
                                <Text style={{fontSize:20}}>No items requested yet..</Text>
                            </View>
                        )
                        :(
                            <FlatList
                                keyExtractor={this.keyExtractor}
                                data={this.state.requestedItemsList}
                                renderItem={this.renderItem}
                            />
                        )
                    }
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    subContainer:{
      flex:1,
      fontSize: 20,
      justifyContent:'center',
      alignItems:'center'
    },
    button:{
      width:100,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8
       }
    }
  })