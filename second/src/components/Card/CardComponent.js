// import { StyleSheet, Text, View, Image } from 'react-native'
// import React from 'react'

// export default function CardComponent({ item }) {


//   return (
//     <View style={styles.container}>
//       <View style={styles.secondContainer}>
//         <Image style={styles.tinyLogo} source={{
//           uri: item.thumbnail,
//         }} />
//       </View>
//       <View style={styles.secondContainer2}>
//         <Text style={styles.title}>{item.title}</Text>
//         <Text style={styles.brand}>{item.brand}</Text>
//       </View>
//       <View style={styles.secondContainer3}>
//         <Text style={styles.price}>{item.price}$</Text>
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     margin: 10,
//     alignItems: 'center'
//   },
//   secondContainer: {
//     flex: 1
//   },
//   secondContainer2: {
//     flex: 2,
//     justifyContent: 'center'
//   },
//   secondContainer3: {
//     flex: 1
//   },
//   tinyLogo: {
//     width: 80,
//     height: 80,
//   },
//   price : {
//     fontSize: 20,
//     color: '#006400'
//   },
//   title: {
//     fontSize: 16,
//     textAlign: 'center'
//   },
//   brand: {
//     textAlign: 'center',
//     color: '#DC143C'
//   }
// })


import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'
import { DataTable } from 'react-native-paper';

const CardComponent = ({ item }) => {

  console.log(item)

  return (
    <DataTable.Row  style={styles.row}>
      <DataTable.Cell> <Image style={styles.tinyLogo} source={{
        uri: item.thumbnail,
      }} /></DataTable.Cell>
      <DataTable.Cell>{item.quantity ? item.quantity : '1'}</DataTable.Cell>
      < DataTable.Cell style={styles.titleContainer} > <View><Text style={styles.title}>{item.title}</Text><Text style={styles.brand}>{item.brand}</Text></View></DataTable.Cell>
      <DataTable.Cell numeric ><Text style={styles.price}>{item.price}$</Text></DataTable.Cell>
    </DataTable.Row>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  row: {
    minHeight: 90,
  },
  tinyLogo: {
    width: 80,
    height: 80,
  },
  price: {
    fontSize: 20,
    color: '#006400'
  },
  title: {
    fontSize: 12,
    textAlign: 'right',
    // maxWidth: 100

  },
  brand: {
    textAlign: 'center',
    color: '#DC143C'
  },
})