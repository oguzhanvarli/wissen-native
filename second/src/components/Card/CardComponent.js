import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function CardComponent({item}) {
    
  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
            <Image style={styles.tinyLogo} source={{
          uri: item.thumbnail,
        }} />
      </View>
      <View style={styles.secondContainer}>
        <Text>{item.title}</Text>
        <Text>{item.brand}</Text>
      </View>
      <View style={styles.secondContainer}>
        <Text>{item.price}</Text>
      </View>
      <View style={styles.secondContainer}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row'
    },
    secondContainer: {
        // flex: 1
    },
    tinyLogo: {
        width: 50,
        height: 50,
      },
})