import React from 'react';
import { StyleSheet } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
Ionicons
import { Ionicons } from '@expo/vector-icons';

import Home from './components/Home';
import JournalEntry from './components/JournalEntry';
import CalendarComponent from './components/Calendar';
import Search from './components/Search'
import Settings from './components/Settings';


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'New Entry') {
              iconName = 'add-circle';
            } else if (route.name === 'Calendar') {
              iconName = 'calendar-outline';
            } else if (route.name === 'Search') {
              iconName = 'search';
            } else if (route.name === 'Settings') {
              iconName = 'options-outline'
            }
            return <Ionicons style={styles.icons} name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'gray',
          tabBarInactiveTintColor: 'black'
        })}
      >
        <Tab.Screen name='New Entry' component={JournalEntry} />
        <Tab.Screen name='Calendar' component={CalendarComponent} />
        <Tab.Screen name='Search' component={Search} />
        <Tab.Screen name='Settings' component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  icons: {
    marginTop: 16
  }
});

const Tab = createBottomTabNavigator();


