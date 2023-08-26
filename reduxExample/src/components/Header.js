import { StyleSheet, Text, View } from 'react-native'
import {useSelector} from 'react-redux'
import React from 'react'

export default function Header() {
    const sepetSayisi = useSelector((state) => state.card.value)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sepet: </Text>
      <Text style={styles.text}>{sepetSayisi}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    text: {
        fontSize: 40,
        color: 'red'
    }
})