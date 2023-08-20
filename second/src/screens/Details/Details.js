import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import HandleNavigate from '../../utilities/HandleNavigate'

export default function Details({ route, navigation }) {
  let product = route.params
  const goBack = () => {
    navigation.goBack()
  }
  return (
    <View>
      <Text>Name = {product.name}</Text>
      <Text>Size = {product.size}</Text>
      <Text>Stock = {product.stock}</Text>
      <View style={{marginTop: 25}}>
        <FlatList data={product.seller} renderItem={({ item }) => <Text>{item}</Text>} />
      </View>
      <HandleNavigate color="aqua" title="Go Back" onPress={goBack} />

    </View>
  )
}

const styles = StyleSheet.create({})