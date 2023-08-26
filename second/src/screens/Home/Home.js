import { View, Text, Button, FlatList, Alert, ActivityIndicator } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import styles from './styles'
import HandleNavigate from '../../utilities/HandleNavigate'
import axios from 'axios'
import ProductCart from '../../components/productCart/ProductCart'
import BaseService from '../../services/baseService/BaseService'
import {useSelector} from 'react-redux'

export default function Home({ navigation }) {

  const card = useSelector((state) => state.card.value)

  const [data, setData] = useState({
    products: []
  })
  const [loading, setLoading] = useState(true)
  // const [number, setNumber] = useState(0)

  const getData = async () => {
    // await axios.get("/products")
    //   .then((response) => {
    //     setData(response.data)
    //   })
    //   .catch(error => {
    //     Alert.alert('Hata', 'Bir Hata Oluştu.Lütfen Tekrar Deneyin.')
    //     console.log('Get Prodcuts Error ' + error)
    //   })
    // setLoading(false)
    await BaseService.get('/products').then(res => setData(res))
    setLoading(false)
  }



  useEffect(() => {
    getData()
  }, [])

  const renderCard = useCallback(({ item }) => {
    return <ProductCart item={item} onPress={goToDetails} />
  }, [data])

  const goToDetails = (value) => {
    navigation.navigate('Details', { item: value })
  }


  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <Button title='Add Product' onPress={() => navigation.navigate('AddProduct')} />
        <Button title={`Card = ${card}`} onPress={null} color='#F0E68C' disabled />
      </View>
      <View style={styles.flatContainer}>
        {loading ?
          <ActivityIndicator size="large" color="#0000ff" /> :
          <FlatList data={data.products.length > 0 ? data.products : null} renderItem={renderCard} />}
        {/* <Button title='Get Data' onPress={getData} /> */}
      </View>
    </View>
  )
}

