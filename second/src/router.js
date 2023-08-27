import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './screens/Login/Login'
import Home from './screens/Home/Home'
import About from './screens/About/About'
import Profile from './screens/Profile/Profile'
import Blog from './screens/Blog/Blog'
import Details from './screens/Details/Details'
import AddProduct from './screens/AddProduct/AddProduct'
import Card from './screens/Card/Card'
import { useSelector } from 'react-redux'

const Stack = createNativeStackNavigator()

export default function Router() {

    const user = useSelector((state) => state.user.user)

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {!user ?
                    <Stack.Screen name="Login" component={Login} /> :
                    <>
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="About" component={About} />
                        <Stack.Screen name="Profile" component={Profile} />
                        <Stack.Screen name="Blog" component={Blog} />
                        <Stack.Screen name="Details" component={Details} />
                        <Stack.Screen name="AddProduct" component={AddProduct} />
                        <Stack.Screen name="Card" component={Card} />
                    </>}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
