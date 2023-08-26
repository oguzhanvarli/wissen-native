import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { Provider } from 'react-redux'
import { store } from './store/store'

export default function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Main/>
    </Provider>
  )
}

const styles = StyleSheet.create({})