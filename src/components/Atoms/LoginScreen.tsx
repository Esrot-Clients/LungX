import { StyleSheet, View } from 'react-native'
import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay'
import colors from '../../constants/colors'

export default function LoadingScreen() {
    return (
    <View style={styles.container}>
    <Spinner
        visible={true}
        color={colors.green}
    />
</View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'transparent',
        justifyContent:"center",
        alignItems:"center" 
    },

})
