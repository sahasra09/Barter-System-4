
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {TabNavigator} from './components/TabNavigator'

export default  class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}
const switchNavigator=createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
  TabNavigator:{screen:TabNavigator}
})

const AppContainer=createAppContainer(switchNavigator)