import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { arttir, azalt, inputaGoreDegistir } from '../store/card/cardSlice'

export default function Main() {

    const [sayi, setSayi] = useState(0) 

    const dispatch = useDispatch()

    const changeValue = () => {
        dispatch(arttir())
    }
    const changeValue2 = () => {
        dispatch(arttir())
    }

    const inputDegistir = () => {
        dispatch(inputaGoreDegistir(Number(sayi)))
    }

    

  return (
    <View style={styles.container}>
      <Button title={"1 Arttir"} color="green" onPress={() => dispatch(arttir())} />
      <Button title={"1 Azalt"} color="aqua" onPress={() => dispatch(azalt())} />
      <TextInput keyboardType='numeric' style={styles.input} onChangeText={(sayi) => setSayi(sayi)}/>
      <Button title={"Ekle"} color="navy" onPress={inputDegistir} />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    input:{
        backgroundColor: 'red',
        color: 'white',
        fontSize: 35,
        marginTop: 50
    }
})