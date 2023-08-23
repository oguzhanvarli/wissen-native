import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import HandleNavigate from '../../utilities/HandleNavigate'

export default function Details({ route }) {

  let {item} = route.params

  return (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.brand}</Text>
      <Text>{item.rating}</Text>
      <Text>{item.stock}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})