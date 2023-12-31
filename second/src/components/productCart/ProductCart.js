import { StyleSheet, Text as TextNative, View, Button } from 'react-native'
import React from 'react'
import { Card, Text } from 'react-native-paper';

export default function ProductCart({ item, onPress, addToCard }) {

    return (
        <Card style={styles.container} >
            {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
            <Card.Content style={styles.secondContainer}>
                <Text variant="titleLarge">{item.title}</Text>
                <Text variant="bodyMedium">{item.brand}</Text>
            </Card.Content>
            <Card.Cover source={{ uri: item.thumbnail }} />
            <Card.Actions>
                <Button color="green" title={"Go To Details"} onPress={() => onPress(item)} />
                <Button color="#F0E68C" title={"Add To Card"} onPress={() => addToCard(item)} />
            </Card.Actions>

        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        minWidth: '90%',
        marginBottom: 10
    },
    secondContainer: {
        marginBottom: 10
    },
})