import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import WebViewScreen from './screens/WebViewScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="WebView" 
          component={WebViewScreen} 
          options={{ 
            headerShown: false, // This hides the header completely
            gestureEnabled: false // Optional: disables swipe back gesture
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}