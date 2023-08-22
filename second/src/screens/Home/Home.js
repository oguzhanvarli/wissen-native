import { View, Text, Button, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import HandleNavigate from '../../utilities/HandleNavigate'
import axios from 'axios'
import ProductCart from '../../components/productCart/ProductCart'

export default function Home({ navigation }) {

  const [data, setData] = useState([])
  const [number, setNumber] = useState(0)

  const getData = () => {
    axios.get("https://dummyjson.com/products")
      .then((response) => {
        setData(response.data)
      })
  }

  useEffect(() => {
    getData()
  }, [data])


  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>{data.limit}</Text>
      <FlatList data={data.products} renderItem={({ item }) => <ProductCart item={item}/>} />
      {/* <Button title='Get Data' onPress={getData} /> */}
    </View>
  )
}