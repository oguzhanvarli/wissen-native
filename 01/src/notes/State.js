import { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


export default function State() {

    let name = 'Oğuzhan'

    const [number, setNumber] = useState(10)

    const changeName = () => {
        name = 'Oğuzhan Varlı'
        console.log(name)
    }
    const changeNumber = () => {
        console.log('first' + number)
        setNumber(number + 10)
        console.log('second' + number)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sayı : </Text>
            <Text style={styles.text}>{number}</Text>
            <Button title='Change Number' onPress={() => changeNumber()} />
            {/* <Text style={styles.text}>İsim : </Text>
            <Text style={styles.text}>{name}</Text> */}
            {/* <Button title='Change Name' onPress={changeName} /> */}
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
        fontSize: 40,
        color: 'red'
    }
})