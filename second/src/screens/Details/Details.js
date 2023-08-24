import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Swiper from 'react-native-swiper';
import BaseService from '../../services/baseService/BaseService';

export default function Details({ route }) {

  let { item } = route.params

  const [product, setProduct] = useState({
    images: []
  })

  useEffect(() => {
    getProductById()
  }, [])


  const getProductById = () => {
    // axios.get(`/products/${item.id}`)
    //   .then(res => setProduct(res.data))
    //   .catch(error => console.log('Get By Id Product Error' + error))
    BaseService.get(`/products/${item.id}`).then(res => setProduct(res))
  }

  return (

    <>
      <View>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.title}>{product.brand}</Text>
      </View>
      <Swiper style={styles.wrapper} height={500} horizontal={true} autoplay>
        {product.images.length > 0 ? product.images.map((image, key) => (
          <View key={key} style={styles.slide}>
            <Image style={styles.image} source={{ uri: `${image}` }} />
          </View>
        )) : <ActivityIndicator size="large" color="#0000ff" />}
      </Swiper>
      <Text style={styles.price}>{product.price}$</Text>
      <Text>{product.description}</Text>
      <View style={styles.button}>
        <Button title="Add To Card" onPress={null} />
      </View>
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
  },
  title: {
    fontSize: 20,
    color: 'white',
    backgroundColor: 'grey',
    textAlign: 'center'
  },
  button: {
    margin: 10,
    borderRadius: 10
  },
  price: {
    color: 'red',
    fontSize: 20,
    textAlign: 'center'
  }
})