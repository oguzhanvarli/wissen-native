import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home/Home'
import About from './screens/About/About'
import Profile from './screens/Profile/Profile'
import Blog from './screens/Blog/Blog'
import Details from './screens/Details/Details'
import axios from 'axios'
import AddProduct from './screens/AddProduct/AddProduct'
import { Provider } from 'react-redux'
import { store } from './store/store'


const Stack = createNativeStackNavigator()

export default function App() {


    axios.defaults.baseURL = "https://dummyjson.com"

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="About" component={About} />
                    <Stack.Screen name="Profile" component={Profile} />
                    <Stack.Screen name="Blog" component={Blog} />
                    <Stack.Screen name="Details" component={Details} />
                    <Stack.Screen name="AddProduct" component={AddProduct} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

const styles = StyleSheet.create({})