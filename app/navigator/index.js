/* eslint-disable prettier/prettier */
import React from "react";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screen/HomeScreen/index';
import DetailsScreen from '../screen/DetailsScreen/index';

const MainNavigator = createStackNavigator(
    {
        HomeScreen:{
            screen:HomeScreen,
            key : HomeScreen,
        },
        DetailsScreen:{
            screen:DetailsScreen,
            key : DetailsScreen,
        },
    },
    {
        initialRouteName: HomeScreen,
        headerMode: 'none',
      },
);

const Navigator = createAppContainer(MainNavigator);
export default Navigator;
