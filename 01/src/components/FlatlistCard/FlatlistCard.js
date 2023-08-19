import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import styles from '../MyCard/styles'

export default function FlatlistCard({cartItem}) {
    

    const handlePress = () => {
        console.log('Pressed')
    }

  return (
    <View style={styles.secondContainer}>
            <Text style={styles.musicName}>{cartItem.name}</Text>
            <Text style={styles.artistName}>{cartItem.artist}</Text>
            <Button style={styles.lissenButton} title="Hemen Dinle" color={"#8FBC8F"} onPress={handlePress} />
        </View>
  )
}

// const styles = StyleSheet.create({})