import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import HandleNavigate from '../../utilities/HandleNavigate'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import axios from 'axios'
import Swiper from 'react-native-swiper';

export default function Details({ route }) {

  let { item } = route.params

  const [product, setProduct] = useState({
    images: []
  })

  useEffect(() => {
    getProductById()
  }, [])


  const getProductById = () => {
    axios.get(`https://dummyjson.com/products/${item.id}`)
      .then(res => setProduct(res.data))
      .catch(error => console.log('Get By Id Product Error' + error))
  }

  return (

    <>
      <View>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.title}>{product.brand}</Text>
      </View>
      <Swiper style={styles.wrapper} height={400} horizontal={true} autoplay>
        {product.images.length > 0 ? product.images.map((image, key) => (
          <View key={key} style={styles.slide}>
            <Image style={styles.image} source={{ uri: `${image}` }} />
          </View>
        )) : <ActivityIndicator size="large" color="#0000ff" />}
      </Swiper>
      <Text>{product.description}</Text>
      <Button>Add To Card</Button>

    </>



  )
}

const styles = StyleSheet.create({
  text: {
    margin: 10
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1
  }
})