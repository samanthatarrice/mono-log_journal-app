import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import {useFonts as useBioRhyme, BioRhyme_400Regular} from '@expo-google-fonts/biorhyme';
import {useFonts as useSpaceMono, SpaceMono_400Regular, SpaceMono_400Regular_Italic} from '@expo-google-fonts/space-mono';
import {useFonts as useBigShoulders, BigShouldersDisplay_700Bold} from '@expo-google-fonts/big-shoulders-display';
import {useFonts as useAnton, Anton_400Regular} from '@expo-google-fonts/anton';
import AppLoading from 'expo-app-loading';

// import Home from './components/Home';
import HomeNavigator from './HomeNavigator';
import JournalEntry from './components/JournalEntry';
import CalendarComponent from './components/Calendar';
import SubmittedEntry from './components/SubmittedEntry';

const Tab = createBottomTabNavigator();

function App() {

  let [antonLoaded] = useAnton({
    Anton_400Regular,
  });

  let [bioLoaded] = useBioRhyme({
    BioRhyme_400Regular,
  });
  
  let [spaceLoaded] = useSpaceMono({
    SpaceMono_400Regular,
    SpaceMono_400Regular_Italic,
  });

  let [bigLoaded] = useBigShoulders({
    BigShouldersDisplay_700Bold,
  });
  
  if (!antonLoaded | !bioLoaded | !spaceLoaded | !bigLoaded) {
    return <AppLoading />
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={
            ({route}) => ({
            tabBarIcon: ({ color }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'New Entry') {
                iconName = 'add-circle';
              } else if (route.name === 'My Journal') {
                iconName = 'journal'
              } else if (route.name === 'Calendar') {
                iconName = 'calendar-outline'
              }
              return <Ionicons name={iconName} size={35} color={color} />;
            },
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor:colors.cobaltBlue},
            headerTitleStyle: {color:'#FFF',fontFamily:fonts.Anton,fontSize:24,letterSpacing:1,textTransform:'uppercase'},
            tabBarLabelStyle: {paddingBottom:10},
            tabBarStyle: {height:80,backgroundColor:colors.midnightBlue},
            tabBarActiveTintColor:colors.mint,
            tabBarLabelStyle:{fontFamily:fonts.BioRhyme,paddingBottom:7},
            tabBarInactiveTintColor: '#FFF',
          })}
        >
          <Tab.Screen name='Home' component={HomeNavigator} />
          <Tab.Screen name='New Entry' component={JournalEntry} />
          <Tab.Screen name='My Journal' component={SubmittedEntry} />
          <Tab.Screen name='Calendar' component={CalendarComponent} />
        </Tab.Navigator>
      </NavigationContainer>
      
    );
  }
}

const fonts = {
  Anton: 'Anton_400Regular',
  BioRhyme: 'BioRhyme_400Regular',
  SpaceMono: 'SpaceMono_400Regular',
  SpaceItalic: 'SpaceMono_400Regular_Italic',
  BigShoulders: 'BigShouldersDisplay_700Bold'
}

const colors = {
  pink: '#FF449F',
  yellow: '#FFD32D',
  mint: '#C1F8CF',
  turquoise: '#4FD3C4',
  midnightBlue: '#3E4985',
  cobaltBlue: '#488FB1',
}

export default App;