import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import CardComponent from '../../components/Card/CardComponent'

export default function Card() {

    const card = useSelector((state) => state.card)
    console.log(card)
    return (
        <View>
            {card.products.map((product, key) => (
             <CardComponent key={key} item={product} />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({})