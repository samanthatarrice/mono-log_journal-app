import React from 'react';
import { StyleSheet } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './components/Home';
import JournalEntry from './components/JournalEntry';
import CalendarComponent from './components/Calendar';
import SubmittedEntry from './components/SubmittedEntry';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={
          ({route}) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'New Entry') {
              iconName = 'add-circle';
            } else if (route.name === 'Calendar') {
              iconName = 'calendar-outline';
            } else if (route.name === 'Submitted Entry') {
              iconName = 'options-outline'
            }
            return <Ionicons name={iconName} size={35} color={color} />;
          },
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor:'#488FB1'},
          headerTitleStyle: {color:'#FFF'},
          tabBarLabelStyle: {paddingBottom:10},
          tabBarStyle: {height:80,backgroundColor:'#3E4985'},
          tabBarActiveTintColor: '#C1F8CF',
          tabBarInactiveTintColor: '#FFF',
          
        })}
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='New Entry' component={JournalEntry} />
        <Tab.Screen name='Calendar' component={CalendarComponent} />
        <Tab.Screen name='Submitted Entry' component={SubmittedEntry}/>
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    height: 100
  },
  // icons: {
  //   marginTop: 16
  // }
});






