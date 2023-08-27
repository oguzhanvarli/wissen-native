import { StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardComponent from '../../components/Card/CardComponent'
import { DataTable } from 'react-native-paper';
import { clearCard } from '../../store/card/cardSlice';

export default function Card() {

    const card = useSelector((state) => state.card)
    const dispatch = useDispatch()


    return (
        <ScrollView>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Image</DataTable.Title>
                    <DataTable.Title>Miktar</DataTable.Title>
                    <DataTable.Title>Product</DataTable.Title>
                    <DataTable.Title numeric>Price</DataTable.Title>
                </DataTable.Header>
                {card.products.map((product, key) => (
                        <CardComponent key={key} item={product} />
                ))}
            </DataTable>
            <Button title='Clear Card' onPress={() => dispatch(clearCard())} color='red' disabled={card.value === 0 ? true : false} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({})