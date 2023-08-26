import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { sifirla } from '../store/card/cardSlice'

export default function ResetCart() {
    const dispatch = useDispatch()

    return (
        <View>
            <Button title='Kartı Sıfıla' onPress={() => dispatch(sifirla())} />
        </View>
    )
}

const styles = StyleSheet.create({})