import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Header</Text>
    </View>
  )
}