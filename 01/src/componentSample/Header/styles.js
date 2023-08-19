import { Dimensions, StyleSheet } from "react-native";

let height =  Dimensions.get('screen').height
let width = Dimensions.get('screen').width

export default styles = StyleSheet.create({
    container:{
        backgroundColor: 'red',
        // height: height / 2,
        // width : width / 2
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: 'white',
        fontSize: 25
    }
})