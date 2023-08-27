import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import CardComponent from '../../components/Card/CardComponent'
import { DataTable } from 'react-native-paper';

export default function Card() {

    const card = useSelector((state) => state.card)


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
        </ScrollView>
    )
}

const styles = StyleSheet.create({})