import { StyleSheet, Text, View, Button, ToastAndroid } from 'react-native'
import React, {useState} from 'react'
import { TextInput } from 'react-native-paper'
import axios from 'axios'

export default function AddProduct() {

  // const [product, setProduct] = useState({
  //   title: "",
  //   brand: "",
  //   category: "",
  //   price : 0,
  // })

    const [title, setTitle] = useState("")
    const [brand, setBrand] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState(0)

    const addNewProduct = () => {
      // console.log(title)
      // console.log(brand)
      // console.log(category)
      // console.log(price)

      let data = {
        title: title,
        brand : brand,
        category : category,
        price : price
      }

      axios.post("/products/add",data).then(res => {
        console.log(res.status)
        if(res.status === 200){
          ToastAndroid.show('Product Created', ToastAndroid.SHORT)
        }
      }).catch(error => console.log(error.response?.status))
    }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}  placeholder='Product Title' value={title} onChangeText={(title) => setTitle(title)}/>
      <TextInput style={styles.input} placeholder='Product Brand' value={brand} onChangeText={brand => setBrand(brand)}/>
      <TextInput style={styles.input} placeholder='Product Category'value={category} onChangeText={category => setCategory(category)}/>
      <TextInput style={styles.input} placeholder='Product Price' keyboardType='number-pad' value={price} onChangeText={price => setPrice(price)}/>
      <Button onPress={addNewProduct} title="Save Product" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    input:{
        margin: 10
    }
})