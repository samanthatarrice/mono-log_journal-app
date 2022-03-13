import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import JournalEntry from './JournalEntry';
import CalendarComponent from './Calendar';
import Search from './Search'
import Settings from './Settings';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (   
      <Tab.Navigator
        style={styles.tabContainer}
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
            return <Ionicons name={iconName} size={size} color={color} />;
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

export default Home;