import { View, Text, Button, FlatList, Alert, ActivityIndicator } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import styles from './styles'
import HandleNavigate from '../../utilities/HandleNavigate'
import axios from 'axios'
import ProductCart from '../../components/productCart/ProductCart'

export default function Home({ navigation }) {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  // const [number, setNumber] = useState(0)

  const getData = async () => {
    await axios.get("https://dummyjson.com/products")
      .then((response) => {
        setData(response.data)
      })
      .catch(error => {
        Alert.alert('Hata', 'Bir Hata Oluştu.Lütfen Tekrar Deneyin.')
        console.log('Get Prodcuts Error ' + error)
      })
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  const renderCard = useCallback(({ item }) => {
    return <ProductCart item={item} onPress={goToDetails} />
  }, [data])

  const goToDetails = (value) =>{
    navigation.navigate('Details', {item: value})
  }


  return (
    <View style={styles.container}>
      {loading ?
        <ActivityIndicator size="large" color="#0000ff" /> :
        <FlatList data={data.products} renderItem={renderCard} />}
      {/* <Button title='Get Data' onPress={getData} /> */}
    </View>
  )
}