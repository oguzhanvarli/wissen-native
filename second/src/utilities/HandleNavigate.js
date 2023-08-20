import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

export default function HandleNavigate(props) {
    const { color, title, onPress } = props

    return (
        <View style={styles.button}>
            <Button
                title={title} onPress={onPress} color={color} />
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        margin: 10
    }
})