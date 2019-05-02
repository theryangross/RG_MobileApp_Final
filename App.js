import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Maps from './Components/Maps';
import HomeScreen from './Components/Home';
import SpeakersScreen from './Components/Speakers';
import ScheduleScreen from './Components/Schedule';


export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: { screen: HomeScreen },
      Schedule: { screen: ScheduleScreen },
      Speakers: { screen: SpeakersScreen },
      Maps: { screen: Maps },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      //tabBarIcon: ({ focused, tintColor }) =>
        //getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }
  }
  )
)

//Tab Navigation from https://reactnavigation.org/docs/en/tab-based-navigation.html

