import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import { AppTabNavigator } from './components/AppTabNavigator';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppDrawerNavigator } from './components/AppDrawerNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppContainer />
    </SafeAreaProvider>
  );
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen,
  },
  Drawer: {
    screen: AppDrawerNavigator,
  },
});

const AppContainer = createAppContainer(switchNavigator);

//APK Link: https://expo.io/artifacts/256b54e9-046c-4bc6-b3e8-131b86e4503b