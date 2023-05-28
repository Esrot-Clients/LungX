import { StyleSheet, Text, View , FlatList} from 'react-native'
import React from 'react'
import PatientDetailsCard from '../components/Molecules/PatientDetailsCard'
import { BtnContain } from '../components/Atoms/Buttons'
import colors from '../constants/colors'
import metrics from '../constants/layout'

export default function SentReport() {
  return (
    <View style={styles.container}>
        <FlatList
        showsVerticalScrollIndicator={false}
        data={[1,2,3,4,5,6,7,8,9,10]}
        renderItem={({item}) => <PatientDetailsCard />}
        keyExtractor={(item) => item.toString()}
        />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 20,
    }
})