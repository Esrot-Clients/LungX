import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'
import fonts from '../../constants/fontsSize'
import metrics from '../../constants/layout'
import { Title } from '../Atoms/Typography'

export default function ComplaintsCard() {
  return (
    <View style={styles.symptomsDetailsContainer}>
    <Title color={colors.black}>Complaints</Title>

    <View style={{marginVertical: 10}}>
      <Title color={colors.black}>Chief Complaints</Title>
    </View>

    <View style={styles.symptomsDetails}>
      <View style={{flex: 0.33}}><Title color={colors.black} size={fonts.font12}>Cough</Title></View>
      <View style={{flex: 0.33, alignItems: 'flex-end'}}><Title color={colors.black} size={fonts.font12}>Since</Title></View>
      <View style={{flex: 0.33,alignItems: 'flex-end'}}><Title color={colors.black} size={fonts.font12}>:{'\t'}1 - 7 days</Title></View>
    </View>

    <View style={styles.symptomsDetails}>
      <View style={{flex: 0.33}}><Title color={colors.black} size={fonts.font12}>Fever</Title></View>
      <View style={{flex: 0.33, alignItems: 'flex-end'}}><Title color={colors.black} size={fonts.font12}>Since</Title></View>
      <View style={{flex: 0.33,alignItems: 'flex-end'}}><Title color={colors.black} size={fonts.font12}>:{'\t'}1 - 7 days</Title></View>
    </View>

    <View style={styles.symptomsDetails}>
      <View style={{flex: 0.33}}><Title color={colors.black} size={fonts.font12}>Sputum</Title></View>
      <View style={{flex: 0.33, alignItems: 'flex-end'}}><Title color={colors.black} size={fonts.font12}>Since</Title></View>
      <View style={{flex: 0.33,alignItems: 'flex-end'}}><Title color={colors.black} size={fonts.font12}>:{'\t'}1 - 7 days</Title></View>
    </View>


    <View style={{marginVertical: 10}}>
      <Title color={colors.black}>Chronic Disease</Title>
    </View>

    
    <View style={styles.symptomsDetails}>
      <View style={{flex: 0.33}}><Title color={colors.black} size={fonts.font12}>Asthma</Title></View>
      <View style={{flex: 0.33, alignItems: 'flex-end'}}><Title color={colors.black} size={fonts.font12}>Since</Title></View>
      <View style={{flex: 0.33,alignItems: 'flex-end'}}><Title color={colors.black} size={fonts.font12}>:{'\t'}1 - 7 days</Title></View>
    </View>

    <View style={styles.symptomsDetails}>
      <View style={{flex: 0.33}}><Title color={colors.black} size={fonts.font12}>Diabetes</Title></View>
      <View style={{flex: 0.33, alignItems: 'flex-end'}}><Title color={colors.black} size={fonts.font12}>Since</Title></View>
      <View style={{flex: 0.33,alignItems: 'flex-end'}}><Title color={colors.black} size={fonts.font12}>:{'\t'}1 - 7 days</Title></View>
    </View>

    <View style={{marginVertical: 10}}>
      <Title color={colors.black}>Lifestyle habits</Title>
    </View>

    
    <View style={styles.symptomsDetails}>
      <View style={{flex: 0.33}}><Title color={colors.black} size={fonts.font12}>Alcohol</Title></View>
      <View style={{flex: 0.33, alignItems: 'flex-end'}}><Title color={colors.black} size={fonts.font12}>Since</Title></View>
      <View style={{flex: 0.33,alignItems: 'flex-end'}}><Title color={colors.black} size={fonts.font12}>:{'\t'}1 - 7 days</Title></View>
    </View>


  </View>
  )
}

const styles = StyleSheet.create({
    symptomsDetailsContainer: {
        width: metrics.screenWidth * 0.9,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: colors.green,
        padding: 20,
        marginVertical: 10,
      },
      symptomsDetails: {
        display: 'flex',
        flexDirection: 'row',
        width: metrics.screenWidth * 0.8,
        marginVertical: 8,
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: colors.green,
        padding: 10,
      },
})