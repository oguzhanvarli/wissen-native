import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0)
    console.log('worked')

    const handleNumber = () => {
        console.log('Azalttım')
        // if(counter <= 0){
        //     return;
        // }else{
        //     setCounter(counter - 1)
        // }
        counter !== 0 ? setCounter(counter - 1) : null
    }


    const handleIncrease = () => {
        console.log('Arttırdım')
        counter  >= 10 ? null : setCounter(counter + 1 ) 
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{counter}</Text>
            <View style={styles.secondContainer}>
                <Button title='Increase' onPress={() => handleIncrease()} />
                <Button title='Decrase' onPress={() => handleNumber()} />
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