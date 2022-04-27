import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Home from './components/Home'
import Login from './components/Login'

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen 
        name='Home'
        component={Home}
      />
      <Stack.Screen 
        name='Login'
        component={Login}
      />
    </Stack.Navigator>
  )
}

export default HomeNavigator;