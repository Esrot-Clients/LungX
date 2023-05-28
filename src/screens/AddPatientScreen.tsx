import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Textinput from '../components/Atoms/Textinput';
import metrics from '../constants/layout';

export default function AddPatientScreen() {
  return (
    <View style={styles.container}>
      <Textinput label={'Patient name'} />
      <Textinput label={'Patient ID'} />
      <View style={{flexDirection: 'row', justifyContent: 'space-between', width: metrics.screenWidth * 0.9}}>
        <Textinput width={metrics.screenWidth * 0.43} label='Weight(kg)'/>
        <Textinput  width={metrics.screenWidth * 0.43} label='Temperature(C)'/>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', width: metrics.screenWidth * 0.9}}>
        <Textinput width={metrics.screenWidth * 0.43} label='Oxygen saturation(SpO2)'/>
        <Textinput  width={metrics.screenWidth * 0.43} label='Blood Pressure(mm/hg)'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
