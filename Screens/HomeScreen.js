import * as React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import firebase from 'firebase'
import db from '../config'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

export const AppTabNavigator = createMaterialTopTabNavigator({
    Clothes:{
        screen:ClothesScreen,
        MaterialTopTabNavigationOptions:{
            tabBarLabel:'Clothes'
        }
    },
    Electronics:{
        screen:ElectronicsScreen,
        MaterialTopTabNavigationOptions:{
            tabBarLabel:'Electronics'
        }
    },
    Toys:{
        screen:ToysScreen,
        MaterialTopTabNavigationOptions:{
            tabBarLabel:'Toys'
        }
    }
})