import { StyleSheet, Text as TextNative, View } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper';


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function ProductCart({item}) {
    return (
        <Card style={styles.container}>
            <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
            <Card.Content>
                <Text variant="titleLarge">{item.title}</Text>
                <Text variant="bodyMedium">{item.brand}</Text>
            </Card.Content>
            <Card.Cover source={{ uri: item.thumbnail }} />
            <Card.Actions>
                <Text>{item.description}</Text>
            </Card.Actions>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        minWidth: '90%',
        marginBottom: 10
    }
})