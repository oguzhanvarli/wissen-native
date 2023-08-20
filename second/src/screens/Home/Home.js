import { View, Text, Button } from 'react-native'
import React from 'react'
import styles from './styles'
import HandleNavigate from '../../utilities/HandleNavigate'

export default function Home({ navigation }) {


  const goToPage = (value) => {
    navigation.navigate(value)
  }

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <HandleNavigate title="About" color="red" onPress={() => goToPage('About')} />
      <HandleNavigate title="Profile" color="blue" onPress={() => goToPage('Profile')} />

      {/* <Button title="Go About" onPress={() => goToPage('About')}/>
      <Button color={'green'} title="Go Profile" onPress={() => goToPage('Profile')}/> */}
    </View>
  )
}