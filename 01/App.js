import { Button, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyCard from './src/components/MyCard/MyCard'
import FlatlistCard from './src/components/FlatlistCard/FlatlistCard'
import Header from './src/componentSample/Header/Header'
import Main from './src/componentSample/Main/Main'
import Footer from './src/componentSample/Footer/Footer'

export default function App() {

    let data2 = [
        { name: 'Beyaban', artist: 'Sagopa Kajmer' },
        { name: 'Gülpembe', artist: 'Barış Manço' },
        { name: 'Yaş', artist: 'Mabel Matiz' },
        { name: "İstanbul'da Sonbahar", artist: 'Teoman' },
        { name: 'Sakın Gelme', artist: 'MFÖ' },
        { name: 'Diva Yorgun', artist: 'Melike Şahin' },
    ]

    return (
        // <View style={styles.container}>

        //     <FlatList
        //         data={data2}
        //         renderItem={({item}) => <FlatlistCard cartItem={item} />}
        //     />

        //     {/* {data && data.map((element, key) => (
        //     <MyCard key={key} name={element.name} artist={element.artist} />
        //         ))} */}
        // </View>

        <View style={styles.container}>
            <Header/>
            <Main />
            <Footer/>
        </View>
        


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray'
    },


})