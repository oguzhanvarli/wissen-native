import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import axios from 'axios'
import { Provider} from 'react-redux'
import { store } from './store/store'
import Router from './router'




export default function App() {

    
    axios.defaults.baseURL = "https://dummyjson.com"

    return (
        <Provider store={store}>
            <Router />
        </Provider>
    )
}

const styles = StyleSheet.create({})