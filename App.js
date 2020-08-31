import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import WelcomeScreen from './Screens/WelcomeScreen'
import Splash from './Screens/Splash'
import HomeScreen from './Screens/HomeScreen'
import {AppTabNavigator} from './Screens/HomeScreen'

export default class App extends React.Component{
  render(){
    return(
      
      <AppContainer/>
    )
  }
}

const switchNavigator = createSwitchNavigator({
  Splash:{screen:Splash},
  Welcome:{screen:WelcomeScreen},
  TopTab:{screen:AppTabNavigator}
})
const AppContainer=createAppContainer(switchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


