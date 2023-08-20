import { View, Text, Button } from 'react-native'
import React from 'react'
import styles from './styles'
import HandleNavigate from '../../utilities/HandleNavigate'

export default function About({navigation}) {

  let data = {
    name: 'siyah kazak',
    size : 'large',
    stock: 100,
    seller : [ 'trendyol', 'altınyıldız','boyner']
  }

  
  const goToPage = (value, params) => {
    navigation.navigate(value, params)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About</Text>
      <HandleNavigate title="Go Details" color="black" onPress={() => goToPage('Details', data)}/>
    </View>
  )
}
