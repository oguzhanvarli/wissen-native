import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import styles from './styles'


export default function MyCard({name, artist}) {

    // const {name, artist} = props

    const handlePress = () => {
        console.log('Pressed')
    }
    

    return (
        <View style={styles.secondContainer}>
            <Text style={styles.musicName}>{name}</Text>
            <Text style={styles.artistName}>{artist}</Text>
            <Button style={styles.lissenButton} title="Hemen Dinle" color={"#8FBC8F"} onPress={handlePress} />
        </View>
    )
}