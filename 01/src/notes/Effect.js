import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Effect() {

    const [data, setData] = useState([])
    const [name, setName] = useState('oguzhan')
    
    useEffect(() => {
        //data çekme işlemi yapıyorum
        console.log('useEffect Worked')
        // setName('useEffect Öğrendik')
    },[data])
    

    const handleName = () => {
        setName('oğuzhan Varlı')
    }
    const handleData = () => {
        let secondData = ['ali', 'ayseyi', 'seviyor']
        setData(secondData)
    }



  return (
    <View style={styles.container}>
    <Text style={styles.text}>Name = {name}</Text>
    <View style={styles.secondContainer}>
        <Button title='Name Change' onPress={() => handleName()} />
        <Button color={'green'} title='Data Change' onPress={() => handleData()} />
    </View>
</View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'red',
        fontSize: 40
    },
    secondContainer: {
        flexDirection: 'row',
    }
})