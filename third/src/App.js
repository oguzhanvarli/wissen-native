import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home/Home';

const Stack = createStackNavigator()

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
   </NavigationContainer>
  )
}