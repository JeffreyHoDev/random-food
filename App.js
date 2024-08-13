import * as React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PaperProvider } from 'react-native-paper';


import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from './screen/home.screen';

function SettingsScreen() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </SafeAreaView>
  );
}

const HomeTabOptions = {
  tabBarIcon: () => <Ionicons name="home" size={32}/>,
  tabBarActiveTintColor: "white",
  tabBarActiveBackgroundColor: theme.color.focus,
}
const AboutTabOptions = {
  tabBarIcon: () => <Ionicons name="information-circle-outline" size={32}/>,
  tabBarActiveTintColor: "white",
  tabBarActiveBackgroundColor: theme.color.focus,

}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen options={HomeTabOptions} name="Home" component={HomeScreen} />
          <Tab.Screen options={AboutTabOptions} name="About" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      </PaperProvider>
    </ThemeProvider>
  );
}