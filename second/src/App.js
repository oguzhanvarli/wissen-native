import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home/Home'
import About from './screens/About/About'
import Profile from './screens/Profile/Profile'
import Blog from './screens/Blog/Blog'
import Details from './screens/Details/Details'


const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Blog" component={Blog} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})