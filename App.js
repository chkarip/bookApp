import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesList from './src/components/CategoriesList';

import HomeScreen from './src/screens/HomeScreen';
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    categories: CategoriesList
   
   
  },
  {
    initialRouteName: 'categories',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);