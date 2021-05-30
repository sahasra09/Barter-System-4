import React from 'react'
import {Image} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import ItemDonateScreen from '../screens/ItemDonateScreen'
import ItemRequestScreen from '../screens/ItemRequestScreen'


export const TabNavigator=createBottomTabNavigator({
    DonateItems:{
        screen:ItemDonateScreen,
            navigationOptions:{
                tabBarIcon:<Image source={require("../assets/request.jpg")} style={{width:20,height:20}}/>,
                tabBarLabel:"Donate Items"
            }
        },
        BookRequest:{
            screen:ItemRequestScreen,
            navigationOptions:{
                tabBarIcon:<Image source={require("../assets/download.png")} style={{width:20,height:20}}/>,
                tabBarLabel:"Book Items"
            }
        },
        
    
})