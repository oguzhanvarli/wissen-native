import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useState} from 'react'
import { TextInput } from 'react-native-paper'

export default function AddProduct() {
    const [title, setTitle] = useState("")
    const [brand, setBrand] = useState("")
    const [Category, setCategory] = useState("")
    const [price, setPrice] = useState(0)

    console.log(title)
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}  placeholder='Product Title' value={title} onChangeText={(title) => setTitle(title)}/>
      <TextInput style={styles.input} placeholder='Product Brand' value={null} onChangeText={null}/>
      <TextInput style={styles.input} placeholder='Product Category'value={null} onChangeText={null}/>
      <TextInput style={styles.input} placeholder='Product Price' keyboardType='number-pad' value={null} onChangeText={null}/>
      <Button onPress={null} title="Save Product" />
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